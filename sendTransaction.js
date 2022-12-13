sendMultipleInputsTransaction(
              crypto_type,
              utxo_addr_wif,
              receiver_address,
              receiving_amount,
              change_adress,
              callback,
              custom_floData = ""
          ) {
              let blockchain_explorer;
              let miners_fee = 0.0003;
              const miner_fee_obj = JSON.parse(
                  localbitcoinplusplus.master_configurations.miners_fee
              );
              if (crypto_type == "BTC") {
                  blockchain_explorer = localbitcoinplusplus.server.btc_mainnet;
                  miners_fee = miner_fee_obj.btc;
              } else if (crypto_type == "BTC_TEST") {
                  blockchain_explorer = localbitcoinplusplus.server.btc_testnet;
                  miners_fee = miner_fee_obj.btc;
              } else if (crypto_type == "FLO") {
                  blockchain_explorer = localbitcoinplusplus.server.flo_mainnet;
                  miners_fee = miner_fee_obj.flo;
              } else if (crypto_type == "FLO_TEST") {
                  blockchain_explorer = localbitcoinplusplus.server.flo_testnet;
                  miners_fee = miner_fee_obj.flo;
              }

              if (typeof blockchain_explorer !== "string") {
                  showMessage(
                      `WARNING: Please select cryptocurrency/fiat value from select bar.`
                  );
                  return false;
              }

              let err_msg;
              let utxo_list_req = [];
              const RM_WALLET = new localbitcoinplusplus.wallets;

              for (const pk of utxo_addr_wif) {
                  let keygen = RM_WALLET.generateFloKeys(pk);
                  let utxo_addr = keygen.address;
                  let url = `${blockchain_explorer}/api/addr/${utxo_addr}/utxo`;
                  utxo_list_req.push(helper_functions.ajaxGet(url));
              }

              Promise.all(utxo_list_req).then(all_utxos => {
                  if (all_utxos.length > 0) {
                      try {
                          const utxo_list = [].concat(...all_utxos);
                          utxo_list.sort((a, b) => b.confirmations - a.confirmations);
                          let btc_eq_receiving_amount = helper_functions.truncateDecimals(receiving_amount);

                          let trx = bitjs[crypto_type].transaction();
                          let sum = 0;
                          let signing_private_keys_array = [];

                          for (var key in utxo_list) {
                              if (utxo_list[key].confirmations > 0) {
                                  var obj = utxo_list[key];
                                  // Find the private key of this utxo (signingPk)
                                  let signingPk = utxo_addr_wif
                                  .filter(pk=>RM_WALLET.generateFloKeys(pk).address===obj.address); 
                                  
                                  if(typeof signingPk[0]=="string") {
                                    signing_private_keys_array.push(signingPk[0]);
                                  } else continue;
                                  sum += helper_functions.truncateDecimals(obj.amount);

                                  if (btc_eq_receiving_amount <= sum) {
                                      trx.addinput(obj.txid, obj.vout, obj.scriptPubKey);
                                      break;
                                  } else {
                                      trx.addinput(obj.txid, obj.vout, obj.scriptPubKey);
                                  }
                              }
                          }

                          if (sum <= 0) {
                              console.log(utxo_list);
                              throw new Error("ERROR: No amount found in UTXO.");
                          }

                          // Output cannot be greater than input
                          if (sum < btc_eq_receiving_amount) {
                              btc_eq_receiving_amount = sum;
                          }

                          if (btc_eq_receiving_amount - miners_fee <= 0)
                              throw new Error(
                                  `Error: btc_eq_receiving_amount cannot be less than miners_fee.`
                              );

                          btc_eq_receiving_amount =
                              btc_eq_receiving_amount - miners_fee;
                          btc_eq_receiving_amount = helper_functions.truncateDecimals(
                              btc_eq_receiving_amount
                          );
                          trx.addoutput(receiver_address, btc_eq_receiving_amount);

                          let change_amount = 0;
                          if (sum - btc_eq_receiving_amount - miners_fee > 0) {
                              change_amount = sum - btc_eq_receiving_amount - miners_fee;
                              change_amount = helper_functions.truncateDecimals(change_amount);
                          }

                          if (change_amount > 0) {
                              trx.addoutput(change_adress, change_amount);
                          }
                          var sendFloData = `localbitcoinpluslus tx: Send ${btc_eq_receiving_amount} ${crypto_type} to ${receiver_address}.`; //flochange adding place for flodata -- need a validation of 1024 chars
                          if (custom_floData.length > 0) {
                              sendFloData = custom_floData;
                          }
                          if (crypto_type == "FLO" || crypto_type == "FLO_TEST") {
                              trx.addflodata(sendFloData); // flochange .. create this function
                          }

                          try {
                              console.log(trx);

                              let signedTxHash = trx.sign(signing_private_keys_array, 1); //SIGHASH_ALL DEFAULT 1
                              console.log(signedTxHash);

                              var http = new XMLHttpRequest();
                              var tx_send_url = `${blockchain_explorer}/api/tx/send`;
                              var params = `{"rawtx":"${signedTxHash}"}`;
                              http.open("POST", tx_send_url, true);
                              http.setRequestHeader("Content-type", "application/json");
                              http.onreadystatechange = function () {
                                  //Call a function when the state changes.
                                  if (http.readyState == 4) {
                                      if (http.status == 200) {
                                          console.log(http.responseText);
                                          let response_obj = {
                                              signedTxHash: signedTxHash,
                                              txid: http.responseText
                                          };
                                          //callback(http.responseText);
                                          callback(response_obj);
                                      } else {
                                          let response_obj = {
                                              signedTxHash: signedTxHash,
                                              txid: ""
                                          };
                                          callback(response_obj);
                                      }
                                  }
                              };
                              http.onerror = function () {
                                  let response_obj = {
                                      signedTxHash: signedTxHash,
                                      txid: ""
                                  };
                                  callback(response_obj);
                              };
                              http.send(params);
                          } catch (error) {
                              showMessage(error);
                              throw new Error(error);
                          }
                      } catch (error) {
                          throw new Error(error);
                      }
                  }
              })
          }

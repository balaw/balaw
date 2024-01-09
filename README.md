### Hi there 👋
install make in windows 
open power shell and run this command 
```js
choco install make
```
referencse make https://stackoverflow.com/questions/66525016/how-to-run-make-command-in-gitbash-in-windows

# visual studio 2017 
# visual studio 2015
https://o7planning.org/10815/install-visual-studio-2015-on-windows#1076761
# visual studio 2019
https://my.visualstudio.com/Downloads?q=Visual%20Studio%202019
# visual studio 2017 
https://www.partitionwizard.com/partitionmagic/visual-studio-2017-download.html
https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=15
# bitcoin old 2015
https://gitlab.com/vectorci/bitcoin/-/tree/master?ref_type=heads
### bitcoin 0.1.0

https://github.com/brain-zhang/bitcoin_satoshi/tree/master
```js

git clone https://github.com/Microsoft/vcpkg.git
cd vcpkg
.\bootstrap-vcpkg.bat
.\vcpkg install libsodium
.\vcpkg integrate install

```


```js

.\bootstrap-vcpkg.bat
.\vcpkg integrate install

.\vcpkg search sqlite3
.\vcpkg install sqlite3
.\vcpkg install sqlite3:x64-windows

```
<!--
**balaw/balaw** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
## miner
```
```js
var crypto = require('crypto');


function crypto256(input) {
  var final = crypto.createHmac('sha256', input)
                    .update('test')
                    .digest('hex');
  return final
} 

var hash1 = (header) => crypto256(crypto256(header));

var nonce = 0;
while(1) {
  nonce += 1;

  var header = {
      nonce: nonce,
      previousHash: "dd0e2b79d79be0dfca96b4ad9ac85600097506f06f52bb74f769e02fcc66dec6",
      merkleRoot: "c91c008c26e50763e9f548bb8b2fc323735f73577effbc55502c51eb4cc7cf2e",
      TimeStamp: new Date()
  };
  var cal = hash1(JSON.stringify(header));
  console.log(cal);
  if (parseInt(cal, 16) < parseInt("0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 16)) {
    console.log("success: " + cal);
    console.log("counts for:" + nonce + ' tiems')
    break;
  }

}
```
![image](https://user-images.githubusercontent.com/72818826/207182563-26d50ba1-44f6-4064-8d64-a551c6c189c2.png)


```
```
```js
1.使用Bitcoin API getDifficulty取得現在的難度
https://blockexplorer.com/api/status?q=getDifficulty

2.
從難度去反推(利用公式)現在要計算的Target
https://en.bitcoin.it/wiki/Difficulty
```
0x00000000FFFF0000000000000000000000000000000000000000000000000000 /
0x00000000000404CB000000000000000000000000000000000000000000000000  
= 16307.420938523983 (bdiff)
```

3.難度調整的公式為

```
old_difficulty*(2 weeks)/(time the past 2015 blocks took)

```
https://bitcoin.stackexchange.com/questions/855/what-keeps-the-average-block-time-at-10-minutes

寫在原始碼中main.cpp的GetNextWorkRequired
https://dev.visucore.com/bitcoin/doxygen/pow_8cpp.html#a444323ddc75c2b90f484fa9b9da31dc8

https://bitcoin.stackexchange.com/questions/1212/how-do-the-clients-agree-on-the-target-to-hash-for

4.之後經過block hash(挖礦)
https://en.bitcoin.it/wiki/Block_hashing_algorithm

最後成功算出的礦工即可以獲得獎勵，獎勵的錢及為下一個區塊的coinbase

5.算出來的hash及為下一個區塊的block hash
```

```
```
```js


假設在區塊277,316中，它的值為 0x1903a30c。分為前兩位十六進位數字，與後面的六位。在這個區塊裡，0x19為前兩位，而 0x03a30c 為後六位。

計算難度目標的公式為：
 target = coefficient * 2^(8 * (exponent – 3))
由此公式及難度位的值 0x1903a30c，可得：
target = 0x03a30c * 2^(0x08 * (0x19 - 0x03))

=> target = 0x03a30c * 2^(0x08 * 0x16)

=> target = 0x03a30c * 2^0xB0
按十進位計算為：
=> target = 238,348 * 2^176
=> target =
22,829,202,948,393,929,850,749,706,076,701,368,331,072,452,018,388,575,715,328
轉為十六進制後為：
=> target =0x0000000000000003A30C00000000000000000000000000000000000000000000

```
```
```
```js
 1 KHash/s = 1000 Hash/s
 1 MHash/s = 1000 KHash/s
 1 GHash/s = 1000 MHash/s
 1 THash/s = 1000 GHash/s
 1 PHash/s = 1000 THash/s

 所以 1 PHash/s = 1000000000000000 Hash/s
 ```
 ```
 ![image](https://user-images.githubusercontent.com/72818826/207182965-016bd7f8-2d33-42a9-b096-08fded7814be.png)

 ```
 ```js
 
 var crypto = require('crypto');


function crypto256(input) {
  var final = crypto.createHmac('sha256', input)
                    .update('test')
                    .digest('hex');
  return final
} 

var hash1 = (header) => crypto256(crypto256(header));

var nonce = 0;
while(1) {
  nonce += 1;

  var header = {
      nonce: nonce,
      previousHash: "dd0e2b79d79be0dfca96b4ad9ac85600097506f06f52bb74f769e02fcc66dec6",
      merkleRoot: "c91c008c26e50763e9f548bb8b2fc323735f73577effbc55502c51eb4cc7cf2e",
      TimeStamp: new Date()
  };
  var cal = hash1(JSON.stringify(header));
  console.log(cal);
  if (parseInt(cal, 16) < parseInt("0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 16)) {
    console.log("success: " + cal);
    console.log("counts for:" + nonce + ' tiems')
    break;
  }

}
```
```
```
```js
Version: 536870912
Prev block: 0000000000000000008D8AF3B55F92BFFEBF286D9C87C54F80C780224F8DD06C
Merkle root: AA5FB4AFB0154D2BDD3315E074F219351FDF13908F1C515E07BE12124A3D3760
Timestamp: February 16, 2017, 17:35:35 +0800
Bits: 18029AB9
Nonce: 一個隨機數
```
```
```js
var crypto = require('crypto');

const tx1 = '51b78168d94ec307e2855697209275d477e05d8647caf29cb9e38fb6a4661145';
const tx2 = 'dasd94ec307e2855697209275d477e05d8647caf29cb9e38fb6a4661145ddddd';

const tx3 = 'b45ff1f1aa88de71005fd14487328cbc74bc47fd783aa6734c1e4c7950962cc4';
const tx4 = 'caede6064e49b54ae53ac44fadd01e66be907f1bbd1daedd8b3f3f9561447f4f';

function crypto256(input) {
    var final = crypto.createHash('sha256')
        .update(input)
        .digest('hex');
    return final
}

var hash1 = crypto256(crypto256(tx1));
var hash2 = crypto256(crypto256(tx2));

var hash3 = crypto256(crypto256(tx3));
var hash4 = crypto256(crypto256(tx4));


var hash1_hash2 = crypto256(crypto256(hash1 + hash2));
var hash3_hash4 = crypto256(crypto256(hash3 + hash4));

var root = crypto256(crypto256(hash1_hash2 + hash3_hash4));

console.log('Merkle Root為:' + root);

```
```
```
```js
HA =  SHA256(SHA256(交易A))
HB =  SHA256(SHA256(交易B))
```
```
![image](https://user-images.githubusercontent.com/72818826/207183302-99f3f595-78e0-4aaa-b47f-881aa369e283.png)

```
```js

4字節    版本    版本號，用於跟踪軟件/協議的更新
32字節   父區塊哈希值    引用區塊鏈中父區塊的哈希值
32字節   Merkle根    該區塊中交易的merkle樹根的哈希值
4字節    時間戳    該區塊產生的近似時間（精確到秒的Unix時間戳）
4字節    難度目標    該區塊工作量證明算法的難度目標
4字節    Nonce    用於工作量證明算法的計數器

```
```
```
```js
var crypto = require('crypto');
var ecdh = crypto.createECDH('secp256k1');


var hash2 = crypto.randomBytes(32)
console.log('--------')
console.log('私鑰')
console.log(hash2); //私鑰，64位十六進制數   //使用hash2.toString('hex')即可看到16進位字串
console.log('--------')


// ECDH和ECDSA產生公私鑰的方式都相同
var publickey = ecdh.setPrivateKey(hash2,'hex').getPublicKey('hex')
console.log('公鑰')
console.log(publickey); //公鑰(通過橢圓曲線算法可以從私鑰計算得到公鑰)
console.log('--------')

//把公鑰以sha256加密後再用ripemd160加密，取得publickeyHash
var hash = crypto.createHash('sha256').update(publickey).digest();
hash = crypto.createHash('ripemd160').update(hash).digest();
console.log('publickeyHash')
console.log(hash);
console.log('--------')


//在publickeyHash前面加上一个00前缀
var version = new Buffer('00', 'hex');
var checksum = Buffer.concat([version, hash]);
//兩次256雙重加密
checksum = crypto.createHash('sha256').update(checksum).digest();
checksum = crypto.createHash('sha256').update(checksum).digest();

//取前4位得到效驗碼
checksum = checksum.slice(0, 4);
console.log('checksum')
console.log(checksum);
console.log('--------')

//把publickeyHash前面一樣加上00而後面加上剛才算出的checksum
var address = Buffer.concat([version, hash, checksum]);
console.log('編碼前地址')
console.log(address);
console.log('--------')


var bs58 = require('bs58');
address = bs58.encode(address);
console.log('編碼後的比特幣地址')
console.log(address);
console.log('--------')
````
```
![image](https://user-images.githubusercontent.com/72818826/207183483-680a06d1-9c26-412e-9079-f6fd956bf17a.png)
```
### https://easonwang.gitbook.io/blockchain/chapter1
```
```js
const { assert } = require("console");
const CryptoJS = require("crypto-js");
 
// BTC #664,061 
// Block headers - needs change to bigendians
const CLAIMED_POW = '0000000000000000000e5ac8accffaa7ba73e200354b799133a29464cac7b8a6';
const version = '2000e000';
const prevBlock = '0000000000000000000c83a44631db885d262ff804ebde085f37f3d2d38521b9';
const merkleRoot = 'fee9c39d82f8c93a26f6ee1411ef16b83d9500249d50c73bbc91d313a6120bf3';
const timestamp = '2021-01-01 18:58:20'; // UTC needs to get Epoch in seconds
const bits = '170f2217';                            
const nonce = 'cbf261da';
 
const epochSec = new Date(timestamp).getTime() / 1000;
const hexEpoch = epochSec.toString(16);
 
function endian(input){
   return Buffer.from(input, 'hex').reverse().toString('hex');
}
 
function getTarget(bits){
    let digits = 2*parseInt('0x' + bits.substring(0,2))-6;
    let target = bits.substring(2);
    for (let i=0;i<digits;i++) target += '0';
    return target;
}
 
function hashIt(input){
    var wordArray = CryptoJS.enc.Hex.parse(input);
    //console.log(wordArray); 
    var hash = CryptoJS.SHA256(wordArray);
    console.log('hash -->' + hash + '<--');
    return hash.toString();
}
 
const hexheaders = endian(version) + endian(prevBlock) + endian(merkleRoot) + endian(hexEpoch) + endian(bits) + endian(nonce);
console.log(hexheaders);
 
const hash = hashIt(hashIt(hexheaders));
const CALCULATED_POW = endian(hash);
 
console.log(CALCULATED_POW);
 
assert(CALCULATED_POW == CLAIMED_POW, 'Error, failed to validate the claimed POW');
 
// validate target
const target = getTarget(bits);
console.log('target ' + target);
console.log('pow    ' + CALCULATED_POW);
assert(parseInt(target, 16) > parseInt(CALCULATED_POW, 16), 'Error, target not reached');
 
<div class="open_grepper_editor" title="Edit & Save To Grepper"></div>
```
### https://tonyyan.wordpress.com/2021/03/02/use-js-to-validate-pow-on-one-btc-block/

```js
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
```
```
```
          
  ### https://en.bitcoin.it/wiki/Transaction  
```
```
  ### Pay-to-Script-Hash
  ```js
  scriptPubKey: OP_HASH160 <scriptHash> OP_EQUAL 
scriptSig: ..signatures... <serialized script>

m-of-n multi-signature transaction:
scriptSig: 0 <sig1> ... <script>
script: OP_m <pubKey1> ... OP_n OP_CHECKMULTISIG

```
```js 
--------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------
 Stack	      |  Script	                                                           |   Description
--------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------
Empty.	<sig> | <pubKey> OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG |  scriptSig and scriptPubKey are combined.
--------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------
<sig> <pubKey>|	OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG          |	Constants are added to the stack.
--------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------
<sig> <pubKey>| <pubKey>	OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG	     |  Top stack item is duplicated.
--------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------
<sig> <pubKey>| <pubHashA><pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG	                 |  Top stack item is hashed.
--------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------
<sig> <pubKey>| <pubHashA> <pubKeyHash>	OP_EQUALVERIFY OP_CHECKSIG	               |  Constant added.
--------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------
<sig> <pubKey>|	OP_CHECKSIG	                                                       |  Equality is checked between the top two stack items.
--------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------
<> true  <>   | <>Empty.	      <     >                                            |  Signature is checked for top two stack items.
--------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------
```

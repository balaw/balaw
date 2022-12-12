  class PoolRewardsManagement {
      constructor(poolManagement, poolData, blockchain) {
        this.poolManagement = poolManagement;
        this.poolData = poolData;
        this.blockchain = blockchain;
        this._payoutInProgress = false;
        this.poolFeePercent = poolManagement.poolSettings._poolFee;
        this.currentPoolBalance = 0;
        this.totalRewardSent = 0;
        this.totalRewardConfirmOther = 0;
        this._toAddresses = [];
      }
      async doPayout() {
        if (this._payoutInProgress) return;
        this._payoutInProgress = true;
        await this._doPayout();
        this._payoutInProgress = false;
      }
      async _doPayout() {
        if (
          !__WEBPACK_IMPORTED_MODULE_0_main_blockchain_Blockchain__["a"]
            .synchronized
        )
          return;
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "--------------------------------------------------",
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "--------------------------------------------------",
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "--------------------------------------------------",
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "--------------------------------------------------",
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "------------------Remained PAYOUT-----------------",
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "--------------------------------------------------",
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "--------------------------------------------------",
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "--------------------------------------------------",
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "--------------------------------------------------",
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
        try {
          this.createRemainPayouts();
          if (!this.prepareRewards())
            throw { message: "No Addresses to send money" };
          await this.createTransactions();
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
            "Payout: Transaction Created",
            __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
              .POOLS
          );
          this.updateMinersReward();
        } catch (exception) {
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].error(
            "----------------------------------------",
            __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
              .POOLS
          );
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].error(
            "Pool Payouts raised an error",
            exception,
            __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
              .POOLS
          );
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].error(
            "----------------------------------------",
            __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
              .POOLS
          );
          return false;
        }
        return true;
      }
      createRemainPayouts() {
        this.poolData.miners.forEach((miner) => {
          this.totalRewardSent += miner._rewardSent;
          this.totalRewardConfirmOther += miner._rewardConfirmedOther;
        });
        let poolRewardSCO = this.totalRewardSent + this.totalRewardConfirmOther;
        let poolCurrentBalance =
          __WEBPACK_IMPORTED_MODULE_0_main_blockchain_Blockchain__[
            "a"
          ].blockchain.accountantTree.getBalance(
            this.blockchain.mining.minerAddress,
            undefined
          );
        poolCurrentBalance -=
          __WEBPACK_IMPORTED_MODULE_5_common_blockchain_global_Blockchain_Mining_Reward__[
            "a"
          ].getFinalReward(this.blockchain.blocks.length - 1) *
          this.poolData.confirmedBlockInformations.length;
        let remainingAmount = Math.floor(
          poolCurrentBalance -
            (poolCurrentBalance + poolRewardSCO) * this.poolFeePercent -
            this.totalRewardConfirmOther
        );
        if (remainingAmount <= 0) {
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].error(
            "Can not Pay the Remaning money because you don't have enough funds or you already paid all the users",
            __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
              .POOLS
          );
          return;
        }
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "I have to pay " +
            remainingAmount /
              __WEBPACK_IMPORTED_MODULE_2_common_utils_coins_WebDollar_Coins__[
                "a"
              ].WEBD +
            " WEBD from " +
            poolCurrentBalance /
              __WEBPACK_IMPORTED_MODULE_2_common_utils_coins_WebDollar_Coins__[
                "a"
              ].WEBD,
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
        let sumTotal = 0;
        this.poolData.miners.forEach((miner) => {
          let percentAlreadyPaid = miner._rewardSent / this.totalRewardSent;
          let reward = Math.floor(
            percentAlreadyPaid * remainingAmount + miner._rewardConfirmedOther
          );
          if (
            reward >=
            __WEBPACK_IMPORTED_MODULE_1_consts_const_global__["a"].MINING_POOL
              .MINING.MINING_POOL_MINIMUM_PAYOUT
          ) {
            this._addAddressTo(miner.address).amount = reward;
            sumTotal += reward;
          }
        });
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "Total to pay " +
            sumTotal /
              __WEBPACK_IMPORTED_MODULE_2_common_utils_coins_WebDollar_Coins__[
                "a"
              ].WEBD.toFixed(0),
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
      }
      prepareRewards() {
        if (this._toAddresses.length === 0) return false;
        for (let i = 0; i < this._toAddresses.length; i++)
          this._toAddresses[i].amount = Math.floor(this._toAddresses[i].amount);
        return true;
      }
      async createTransactions() {
        let sumTotal = 0;
        for (let i = this._toAddresses.length - 1; i >= 0; i--) {
          this._toAddresses[i].amount = Math.floor(this._toAddresses[i].amount);
          if (
            this._toAddresses[i].amount <
            __WEBPACK_IMPORTED_MODULE_1_consts_const_global__["a"].MINING_POOL
              .MINING.MINING_POOL_MINIMUM_PAYOUT
          ) {
            let miner = this.poolData.findMiner(this._toAddresses[i].address);
            miner.rewardConfirmedOther += Math.max(
              0,
              this._toAddresses[i].amount
            );
            this._toAddresses.splice(i, 1);
          } else {
            __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
              "Will pay " +
                this._toAddresses[i].amount /
                  __WEBPACK_IMPORTED_MODULE_2_common_utils_coins_WebDollar_Coins__[
                    "a"
                  ].WEBD +
                " WEBD to " +
                __WEBPACK_IMPORTED_MODULE_3_common_blockchain_interface_blockchain_addresses_Interface_Blockchain_Address_Helper__[
                  "a"
                ].generateAddressWIF(this._toAddresses[i].address, false, true),
              __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"]
                .LOG_TYPE.POOLS
            );
            sumTotal += this._toAddresses[i].amount;
          }
        }
        this._removeAddressTo(this.blockchain.mining.unencodedMinerAddress);
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "Total to pay " +
            sumTotal /
              __WEBPACK_IMPORTED_MODULE_2_common_utils_coins_WebDollar_Coins__[
                "a"
              ].WEBD.toFixed(0),
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
        let index = 0;
        while (index * 256 < this._toAddresses.length) {
          let toAddresses = this._toAddresses.slice(
            index * 255,
            (index + 1) * 255
          );
          try {
            let transaction =
              await __WEBPACK_IMPORTED_MODULE_0_main_blockchain_Blockchain__[
                "a"
              ].Transactions.wizard.createTransactionSimple(
                this.blockchain.mining.minerAddress,
                toAddresses,
                undefined,
                PAYOUT_FEE
              );
            if (!transaction.result)
              throw { message: "Transaction was not made" };
          } catch (exception) {
            __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].error(
              "Payout: ERROR CREATING TRANSACTION",
              __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"]
                .LOG_TYPE.POOLS
            );
          }
          index++;
        }
        __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].info(
          "Payout: Transactions made  " + index,
          __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].LOG_TYPE
            .POOLS
        );
      }
      updateMinersReward() {
        for (let i = 0; i < this._toAddresses.length; i++) {
          let miner = this.poolData.findMiner(this._toAddresses[i].address);
          if (!miner)
            __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"].error(
              "ERROR! Miner was not found at the payout",
              __WEBPACK_IMPORTED_MODULE_4_common_utils_logging_Log__["a"]
                .LOG_TYPE.POOLS
            );
          miner.rewardSent += this._toAddresses[i].amount;
          miner.rewardConfirmedOther = 0;
        }
        this._toAddresses = [];
      }
      _findAddressTo(address, returnPos = false) {
        for (let q = 0; q < this._toAddresses.length; q++)
          if (this._toAddresses[q].address.equals(address))
            return returnPos ? q : this._toAddresses[q];
        return returnPos ? -1 : null;
      }
      _addAddressTo(address) {
        let found = this._findAddressTo(address);
        if (found !== null) return found;
        let object = { address: address, amount: 0 };
        this._toAddresses.push(object);
        return object;
      }
      _removeAddressTo(address) {
        let index = this._findAddressTo(address, true);
        if (index !== -1) this._toAddresses.splice(index, 1);
      }
    }
    __webpack_exports__["a"] = PoolRewardsManagement;
  },

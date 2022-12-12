 let InheritedPoolMining;
      if (true) {
        InheritedPoolMining = __webpack_require__(1113).default;
      } else {
        InheritedPoolMining =
          require("./backbone/Pool-Backbone-Mining").default;
      }
      class MinerPoolMining extends InheritedPoolMining {
        constructor(minerPoolManagement) {
          super(minerPoolManagement.blockchain);
          this.minerPoolManagement = minerPoolManagement;
          this._miningWork = {
            block: undefined,
            blockId: -1,
            start: undefined,
            end: undefined,
            height: undefined,
            difficultyTarget: undefined,
            serializedHeader: undefined,
            resolved: true,
            poolSock1et: undefined,
          };
          __WEBPACK_IMPORTED_MODULE_0_node_lists_Nodes_List__["a"].emitter.on(
            "nodes-list/disconnected",
            (nodesListObject) => {
              if (nodesListObject.socket === this._miningWork.poolSocket)
                this._miningWork.poolSocket = null;
            }
          );
          this._minerAddress =
            __WEBPACK_IMPORTED_MODULE_3_main_blockchain_Blockchain__[
              "a"
            ].blockchain.mining.minerAddress;
          this._unencodedMinerAddress =
            __WEBPACK_IMPORTED_MODULE_3_main_blockchain_Blockchain__[
              "a"
            ].blockchain.mining.unencodedMinerAddress;
          this._isBeingMining = undefined;
          if (this._workers) this._workers._in_pool = true;
          this._miningBalances = {};
        }
        _startMinerPoolMining() {
          if (!this._checkForWorkInterval)
            this._checkForWorkInterval = this._checkForWorkIntervalCallback();
          this._miningWork.date = new Date().getTime();
        }
        _stopMinerPoolMining() {
          clearTimeout(this._checkForWorkInterval);
          this.started = false;
          this._checkForWorkInterval = undefined;
          InheritedPoolMining.prototype.stopMining.call(this);
        }
        getMedianTimestamp() {
          return this._miningWork.medianTimestamp;
        }
        async _setAddress(newAddress, save, skipChangingAddress = false) {
          await InheritedPoolMining.prototype._setAddress.call(
            this,
            newAddress,
            save
          );
          if (this._minerAddress === newAddress) return;
          let oldMinerAddress = this._minerAddress;
          if (skipChangingAddress) return;
          if (
            __WEBPACK_IMPORTED_MODULE_3_main_blockchain_Blockchain__[
              "a"
            ].Wallet.getAddress(this._minerAddress) === null
          ) {
            if (
              await __WEBPACK_IMPORTED_MODULE_4_node_menu_Advanced_Messages__[
                "a"
              ].confirm(
                "You are mining on a different address in this pool. Do you want to change the pool mining address"
              )
            )
              await this.minerPoolManagement.minerPoolProtocol.changeWalletMining();
          } else
            await this.minerPoolManagement.minerPoolProtocol.changeWalletMining(
              undefined,
              this._minerAddress,
              oldMinerAddress
            );
        }
        updatePoolMiningWork(work, poolSocket) {
          if (
            work.b &&
            work.b.length ===
              __WEBPACK_IMPORTED_MODULE_3_main_blockchain_Blockchain__["a"]
                .Wallet.addresses.length
          ) {
            for (let i = 0; i < work.b.length; i++)
              this._miningBalances[
                __WEBPACK_IMPORTED_MODULE_3_main_blockchain_Blockchain__[
                  "a"
                ].Wallet.addresses[i].unencodedAddress.toString("hex")
              ] = work.b[i];
          }
          let block = new this.blockchain.blockCreator.blockClass(
            this.blockchain,
            undefined,
            0,
            new Buffer(32),
            new Buffer(32),
            new Buffer(32),
            new Buffer(32),
            0,
            0,
            undefined,
            work.h
          );
          block.deserializeBlock(
            work.block,
            work.h,
            undefined,
            work.t,
            undefined,
            undefined,
            true,
            true
          );
          if (
            __WEBPACK_IMPORTED_MODULE_9_common_blockchain_global_Blockchain_Genesis__[
              "a"
            ].isPoSActivated(work.h)
          )
            block.posMinerAddress =
              __WEBPACK_IMPORTED_MODULE_3_main_blockchain_Blockchain__[
                "a"
              ].Mining.unencodedMinerAddress;
          this._miningWork.block = block;
          this._miningWork.blockSerialized = work.block;
          this._miningWork.medianTimestamp = work.m;
          this._miningWork.height = work.h;
          this._miningWork.blockId = work.I || work.h;
          this._miningWork.blockLastSignature = work.lsig || new Buffer(0);
          this._miningWork.difficultyTarget = work.t;
          this._miningWork.serializedHeader = work.s;
          __WEBPACK_IMPORTED_MODULE_3_main_blockchain_Blockchain__[
            "a"
          ].blockchain.blocks._length = work.h;
          __WEBPACK_IMPORTED_MODULE_3_main_blockchain_Blockchain__[
            "a"
          ].blockchain.blocks.emitBlockCountChanged();
          this._miningWork.start = work.start;
          this._miningWork.end = work.end;
          this._miningWork.date = new Date().getTime();
          this._miningWork.poolSocket = poolSocket;
          this._miningWork.resolved = false;
          __WEBPACK_IMPORTED_MODULE_5_common_utils_logging_Log__["a"].info(
            "New Work: " +
              (work.end - work.start) +
              "   starting at: " +
              work.start +
              " block: " +
              this._getBlockSuffix(),
            __WEBPACK_IMPORTED_MODULE_5_common_utils_logging_Log__["a"].LOG_TYPE
              .POOLS
          );
        }
        _getBlockSuffix() {
          return __WEBPACK_IMPORTED_MODULE_7_common_utils_BufferExtended__["a"]
            .substr(this._miningWork.serializedHeader, 10, 26)
            .toString("hex");
        }
        async mineNextBlock(suspend) {
          while (
            this.started &&
            !__WEBPACK_IMPORTED_MODULE_2_consts_global__["a"].TERMINATED
          ) {
            if (!this._miningWork.block || this._miningWork.resolved)
              await __WEBPACK_IMPORTED_MODULE_3_main_blockchain_Blockchain__[
                "a"
              ].blockchain.sleep(5);
            else {
              try {
                let timeInitial = new Date().getTime();
                this._isBeingMining = new Promise(async (resolve) => {
                  try {
                    let workHeight = this._miningWork.height;
                    let workId = this._miningWork.blockId;
                    let workEnd = this._miningWork.end;
                    let workStart = this._miningWork.start;
                    let answer = await this._run();
                    if (!answer) {
                      await __WEBPACK_IMPORTED_MODULE_3_main_blockchain_Blockchain__[
                        "a"
                      ].blockchain.sleep(10000);
                      resolve(false);
                      return false;
                    }
                    answer.timeDiff = new Date().getTime() - timeInitial;
                    answer.id = workId;
                    answer.h = workHeight;
                    if (answer.hashes != 0) answer.hashes = workEnd - workStart;
                    if (!this.resetForced) this._miningWork.resolved = true;
                    else this.resetForced = false;
                    this.minerPoolManagement.minerPoolProtocol.pushWork(
                      answer,
                      this._miningWork.poolSocket
                    );
                  } catch (exception) {
                    console.log("Pool Mining Exception", exception);
                    this.stopMining();
                  }
                  resolve(true);
                });
                await this._isBeingMining;
              } catch (exception) {
                console.log("Pool Mining Exception 2", exception);
              }
            }
          }
        }
        _run() {
          this._runningPromise = new Promise(async (resolve) => {
            try {
              if (!this._miningWork.block)
                throw { message: "block is undefined" };
              if (typeof this._miningWork.start !== "number")
                throw { message: "start is undefined" };
              if (typeof this._miningWork.end !== "number")
                throw { message: "end is undefined" };
              if (!this._miningWork.difficultyTarget)
                throw { message: "difficultyTarget is undefined" };
              let answer = await this.mine(
                this._miningWork.block,
                this._miningWork.difficultyTarget,
                this._miningWork.start,
                this._miningWork.end,
                this._miningWork.height
              );
              resolve(answer);
            } catch (exception) {
              console.error(
                "Couldn't mine block ",
                this._miningWork.block.toJSON(),
                exception
              );
              resolve(null);
            }
          });
          return this._runningPromise;
        }
        async _checkForWorkIntervalCallback() {
          try {
            if (
              this.started &&
              this.minerPoolManagement.started &&
              (new Date().getTime() - this._miningWork.date > 300000 ||
                this.minerPoolManagement.minerPoolProtocol.connectedPools
                  .length === 0)
            ) {
              __WEBPACK_IMPORTED_MODULE_5_common_utils_logging_Log__["a"].error(
                "Mining Pool is not working. Trying to reconnect",
                __WEBPACK_IMPORTED_MODULE_5_common_utils_logging_Log__["a"]
                  .LOG_TYPE.POOLS
              );
              __WEBPACK_IMPORTED_MODULE_0_node_lists_Nodes_List__[
                "a"
              ].disconnectAllNodes();
              await this.minerPoolManagement.minerPoolProtocol.insertServersListWaitlist(
                this.minerPoolSettings.poolServers
              );
              this._miningWork.date = new Date().getTime();
            }
          } catch (exception) {}
          this._checkForWorkInterval = setTimeout(
            this._checkForWorkIntervalCallback.bind(this),
            5000
          );
        }
      }
      __webpack_exports__["a"] = MinerPoolMining;

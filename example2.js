 class PoolBrowserMining extends __WEBPACK_IMPORTED_MODULE_0_common_blockchain_interface_blockchain_mining_browser_Interface_Blockchain_Browser_Mining__[
      "default"
    ] {
      constructor(blockchain, minerAddress, miningFeePerByte) {
        super(blockchain, minerAddress, miningFeePerByte);
        this.useResetConsensus = false;
      }
    }
    __webpack_exports__["default"] = PoolBrowserMining;
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_common_events_Status_Events__ =
      __webpack_require__(12);
    class MinerPoolReward {
      constructor(minerPoolManagement) {
        this.minerPoolManagement = minerPoolManagement;
        this._totalReward = 0;
        this._confirmedReward = 0;
        this._totalReferralReward = 0;
        this._confirmedReferralReward = 0;
      }
      get total() {
        return this._totalReward + this._totalReferralReward;
      }
      set totalReward(newValue) {
        if (this._totalReward === newValue || typeof newValue !== "number")
          return;
        this._totalReward = parseInt(newValue);
        __WEBPACK_IMPORTED_MODULE_0_common_events_Status_Events__["a"].emit(
          "miner-pool/total-reward",
          { totalReward: newValue }
        );
      }
      get totalReward() {
        return this._totalReward;
      }
      set confirmedReward(newValue) {
        if (this._confirmedReward === newValue || typeof newValue !== "number")
          return;
        this._confirmedReward = parseInt(newValue);
        __WEBPACK_IMPORTED_MODULE_0_common_events_Status_Events__["a"].emit(
          "miner-pool/confirmed-reward",
          { confirmedReward: this._confirmedReward }
        );
      }
      get confirmedReward() {
        return this._confirmedReward;
      }
      set totalReferralReward(newValue) {
        if (
          this._totalReferralReward === newValue ||
          typeof newValue !== "number"
        )
          return;
        this._totalReferralReward = parseInt(newValue);
        __WEBPACK_IMPORTED_MODULE_0_common_events_Status_Events__["a"].emit(
          "miner-pool/referral-total-reward",
          { referralTotalReward: this._totalReferralReward }
        );
      }
      set confirmedReferralReward(newValue) {
        if (
          this._confirmedReferralReward === newValue ||
          typeof newValue !== "number"
        )
          return;
        this._confirmedReferralReward = parseInt(newValue);
        __WEBPACK_IMPORTED_MODULE_0_common_events_Status_Events__["a"].emit(
          "miner-pool/referral-confirmed-reward",
          { referralConfirmedReward: this._confirmedReferralReward }
        );
      }
      get totalReferralReward() {
        return this._totalReferralReward;
      }
      get confirmedReferralReward() {
        return this._confirmedReferralReward;
      }
      setReward(data) {
        this.confirmedReward = data.confirmed;
        this.totalReward = data.reward;
        this.totalReferralReward = data.refReward;
        this.confirmedReferralReward = data.refConfirmed;
      }
    }
    __webpack_exports__["a"] = MinerPoolReward;
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_common_utils_Advanced_Emitter__ =
      __webpack_require__(71);
    class MinerPoolStatistics {
      constructor(minerPoolManagement) {
        this.emitter =
          new __WEBPACK_IMPORTED_MODULE_0_common_utils_Advanced_Emitter__["a"](
            100
          );
        this.minerPoolManagement = minerPoolManagement;
        this._poolHashes = 0;
        this._poolMinersOnline = 0;
        this._poolBlocksBeingConfirmed = 0;
        this._poolBlocksConfirmed = 0;
        this._poolBlocksConfirmedAndPaid = 0;
        this._poolBlocksUnconfirmed = 0;
        this._poolTimeRemaining = 0;
      }
      set poolHashes(newValue) {
        if (this._poolHashes === newValue) return;
        this._poolHashes = newValue;
        this._emitNotification();
      }
      get poolHashes() {
        return this._poolHashes;
      }
      set poolMinersOnline(newValue) {
        if (this._poolMinersOnline === newValue) return;
        this._poolMinersOnline = newValue;
        this._emitNotification();
      }
      get poolMinersOnline() {
        return this._poolMinersOnline;
      }
      set poolBlocksConfirmed(newValue) {
        if (this._poolBlocksConfirmed === newValue) return;
        this._poolBlocksConfirmed = newValue;
        this._emitNotification();
      }
      get poolBlocksConfirmed() {
        return this._poolBlocksConfirmed;
      }
      set poolBlocksConfirmedAndPaid(newValue) {
        if (this._poolBlocksConfirmedAndPaid === newValue) return;
        this._poolBlocksConfirmedAndPaid = newValue;
        this._emitNotification();
      }
      get poolBlocksConfirmedAndPaid() {
        return this._poolBlocksConfirmedAndPaid;
      }
      set poolBlocksBeingConfirmed(newValue) {
        if (this._poolBlocksBeingConfirmed === newValue) return;
        this._poolBlocksBeingConfirmed = newValue;
        this._emitNotification();
      }
      get poolBlocksBeingConfirmed() {
        return this._poolBlocksBeingConfirmed;
      }
      set poolBlocksUnconfirmed(newValue) {
        if (this._poolBlocksUnconfirmed === newValue) return;
        this._poolBlocksUnconfirmed = newValue;
        this._emitNotification();
      }
      get poolBlocksUnconfirmed() {
        return this._poolBlocksUnconfirmed;
      }
      set poolTimeRemaining(newValue) {
        if (this._poolTimeRemaining === newValue) return;
        this._poolTimeRemaining = newValue;
        this._emitNotification();
      }
      get poolTimeRemaining() {
        return this._poolTimeRemaining;
      }
      _emitNotification() {
        this.emitter.emit("miner-pool/statistics/update", {
          poolHashes: this._poolHashes,
          poolMinersOnline: this._poolMinersOnline,
          poolBlocksBeingConfirmed: this._poolBlocksBeingConfirmed,
          poolBlocksConfirmed: this._poolBlocksConfirmed,
          poolBlocksConfirmedAndPaid: this._poolBlocksConfirmedAndPaid,
          poolBlocksUnconfirmed: this._poolBlocksUnconfirmed,
          poolTimeRemaining: this.poolTimeRemaining,
        });
      }
    }
    __webpack_exports__["a"] = MinerPoolStatistics;
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    (function (Buffer) {
      var __WEBPACK_IMPORTED_MODULE_0_node_lists_Nodes_List__ =
        __webpack_require__(7);
      var __WEBPACK_IMPORTED_MODULE_1_node_lists_waitlist_Nodes_Waitlist__ =
        __webpack_require__(38);
      var __WEBPACK_IMPORTED_MODULE_2_main_blockchain_Blockchain__ =
        __webpack_require__(6);
      var __WEBPACK_IMPORTED_MODULE_3_common_crypto_WebDollar_Crypto__ =
        __webpack_require__(29);
      var __WEBPACK_IMPORTED_MODULE_4_common_crypto_ed25519__ =
        __webpack_require__(76);
      var __WEBPACK_IMPORTED_MODULE_5_node_lists_types_Node_Consensus_Type__ =
        __webpack_require__(44);
      var __WEBPACK_IMPORTED_MODULE_6_common_mining_pools_common_Pools_Utils__ =
        __webpack_require__(127);
      var __WEBPACK_IMPORTED_MODULE_7_common_mining_pools_common_Pool_Protocol_List__ =
        __webpack_require__(183);
      var __WEBPACK_IMPORTED_MODULE_8_common_utils_Serialization__ =
        __webpack_require__(10);
      var __WEBPACK_IMPORTED_MODULE_9_common_events_Status_Events__ =
        __webpack_require__(12);
      var __WEBPACK_IMPORTED_MODULE_10_common_blockchain_interface_blockchain_addresses_Interface_Blockchain_Address_Helper__ =
        __webpack_require__(18);
      var __WEBPACK_IMPORTED_MODULE_11_node_menu_Advanced_Messages__ =
        __webpack_require__(89);
      var __WEBPACK_IMPORTED_MODULE_12_consts_const_global__ =
        __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_13_common_utils_logging_Log__ =
        __webpack_require__(19);
      var __WEBPACK_IMPORTED_MODULE_14__blockchain_interface_blockchain_agents_Agent_Status__ =
        __webpack_require__(112);
      var __WEBPACK_IMPORTED_MODULE_15__utils_coins_WebDollar_Coins__ =
        __webpack_require__(31);
      var __WEBPACK_IMPORTED_MODULE_16_common_blockchain_global_Blockchain_Genesis__ =
        __webpack_require__(17);
      class MinerPoolProtocol extends __WEBPACK_IMPORTED_MODULE_7_common_mining_pools_common_Pool_Protocol_List__[
        "a"
      ] {
        constructor(minerPoolManagement) {
          super();
          this.minerPoolManagement = minerPoolManagement;
          this.loaded = false;
          this.connectedPools = [];
          this.list = this.connectedPools;
        }
        async _startMinerProtocol() {
          if (this.loaded) return true;
          this.loaded = true;
          for (
            let i = 0;
            i <
            __WEBPACK_IMPORTED_MODULE_0_node_lists_Nodes_List__["a"].nodes
              .length;
            i++
          )
            await this._subscribeMiner(
              __WEBPACK_IMPORTED_MODULE_0_node_lists_Nodes_List__["a"].nodes[i]
            );
          __WEBPACK_IMPORTED_MODULE_0_node_lists_Nodes_List__["a"].emitter.on(
            "nodes-list/connected",
            async (nodesListObject) => {
              await this._subscribeMiner(nodesListObject);
            }
          );
          __WEBPACK_IMPORTED_MODULE_0_node_lists_Nodes_List__["a"].emitter.on(
            "nodes-list/disconnected",
            (nodesListObject) => {
              this._unsubscribeMiner(nodesListObject);
            }
          );
        }
        async _stopMinerProtocol() {}
        async insertServersListWaitlist(serversListArray) {
          __WEBPACK_IMPORTED_MODULE_0_node_lists_Nodes_List__[
            "a"
          ].disconnectAllNodesByConsensusType(
            __WEBPACK_IMPORTED_MODULE_5_node_lists_types_Node_Consensus_Type__[
              "a"
            ].NODE_CONSENSUS_PEER
          );
          return await __WEBPACK_IMPORTED_MODULE_6_common_mining_pools_common_Pools_Utils__[
            "a"
          ].insertServersListWaitlist(
            serversListArray,
            __WEBPACK_IMPORTED_MODULE_5_node_lists_types_Node_Consensus_Type__[
              "a"
            ].NODE_CONSENSUS_SERVER_FOR_MINER
          );
        }
        async _subscribeMiner(nodesListObject) {
          let socket = nodesListObject.socket;
          if (!this.minerPoolManagement.minerPoolStarted) return false;
          try {
            if (
              socket.node.protocol.nodeConsensusType ===
              __WEBPACK_IMPORTED_MODULE_5_node_lists_types_Node_Consensus_Type__[
                "a"
              ].NODE_CONSENSUS_SERVER
            ) {
              let answer = await this._sendPoolHello(socket);
              if (!answer) throw { message: "send hello is not working" };
              socket.on("mining-pool/hello-pool/again", (data) =>
                this._sendPoolHello(socket)
              );
            }
          } catch (exception) {
            console.error("subscribeMiner raised an error", exception);
            socket.disconnect();
          }
        }
        _unsubscribeMiner(nodesListObject) {
          let socket = nodesListObject.socket;
          if (
            socket.node.protocol.nodeConsensusType ===
            __WEBPACK_IMPORTED_MODULE_5_node_lists_types_Node_Consensus_Type__[
              "a"
            ].NODE_CONSENSUS_POOL
          )
            __WEBPACK_IMPORTED_MODULE_9_common_events_Status_Events__["a"].emit(
              "miner-pool/servers-connections",
              { message: "Server Removed" }
            );
        }
        async _sendPoolHello(socket) {
          try {
            let message =
              __WEBPACK_IMPORTED_MODULE_3_common_crypto_WebDollar_Crypto__[
                "a"
              ].getBufferRandomValues(32);
            let addresses = [];
            for (
              let i = 0;
              i <
              __WEBPACK_IMPORTED_MODULE_2_main_blockchain_Blockchain__["a"]
                .Wallet.addresses.length;
              i++
            )
              addresses.push(
                __WEBPACK_IMPORTED_MODULE_2_main_blockchain_Blockchain__[
                  "a"
                ].Wallet.addresses[i].unencodedAddress.toString("hex")
              );
            let answer = await socket.node.sendRequestWaitOnce(
              "mining-pool/hello-pool",
              {
                message: message,
                pool: this.minerPoolManagement.minerPoolSettings.poolPublicKey,
                minerAddress:
                  __WEBPACK_IMPORTED_MODULE_2_main_blockchain_Blockchain__["a"]
                    .blockchain.mining.minerAddress,
                ref:
                  this.minerPoolManagement.minerPoolSettings.poolReferral !== ""
                    ? this.minerPoolManagement.minerPoolSettings.poolReferral
                    : undefined,
                addresses: addresses,
              },
              "answer",
              30000
            );
            if (!answer) throw { message: "pool : didn't respond" };
            if (!answer.result)
              throw { message: "pool : result is not true" + answer.message };
            try {
              if (typeof answer.name !== "string")
                throw { message: "pool: name is invalid" };
              if (typeof answer.fee !== "number")
                throw { message: "pool:  fee is invalid" };
              if (typeof answer.referralFee !== "number")
                throw { message: "pool:  referralFee is invalid" };
              if (typeof answer.website !== "string")
                throw { message: "pool:  website is invalid" };
              if (typeof answer.useSig !== "boolean")
                throw { message: "pool:  useSignatures is invalid" };
              if (!Array.isArray(answer.servers))
                throw { message: "pool:  servers is invalid" };
              let poolName = answer.name;
              let poolFee = answer.fee;
              let poolAddress = answer.address;
              let poolReferralFee = answer.referralFee;
              let poolWebsite = answer.website;
              let poolUseSignatures = answer.useSig;
              let poolServers = answer.servers;
              if (
                !Buffer.isBuffer(answer.signature) ||
                answer.signature.length < 10
              )
                throw { message: "pool: signature is invalid" };
              let newMessage = Buffer.concat([
                message,
                Buffer.from(poolName, "ascii"),
                Buffer.from(poolFee.toString(), "ascii"),
                Buffer.from(poolWebsite, "ascii"),
                Buffer.from(JSON.stringify(poolServers), "ascii"),
                Buffer.from(poolUseSignatures.toString(), "ascii"),
              ]);
              if (
                !__WEBPACK_IMPORTED_MODULE_4_common_crypto_ed25519__[
                  "a"
                ].verify(
                  answer.signature,
                  newMessage,
                  this.minerPoolManagement.minerPoolSettings.poolPublicKey
                )
              )
                throw { message: "pool: signature doesn't validate message" };
              socket.node.sendRequest(
                "mining-pool/hello-pool/answer/confirmation",
                { result: true }
              );
              this.minerPoolManagement.minerPoolSettings.poolName = poolName;
              this.minerPoolManagement.minerPoolSettings.poolAddress =
                poolAddress;
              this.minerPoolManagement.minerPoolSettings.poolFee = poolFee;
              this.minerPoolManagement.minerPoolSettings.poolReferralFee =
                poolReferralFee;
              this.minerPoolManagement.minerPoolSettings.poolWebsite =
                poolWebsite;
              this.minerPoolManagement.minerPoolSettings.poolUseSignatures =
                poolUseSignatures;
              this.minerPoolManagement.minerPoolSettings.notifyNewChanges();
              await this._connectionEstablishedWithPool(socket);
              this._updateStatistics(answer);
              this.minerPoolManagement.minerPoolReward.setReward(answer);
              if (answer.work)
                await this._validateRequestWork(answer.work, socket);
              return true;
            } catch (exception) {
              console.error(
                "Exception mining-pool/hello-pool/answer/confirmation",
                exception
              );
              socket.node.sendRequest(
                "mining-pool/hello-pool/answer/confirmation",
                { result: false, message: exception.message }
              );
            }
          } catch (exception) {
            console.error("Exception mining-pool/hello-pool/answer", exception);
          }
          return false;
        }
        async _connectionEstablishedWithPool(socket) {
          this.minerPoolManagement.minerPoolMining.resetForced = true;
          if (this.minerPoolManagement.minerPoolMining._isBeingMining)
            await this.minerPoolManagement.minerPoolMining._isBeingMining;
          this.minerPoolManagement.minerPoolMining.resetForced = false;
          socket.node.protocol.pool = {};
          socket.node.protocol.nodeConsensusType =
            __WEBPACK_IMPORTED_MODULE_5_node_lists_types_Node_Consensus_Type__[
              "a"
            ].NODE_CONSENSUS_POOL;
          this.addElement(socket);
          __WEBPACK_IMPORTED_MODULE_9_common_events_Status_Events__["a"].emit(
            "miner-pool/servers-connections",
            { message: "Server Added" }
          );
          console.info("Miner Pool: connection established");
          __WEBPACK_IMPORTED_MODULE_9_common_events_Status_Events__["a"].emit(
            "miner-pool/connection-established",
            {
              connected: true,
              message: "Connection Established",
              socket: socket,
            }
          );
          if (
            this.minerPoolManagement.blockchain.agent.status ===
            __WEBPACK_IMPORTED_MODULE_14__blockchain_interface_blockchain_agents_Agent_Status__[
              "a"
            ].AGENT_STATUS_NOT_SYNCHRONIZED
          )
            this.minerPoolManagement.blockchain.agent.status =
              __WEBPACK_IMPORTED_MODULE_14__blockchain_interface_blockchain_agents_Agent_Status__[
                "a"
              ].AGENT_STATUS_SYNCHRONIZED;
          socket.node.on("mining-pool/new-work", async (data) => {
            if (!data) throw { message: "new-work invalid work" };
            this._updateStatistics(data);
            this.minerPoolManagement.minerPoolReward.setReward(data);
            this._validateRequestWork(data.work, socket);
            this.minerPoolManagement.minerPoolMining.resetForced = true;
          });
        }
        _validateRequestWork(work, socket) {
          if (typeof work !== "object")
            throw { message: "get-work invalid work" };
          if (typeof work.h !== "number")
            throw { message: "get-work invalid block height" };
          if (!Buffer.isBuffer(work.t))
            throw { message: "get-work invalid block difficulty target" };
          if (!Buffer.isBuffer(work.s))
            throw { message: "get-work invalid block header" };
          if (typeof work.start !== "number")
            throw { message: "get-work invalid noncesStart" };
          if (typeof work.end !== "number")
            throw { message: "get-work invalid noncesEnd" };
          let serialization = work.s;
          work.block = serialization;
          if (this.minerPoolManagement.minerPoolSettings.poolUseSignatures) {
            let message = Buffer.concat([
              work.block,
              __WEBPACK_IMPORTED_MODULE_8_common_utils_Serialization__[
                "a"
              ].serializeNumber4Bytes(work.start),
              __WEBPACK_IMPORTED_MODULE_8_common_utils_Serialization__[
                "a"
              ].serializeNumber4Bytes(work.end),
            ]);
            if (!Buffer.isBuffer(work.sig) || work.sig.length < 10)
              throw { message: "pool: signature is invalid" };
            if (
              !__WEBPACK_IMPORTED_MODULE_4_common_crypto_ed25519__["a"].verify(
                work.sig,
                message,
                this.minerPoolManagement.minerPoolSettings.poolPublicKey
              )
            )
              throw { message: "pool: signature doesn't validate message" };
          }
          this.minerPoolManagement.minerPoolMining.updatePoolMiningWork(
            work,
            socket
          );
        }
        _updateStatistics(data) {
          if (typeof data.m === "number")
            this.minerPoolManagement.minerPoolStatistics.poolMinersOnline =
              data.m;
          if (typeof data.h === "number")
            this.minerPoolManagement.minerPoolStatistics.poolHashes = data.h;
          if (typeof data.b === "number")
            this.minerPoolManagement.minerPoolStatistics.poolBlocksConfirmed =
              data.b;
          if (typeof data.bp === "number")
            this.minerPoolManagement.minerPoolStatistics.poolBlocksConfirmedAndPaid =
              data.bp;
          if (typeof data.ub === "number")
            this.minerPoolManagement.minerPoolStatistics.poolBlocksUnconfirmed =
              data.ub;
          if (typeof data.bc === "number")
            this.minerPoolManagement.minerPoolStatistics.poolBlocksBeingConfirmed =
              data.bc;
          if (typeof data.t === "number")
            this.minerPoolManagement.minerPoolStatistics.poolTimeRemaining =
              data.t;
          if (typeof data.n === "number")
            __WEBPACK_IMPORTED_MODULE_2_main_blockchain_Blockchain__[
              "a"
            ].blockchain.blocks.networkHashRate = data.n;
        }
        async requestWork() {
          if (this.connectedPools.length === 0) return;
          let poolSocket = this.connectedPools[0];
          let answer = await poolSocket.node.sendRequestWaitOnce(
            "mining-pool/get-work",
            {},
            "answer",
            6000
          );
          if (answer === null) throw { message: "get-work answered null" };
          if (answer.result !== true)
            throw { message: "get-work answered false" };
          await this._validateRequestWork(answer.work, poolSocket);
          this._updateStatistics(answer);
          this.minerPoolManagement.minerPoolReward.setReward(answer);
          return true;
        }
        async pushWork(miningAnswer, poolSocket) {
          try {
            if (!poolSocket) poolSocket = this.connectedPools[0];
            if (!poolSocket) throw { message: "You are disconnected" };
            let answer = poolSocket.node.sendRequestWaitOnce(
              "mining-pool/work-done",
              { work: miningAnswer },
              "answer",
              10000
            );
            __WEBPACK_IMPORTED_MODULE_13_common_utils_logging_Log__["a"].info(
              "Push Work: (" +
                miningAnswer.nonce +
                ")" +
                miningAnswer.hash.toString("hex") +
                " id: " +
                miningAnswer.id,
              __WEBPACK_IMPORTED_MODULE_13_common_utils_logging_Log__["a"]
                .LOG_TYPE.POOLS
            );
            if (miningAnswer.pos)
              __WEBPACK_IMPORTED_MODULE_13_common_utils_logging_Log__["a"].info(
                "timestamp " +
                  miningAnswer.pos.timestamp +
                  "   " +
                  "balance " +
                  __WEBPACK_IMPORTED_MODULE_2_main_blockchain_Blockchain__[
                    "a"
                  ].AccountantTree.getBalance(
                    __WEBPACK_IMPORTED_MODULE_2_main_blockchain_Blockchain__[
                      "a"
                    ].blockchain.mining.minerAddress
                  ) /
                    __WEBPACK_IMPORTED_MODULE_15__utils_coins_WebDollar_Coins__[
                      "a"
                    ].WEBD,
                __WEBPACK_IMPORTED_MODULE_13_common_utils_logging_Log__["a"]
                  .LOG_TYPE.POOLS
              );
            if (!miningAnswer.result) {
              try {
                __WEBPACK_IMPORTED_MODULE_13_common_utils_logging_Log__[
                  "a"
                ].warn(
                  "Statistics: Real " +
                    Math.floor(
                      (miningAnswer.hashes / miningAnswer.timeDiff) * 1000
                    ) +
                    " h/s ",
                  __WEBPACK_IMPORTED_MODULE_13_common_utils_logging_Log__["a"]
                    .LOG_TYPE.POOLS
                );
              } catch (exception) {}
            }
            answer = await answer;
            if (!answer) throw { message: "WorkDone: Answer is null" };
            if (answer.result !== true)
              throw {
                message: "WorkDone: Result is not True",
                reason: answer.message,
              };
            this.minerPoolManagement.minerPoolReward.setReward(answer);
            await this._validateRequestWork(
              answer.newWork || answer.work,
              poolSocket
            );
            this._updateStatistics(answer);
            this.minerPoolManagement.minerPoolReward.setReward(answer);
          } catch (exception) {
            console.error("PushWork raised an error", exception);
            return false;
          }
        }
        async changeWalletMining(poolSocket, newAddress, oldAddress) {
          if (!this.minerPoolManagement._minerPoolStarted) return;
          try {
            if (!poolSocket) poolSocket = this.connectedPools[0];
            if (!newAddress)
              newAddress =
                __WEBPACK_IMPORTED_MODULE_2_main_blockchain_Blockchain__["a"]
                  .Wallet.addresses[0].address;
            if (!poolSocket) throw { message: "You are disconnected" };
            oldAddress =
              __WEBPACK_IMPORTED_MODULE_2_main_blockchain_Blockchain__[
                "a"
              ].Wallet.getAddress(
                oldAddress ||
                  this.minerPoolManagement.minerPoolMining.minerAddress
              );
            if (!oldAddress) {
              __WEBPACK_IMPORTED_MODULE_11_node_menu_Advanced_Messages__[
                "a"
              ].alert(
                "In order to change the wallet, you need to have access to the wallet of the address " +
                  this.minerPoolManagement.minerPoolMining.minerAddress,
                "Wallet Error",
                "error",
                5000
              );
              return;
            }
            let unencodedAddress =
              __WEBPACK_IMPORTED_MODULE_10_common_blockchain_interface_blockchain_addresses_Interface_Blockchain_Address_Helper__[
                "a"
              ].getUnencodedAddressFromWIF(oldAddress.address);
            let newUnencodedAddress =
              __WEBPACK_IMPORTED_MODULE_10_common_blockchain_interface_blockchain_addresses_Interface_Blockchain_Address_Helper__[
                "a"
              ].getUnencodedAddressFromWIF(newAddress);
            let message = Buffer.concat([
              unencodedAddress,
              newUnencodedAddress,
            ]);
            let signature = await oldAddress.signMessage(message, undefined);
            let answer = await poolSocket.node.sendRequestWaitOnce(
              "mining-pool/change-wallet-mining",
              {
                minerAddress: oldAddress.address,
                minerAddressPublicKey: oldAddress.publicKey,
                newMinerAddress: newAddress,
                signature: signature,
                type: "only instance",
              },
              "answer",
              12000
            );
            if (answer === null) throw { message: "pool didn't respond" };
            if (answer.result !== true) throw answer;
            else {
              await this.minerPoolManagement.minerPoolMining._setAddress(
                newAddress,
                false,
                true
              );
              this.minerPoolManagement.minerPoolReward.setReward(answer);
              return true;
            }
          } catch (exception) {
            console.error("Couldn't change the wallet", exception.message);
            if (oldAddress)
              await this.minerPoolManagement.minerPoolMining._setAddress(
                oldAddress.address,
                false,
                true
              );
            return false;
          }
        }
        async askWalletMining(poolSocket) {
          if (!this.minerPoolManagement._minerPoolStarted) return;
          try {
            if (poolSocket === undefined) poolSocket = this.connectedPools[0];
            if (poolSocket === null || poolSocket === undefined)
              throw { message: "You are disconnected" };
            let answer = await poolSocket.node.sendRequestWaitOnce(
              "mining-pool/request-wallet-mining",
              {},
              "answer",
              6000
            );
            if (answer === null) throw { message: "pool didn't respond" };
            if (answer.result !== true) throw answer;
            else {
              return { result: true, address: answer.address };
            }
          } catch (exception) {
            console.error("Couldn't change the wallet", exception);
            return { result: false, message: exception.message };
          }
        }
        async getReferralData(poolSocket) {
          try {
            if (poolSocket === undefined) poolSocket = this.connectedPools[0];
            if (poolSocket === undefined || poolSocket === null)
              throw { message: "No Pool Socket" };
            let answer = await poolSocket.node.sendRequestWaitOnce(
              "mining-pool/get-referrals",
              "get",
              "answer",
              6000
            );
            return answer;
          } catch (exception) {
            console.error("Get Referral Data raised an error", exception);
            return { result: false };
          }
        }
      }
      __webpack_exports__["a"] = MinerPoolProtocol;
    }.call(__webpack_exports__, __webpack_require__(1).Buffer));
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_common_events_Status_Events__ =
      __webpack_require__(12);
    var __WEBPACK_IMPORTED_MODULE_1_common_utils_logging_Log__ =
      __webpack_require__(19);
    class MinerPoolReferrals {
      constructor(minerPoolManagement) {
        this.minerPoolManagement = minerPoolManagement;
        this.requireReferrals = false;
        this.referralData = {
          referralLinkAddress: undefined,
          referralLinkAddressOnline: undefined,
          referralsTotal: 0,
          referralsConfirmed: 0,
          referralsSent: 0,
          referees: [],
        };
      }
      startLoadMinerPoolReferrals() {
        if (this._referralTimeout) return;
        this._referralTimeout = setTimeout(
          this._loadReferrals.bind(this),
          60 * 1000
        );
      }
      stopLoadMinerPoolReferrals() {
        clearTimeout(this._referralTimeout);
      }
      async _loadReferrals() {
        if (!this.minerPoolManagement._minerPoolStarted) return;
        if (!this.requireReferrals) {
          this._referralTimeout = setTimeout(
            this._loadReferrals.bind(this),
            10 * 1000
          );
          return;
        }
        await this.requestReferrals();
        this._referralTimeout = setTimeout(
          this._loadReferrals.bind(this),
          60 * 1000
        );
      }
      async requestReferrals() {
        try {
          let data =
            await this.minerPoolManagement.minerPoolProtocol.getReferralData();
          if (!data) throw { message: "get-referrals didn't work" };
          for (let i = 0; i < data.referrals.referees.length; i++)
            data.referrals.referees[i].referralAddress =
              this.minerPoolManagement.minerPoolMining.minerAddress;
          this.referralData = {
            referralLinkAddress: data.referrals.linkAddress,
            referralLinkAddressOnline: data.referrals.linkAddressOnline,
            referralsTotal: data.referrals.total,
            referralsConfirmed: data.referrals.confirmed,
            referralsSent: data.referrals.sent,
            referees: data.referrals.referees,
          };
          __WEBPACK_IMPORTED_MODULE_0_common_events_Status_Events__["a"].emit(
            "mining-pool/pool-referral-data-changed",
            { data: this.referralData }
          );
        } catch (exception) {}
      }
    }
    __webpack_exports__["a"] = MinerPoolReferrals;
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    (function (Buffer) {
      var __WEBPACK_IMPORTED_MODULE_0_common_satoshmindb_Interface_SatoshminDB__ =
        __webpack_require__(70);
      var __WEBPACK_IMPORTED_MODULE_1_consts_const_global__ =
        __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_2_common_crypto_WebDollar_Crypto__ =
        __webpack_require__(29);
      var __WEBPACK_IMPORTED_MODULE_3_common_crypto_ed25519__ =
        __webpack_require__(76);
      var __WEBPACK_IMPORTED_MODULE_4_common_events_Status_Events__ =
        __webpack_require__(12);
      var __WEBPACK_IMPORTED_MODULE_5_common_utils_helpers_Utils__ =
        __webpack_require__(39);
      var __WEBPACK_IMPORTED_MODULE_6_common_mining_pools_common_Pools_Utils__ =
        __webpack_require__(127);
      var __WEBPACK_IMPORTED_MODULE_7_main_blockchain_Blockchain__ =
        __webpack_require__(6);
      var __WEBPACK_IMPORTED_MODULE_8__blockchain_interface_blockchain_agents_Agent_Status__ =
        __webpack_require__(112);
      const sanitizer = __webpack_require__(464);
      class MinerPoolSettings {
        constructor(minerPoolManagement, databaseName) {
          this.minerPoolManagement = minerPoolManagement;
          this._db =
            new __WEBPACK_IMPORTED_MODULE_0_common_satoshmindb_Interface_SatoshminDB__[
              "a"
            ](
              databaseName
                ? databaseName
                : __WEBPACK_IMPORTED_MODULE_1_consts_const_global__["a"]
                    .DATABASE_NAMES.MINER_POOL_DATABASE
            );
          this._poolURL = "";
          this.poolDedicated = false;
          this.poolsList = {};
          this.poolName = "";
          this.poolAddress = "";
          this.poolFee = 0;
          this.poolReferralFee = 0;
          this.poolWebsite = "";
          this.poolDescription = "";
          this.poolServers = [];
          this.poolPublicKey = new Buffer(0);
          this.poolUseSignatures = false;
          this.poolURLReferral = "";
          this._poolMinerAddress = "";
          this._minerPoolActivated = false;
          __WEBPACK_IMPORTED_MODULE_4_common_events_Status_Events__["a"].on(
            "blockchain/mining/address",
            async (data) => {
              if (!this.minerPoolManagement.minerPoolStarted) return;
              this.generatePoolURLReferral();
            }
          );
        }
        async initializeMinerPoolSettings(poolURL) {
          if (poolURL !== undefined) await this.setPoolURL(poolURL);
          await this._getMinerPoolDetails();
          await this._getMinerPoolList();
        }
        generatePoolURLReferral() {
          let url = this._poolURL;
          if (url.indexOf("/r/", url) >= 0)
            url = url.substr(0, url.indexOf("/r/", url));
          this.poolURLReferral =
            (true
              ? window.location.origin
              : "https://webdollar.ddns.net:9094") +
            "/pool/" +
            url +
            "/r/" +
            encodeURI(
              __WEBPACK_IMPORTED_MODULE_7_main_blockchain_Blockchain__[
                "a"
              ].Mining.minerAddress.replace(/#/g, "%23")
            );
          __WEBPACK_IMPORTED_MODULE_4_common_events_Status_Events__["a"].emit(
            "miner-pool/referral-url",
            { poolURLReferral: this.poolURLReferral }
          );
        }
        get poolURL() {
          return this._poolURL;
        }
        async setPoolURL(newValue, skipSaving = false) {
          newValue = await this._replacePoolURL(newValue);
          newValue = sanitizer.sanitize(newValue);
          if (newValue === null || newValue === this._poolURL) return;
          let data =
            __WEBPACK_IMPORTED_MODULE_6_common_mining_pools_common_Pools_Utils__[
              "a"
            ].extractPoolURL(newValue);
          if (!data) throw { message: "poolURL is invalid" };
          this.poolName = data.poolName;
          this.poolFee = data.poolFee;
          this.poolWebsite = data.poolWebsite;
          this.poolDescription = data.poolDescription;
          this.poolPublicKey = data.poolPublicKey;
          this.poolReferral = data.poolReferral;
          await this._setPoolServers(data.poolServers);
          this._poolURL = data.poolURL;
          await this.addPoolList(newValue, data);
          if (!skipSaving)
            if (
              false ===
              (await this._db.save("minerPool_poolURL", this._poolURL))
            )
              throw { message: "PoolURL couldn't be saved" };
          this.generatePoolURLReferral();
          __WEBPACK_IMPORTED_MODULE_4_common_events_Status_Events__["a"].emit(
            "miner-pool/newPoolURL",
            { poolURL: this._poolURL }
          );
          this.notifyNewChanges();
          return true;
        }
        notifyNewChanges() {
          __WEBPACK_IMPORTED_MODULE_4_common_events_Status_Events__["a"].emit(
            "miner-pool/settings",
            {
              poolURL: this._poolURL,
              poolName: this.poolName,
              poolFee: this.poolFee,
              poolReferralFee: this.poolReferralFee,
              poolWebsite: this.poolWebsite,
              poolServers: this.poolServers,
              minerPoolActivated: this._minerPoolActivated,
            }
          );
        }
        async _setPoolServers(newValue) {
          __WEBPACK_IMPORTED_MODULE_6_common_mining_pools_common_Pools_Utils__[
            "a"
          ].validatePoolServers(newValue);
          if (JSON.stringify(this.poolServers) === JSON.stringify(newValue))
            return;
          newValue =
            __WEBPACK_IMPORTED_MODULE_6_common_mining_pools_common_Pools_Utils__[
              "a"
            ].processServersList(newValue);
          this.poolServers = newValue;
          if (this.minerPoolManagement.minerPoolStarted)
            await this.minerPoolManagement.minerPoolProtocol.insertServersListWaitlist(
              this.poolServers
            );
        }
        async _getMinerPoolDetails() {
          let poolURL = await this._db.get(
            "minerPool_poolURL",
            30 * 1000,
            undefined,
            true
          );
          let poolMinerActivated = await this._db.get(
            "minerPool_activated",
            30 * 1000,
            undefined,
            true
          );
          if (poolMinerActivated === "true") poolMinerActivated = true;
          else if (poolMinerActivated === "false") poolMinerActivated = false;
          else if (poolMinerActivated === null) poolMinerActivated = false;
          __WEBPACK_IMPORTED_MODULE_6_common_mining_pools_common_Pools_Utils__[
            "a"
          ].validatePoolActivated(poolMinerActivated);
          await this.setPoolURL(poolURL, true);
          await this.setMinerPoolActivated(poolMinerActivated, true, false);
        }
        async addPoolList(url, data, save = true) {
          if (!data)
            data =
              __WEBPACK_IMPORTED_MODULE_6_common_mining_pools_common_Pools_Utils__[
                "a"
              ].extractPoolURL(url);
          if (!data) return;
          let foundPool = this.poolsList[data.poolPublicKey.toString("hex")];
          if (!foundPool) foundPool = {};
          if (
            JSON.stringify(
              this.poolsList[data.poolPublicKey.toString("hex")]
            ) !== JSON.stringify(data)
          ) {
            this.poolsList[data.poolPublicKey.toString("hex")] = data;
            if (save) await this._saveMinerPoolList();
          }
        }
        async _saveMinerPoolList() {
          let list = {};
          for (let key in this.poolsList) list[key] = this.poolsList[key];
          let result = await this._db.save(
            "minerPool_poolsList",
            new Buffer(JSON.stringify(list), "ascii")
          );
          return result;
        }
        async _getMinerPoolList() {
          let result = await this._db.get(
            "minerPool_poolsList",
            30 * 1000,
            undefined,
            true
          );
          if (result !== null) {
            if (Buffer.isBuffer(result)) result = result.toString("ascii");
            result = JSON.parse(result);
            this.poolsList = result;
          } else this.poolsList = {};
          await this._addPoolsList();
          return result;
        }
        async setMinerPoolActivated(
          newValue,
          skipSaving = false,
          useActivation = true
        ) {
          if (newValue === this._minerPoolActivated) return;
          __WEBPACK_IMPORTED_MODULE_6_common_mining_pools_common_Pools_Utils__[
            "a"
          ].validatePoolActivated(newValue);
          this._minerPoolActivated = newValue;
          if (!skipSaving)
            if (
              false ===
              (await this._db.save(
                "minerPool_activated",
                this._minerPoolActivated ? "true" : "false"
              ))
            )
              throw { message: "minerPoolActivated couldn't be saved" };
          __WEBPACK_IMPORTED_MODULE_4_common_events_Status_Events__["a"].emit(
            "miner-pool/settings",
            {
              poolURL: this._poolURL,
              poolAddress: this.poolAddress,
              poolName: this.poolName,
              poolFee: this.poolFee,
              poolWebsite: this.poolWebsite,
              poolServers: this.poolServers,
              minerPoolActivated: this._minerPoolActivated,
            }
          );
          if (useActivation)
            await this.minerPoolManagement.setMinerPoolStarted(newValue, true);
        }
        get minerPoolActivated() {
          return this._minerPoolActivated;
        }
        async _addPoolsList() {
          await this.addPoolList(
            "/pool/1/MartinCanto/0.02/f2406eea8d43bc17ac9f4d126d8baa56b0ffd0be28f2a76ae35b4e4ef6f67064/https:$$pool.martincanto.com:443",
            undefined,
            true
          );
          await this.addPoolList(
            "/pool/1/MOFTpool/0.01/ca771a8a192c7f23b11a6b409732ab1f5e30949205a13e81a4580921ec5ae295/https:$$us-est.webdmine.io:8443",
            undefined,
            true
          );
          await this.addPoolList(
            "/pool/1/CanadianStakePool/0.02/ea115a560322c557d3617732145a837af9992d729e5f8165d3b7077b22ee12a4/https:$$webdollarpool.ca:443",
            undefined,
            true
          );
          await this.addPoolList(
            "/pool/1/WEBD-Splashpool-USA/0.02/61761896b4d958b3cc9073ae3c724a127b4ee5b31f6b8dcafd29643cf20a796a/https:$$splashpool.myvnc.com:8080",
            undefined,
            true
          );
          await this.addPoolList(
            "/pool/1/LOFT/0.01/777b64f4425cf319cd6f178d890178e6c5d5d367d65f100a3c8d71d815fef0d4/https:$$pool.maison:8443",
            undefined,
            true
          );
          await this.addPoolList(
            "/pool/1/Balanel_si_Miaunel/0.02/cd7217ad76118df5357ae7a094aa48096daae8a67767bd3acbc8638dc68955ac/https:$$webd.pool.coffee:8443",
            undefined,
            true
          );
          await this.addPoolList(
            "pool/1/EuroPool/0.02/f06b4720a725eb4fe13c06b26fca4c862b2f2f2ddc831e411418aceefae8e6df/https:$$webd-europool.ddns.net:2222",
            undefined,
            true
          );
          await this.addPoolList(
            "/pool/1/WMP/0.02/d02e26e60a5b0631a0b71e7dc72bb7492fd018dad64531498df369ec14f87962/https:$$server.webdollarminingpool.com:443",
            undefined,
            true
          );
          await this.addPoolList(
            "/pool/1/Timi/0.001/7d863060bc5bf81695f53c5e61c79677ad6cb3b5fd48dafebbabb25f7dca8797/https:$$pool.timi.ro:443",
            undefined,
            true
          );
          await this.addPoolList(
            "/pool/1/WMP-ASIA/0.02/773a8d5f7ce3c0dba0b7216c35d2768b1a6abef716fa2a46d875d6ca0e2c115e/https:$$singapore.webdollarminingpool.com:443",
            undefined,
            true
          );
        }
        async _replacePoolURL(url = "") {
          if (typeof url !== "string") return url;
          if (
            url.indexOf(
              "WMP/0.02/bdda9527a040d9063e22e1dccc4d860b84227ff73232f5c418054112114a6ea4/https:$$pool.webdollarminingpool.com:443"
            ) >= 0
          )
            url = url.replace(
              "WMP/0.02/bdda9527a040d9063e22e1dccc4d860b84227ff73232f5c418054112114a6ea4/https:$$pool.webdollarminingpool.com:443",
              "WMP/0.02/c01f57930c27e78e434de1243ae02b98e56d6cd3df42d136be1a1c0a0a9a8624/https:$$server.webdollarminingpool.com:443"
            );
          return url;
        }
      }
      __webpack_exports__["a"] = MinerPoolSettings;
    }.call(__webpack_exports__, __webpack_require__(1).Buffer));
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    class FallBackObject {
      constructor(url) {
        this.url = url;
        this.checked = false;
        this.errorTrials = 0;
        this.lastTimeChecked = 0;
      }
      refreshLastTimeChecked() {
        this.lastTimeChecked = new Date().getTime();
      }
      checkLastTimeChecked(timeTryReconnectAgain) {
        let time = new Date().getTime();
        if (
          time - this.lastTimeChecked >=
          timeTryReconnectAgain + this.errorTrials * 5000
        )
          return true;
        return false;
      }
    }
    __webpack_exports__["a"] = FallBackObject;
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_node_lists_waitlist_Nodes_Waitlist__ =
      __webpack_require__(38);
    var __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__ =
      __webpack_require__(7);
    var __WEBPACK_IMPORTED_MODULE_2_node_sockets_node_clients_service_Node_Clients_Service__ =
      __webpack_require__(1121);
    var __WEBPACK_IMPORTED_MODULE_3_node_webrtc_service_node_web_peers_service__ =
      __webpack_require__(1122);
    var __WEBPACK_IMPORTED_MODULE_4_node_lists_stats_Nodes_Stats__ =
      __webpack_require__(1124);
    var __WEBPACK_IMPORTED_MODULE_5_common_sockets_protocol_Node_Propagation_Protocol__ =
      __webpack_require__(274);
    var NodeServer, NodeExpress;
    if (false) {
      NodeExpress =
        require("node/sockets/node-server/express/Node-Express").default;
      NodeServer =
        require("node/sockets/node-server/sockets/Node-Server").default;
    }
    class Node {
      constructor() {
        this.NodesList =
          __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__["a"];
        this.NodesWaitlist =
          __WEBPACK_IMPORTED_MODULE_0_node_lists_waitlist_Nodes_Waitlist__["a"];
        __WEBPACK_IMPORTED_MODULE_5_common_sockets_protocol_Node_Propagation_Protocol__[
          "a"
        ].initializePropagationProtocol();
        this.NodeExpress = NodeExpress;
        this.NodeServer = NodeServer;
        this.NodeClientsService =
          __WEBPACK_IMPORTED_MODULE_2_node_sockets_node_clients_service_Node_Clients_Service__[
            "a"
          ];
        this.NodeWebPeersService =
          __WEBPACK_IMPORTED_MODULE_3_node_webrtc_service_node_web_peers_service__[
            "a"
          ];
        this.NodesStats =
          __WEBPACK_IMPORTED_MODULE_4_node_lists_stats_Nodes_Stats__["a"];
      }
    }
    __webpack_exports__["a"] = new Node();
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_node_lists_waitlist_Nodes_Waitlist__ =
      __webpack_require__(38);
    var __WEBPACK_IMPORTED_MODULE_1_node_lists_waitlist_Nodes_Waitlist_Connecting__ =
      __webpack_require__(269);
    var __WEBPACK_IMPORTED_MODULE_2_node_sockets_node_clients_service_discovery_Node_Clients_Discovery_Service__ =
      __webpack_require__(465);
    var __WEBPACK_IMPORTED_MODULE_3_node_lists_Nodes_List__ =
      __webpack_require__(7);
    class NodeClientsService {
      constructor() {
        console.log("NodeClientsService constructor");
      }
      startService() {
        __WEBPACK_IMPORTED_MODULE_0_node_lists_waitlist_Nodes_Waitlist__[
          "a"
        ].initializeWaitlist();
        __WEBPACK_IMPORTED_MODULE_2_node_sockets_node_clients_service_discovery_Node_Clients_Discovery_Service__[
          "a"
        ].startDiscovery();
        __WEBPACK_IMPORTED_MODULE_1_node_lists_waitlist_Nodes_Waitlist_Connecting__[
          "a"
        ].startConnecting();
      }
    }
    __webpack_exports__["a"] = new NodeClientsService();
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_node_webrtc_service_discovery_node_web_peers_discovery_service__ =
      __webpack_require__(1123);
    var __WEBPACK_IMPORTED_MODULE_1_main_blockchain_Blockchain__ =
      __webpack_require__(6);
    class NodeWebPeersService {
      constructor() {
        console.log("NodeWebPeersService constructor");
      }
      startService() {
        __WEBPACK_IMPORTED_MODULE_1_main_blockchain_Blockchain__[
          "a"
        ].onLoaded.then((answer) => {
          __WEBPACK_IMPORTED_MODULE_0_node_webrtc_service_discovery_node_web_peers_discovery_service__[
            "a"
          ].startDiscovery();
        });
      }
    }
    __webpack_exports__["a"] = new NodeWebPeersService();
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_node_lists_Nodes_List__ =
      __webpack_require__(7);
    var __WEBPACK_IMPORTED_MODULE_1_consts_const_global__ =
      __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_2_node_lists_types_Connection_Type__ =
      __webpack_require__(46);
    var __WEBPACK_IMPORTED_MODULE_3__lists_types_Node_Consensus_Type__ =
      __webpack_require__(44);
    class NodeWebPeersDiscoveryService {
      constructor() {
        console.log("NodeWebPeersDiscoveryService constructor");
      }
      startDiscovery() {
        __WEBPACK_IMPORTED_MODULE_0_node_lists_Nodes_List__["a"].emitter.on(
          "nodes-list/connected",
          (result) => {
            this._newSocketRegisterAcceptWebPeers(result);
          }
        );
        for (
          let i = 0;
          i <
          __WEBPACK_IMPORTED_MODULE_0_node_lists_Nodes_List__["a"].nodes.length;
          i++
        )
          this._newSocketRegisterAcceptWebPeers(
            __WEBPACK_IMPORTED_MODULE_0_node_lists_Nodes_List__["a"].nodes[i]
          );
      }
      _newSocketRegisterAcceptWebPeers(nodesListObject) {
        if (
          [
            __WEBPACK_IMPORTED_MODULE_3__lists_types_Node_Consensus_Type__["a"]
              .NODE_CONSENSUS_SERVER_FOR_MINER,
          ].indexOf(nodesListObject.nodeConsensusType) >= 0
        )
          return;
        if (
          [
            __WEBPACK_IMPORTED_MODULE_2_node_lists_types_Connection_Type__["a"]
              .CONNECTION_CLIENT_SOCKET,
            __WEBPACK_IMPORTED_MODULE_2_node_lists_types_Connection_Type__["a"]
              .CONNECTION_WEBRTC,
          ].indexOf(nodesListObject.connectionType) >= 0
        )
          nodesListObject.socket.node.protocol.signaling.client.initializeSignalingClientService();
      }
    }
    __webpack_exports__["a"] = new NodeWebPeersDiscoveryService();
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    (function (Buffer) {
      var __WEBPACK_IMPORTED_MODULE_0_consts_const_global__ =
        __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__ =
        __webpack_require__(7);
      var __WEBPACK_IMPORTED_MODULE_2_node_lists_geolocation_lists_GeoLocation_Lists__ =
        __webpack_require__(241);
      var __WEBPACK_IMPORTED_MODULE_3_node_lists_waitlist_Nodes_Waitlist__ =
        __webpack_require__(38);
      var __WEBPACK_IMPORTED_MODULE_4_node_lists_types_Connection_Type__ =
        __webpack_require__(46);
      var __WEBPACK_IMPORTED_MODULE_5_main_blockchain_Blockchain__ =
        __webpack_require__(6);
      var __WEBPACK_IMPORTED_MODULE_6__types_Node_Type__ =
        __webpack_require__(34);
      var __WEBPACK_IMPORTED_MODULE_7_common_blockchain_global_Blockchain_Genesis__ =
        __webpack_require__(17);
      var __WEBPACK_IMPORTED_MODULE_8_common_utils_bans_BansList__ =
        __webpack_require__(125);
      var __WEBPACK_IMPORTED_MODULE_9_common_utils_bans_AddressBanList__ =
        __webpack_require__(150);
      var __WEBPACK_IMPORTED_MODULE_10_common_utils_coins_WebDollar_Coins__ =
        __webpack_require__(31);
      var __WEBPACK_IMPORTED_MODULE_11_common_utils_helpers_Utils__ =
        __webpack_require__(39);
      class NodesStats {
        constructor() {
          this._timeStart = new Date().getTime();
          this.statsClients = 0;
          this.statsServer = 0;
          this.statsWebPeers = 0;
          this.statsBrowsers = 0;
          this.statsTerminal = 0;
          this.statsWaitlistFullNodes = 0;
          this.statsWaitlistLightNodes = 0;
          __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__["a"].emitter.on(
            "nodes-list/connected",
            (nodesListObject) => {
              this._recalculateStats(nodesListObject, false);
            }
          );
          __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__["a"].emitter.on(
            "nodes-list/disconnected",
            (nodesListObject) => {
              this._recalculateStats(nodesListObject, false);
            }
          );
          __WEBPACK_IMPORTED_MODULE_3_node_lists_waitlist_Nodes_Waitlist__[
            "a"
          ].emitter.on("waitlist/new-node", (nodesListObject) => {
            this._recalculateStats(nodesListObject, false);
          });
          __WEBPACK_IMPORTED_MODULE_3_node_lists_waitlist_Nodes_Waitlist__[
            "a"
          ].emitter.on("waitlist/delete-node", (nodesListObject) => {
            this._recalculateStats(nodesListObject, false);
          });
          setInterval(
            this._printStats.bind(this),
            __WEBPACK_IMPORTED_MODULE_0_consts_const_global__["a"].SETTINGS
              .PARAMS.STATUS_INTERVAL
          );
        }
        _printStats() {
          console.info(
            " blocks: ",
            __WEBPACK_IMPORTED_MODULE_5_main_blockchain_Blockchain__["a"]
              .blockchain.blocks.length,
            __WEBPACK_IMPORTED_MODULE_7_common_blockchain_global_Blockchain_Genesis__[
              "a"
            ].isPoSActivated(
              __WEBPACK_IMPORTED_MODULE_5_main_blockchain_Blockchain__["a"]
                .blockchain.blocks.length
            )
              ? "POS"
              : "POW"
          );
          console.info(
            " amount mining wallet: ",
            __WEBPACK_IMPORTED_MODULE_5_main_blockchain_Blockchain__[
              "a"
            ].AccountantTree.getBalance(
              __WEBPACK_IMPORTED_MODULE_5_main_blockchain_Blockchain__["a"]
                .blockchain.mining.minerAddress
            ) /
              __WEBPACK_IMPORTED_MODULE_10_common_utils_coins_WebDollar_Coins__[
                "a"
              ].WEBD,
            "  amount"
          );
          if (
            __WEBPACK_IMPORTED_MODULE_5_main_blockchain_Blockchain__["a"]
              .blockchain.mining.timeMinedBlock
          ) {
            let time =
              __WEBPACK_IMPORTED_MODULE_11_common_utils_helpers_Utils__[
                "a"
              ].timePassed(
                __WEBPACK_IMPORTED_MODULE_5_main_blockchain_Blockchain__["a"]
                  .blockchain.mining.timeMinedBlock
              );
            console.info(
              `time since block mined ${Math.floor(time.d)} d ${Math.floor(
                time.h
              )} h ${Math.floor(time.m)} m`
            );
          }
          try {
            if (
              __WEBPACK_IMPORTED_MODULE_5_main_blockchain_Blockchain__["a"]
                .blockchain.mining.minerAddress &&
              Buffer.isBuffer(
                __WEBPACK_IMPORTED_MODULE_5_main_blockchain_Blockchain__["a"]
                  .blockchain.mining.unencodedMinerAddress
              )
            )
              console.info(
                "Exists: ",
                __WEBPACK_IMPORTED_MODULE_5_main_blockchain_Blockchain__[
                  "a"
                ].Wallet.getAddress({
                  unencodedAddress:
                    __WEBPACK_IMPORTED_MODULE_5_main_blockchain_Blockchain__[
                      "a"
                    ].blockchain.mining.unencodedMinerAddress,
                }) !== null
                  ? "YES"
                  : "NO"
              );
          } catch (err) {
            console.error(
              " Wallet was not found ",
              __WEBPACK_IMPORTED_MODULE_5_main_blockchain_Blockchain__["a"]
                .blockchain.mining.unencodedMinerAddress
            );
          }
          console.info(
            " v: ",
            __WEBPACK_IMPORTED_MODULE_0_consts_const_global__["a"].SETTINGS.NODE
              .VERSION
          );
          let time = __WEBPACK_IMPORTED_MODULE_11_common_utils_helpers_Utils__[
            "a"
          ].timePassed(this._timeStart);
          console.info(
            `up time ${Math.floor(time.d)} d ${Math.floor(
              time.h
            )} h ${Math.floor(time.m)} m`
          );
          console.log(
            " connected to: ",
            this.statsClients,
            " , from: ",
            this.statsServer,
            " web peers WEBRTC",
            this.statsWebPeers,
            " Network FullNodes:",
            this.statsWaitlistFullNodes,
            " Network LightNodes:",
            this.statsWaitlistLightNodes,
            "    GeoLocationContinents: ",
            __WEBPACK_IMPORTED_MODULE_2_node_lists_geolocation_lists_GeoLocation_Lists__[
              "a"
            ].countGeoLocationContinentsLists
          );
          console.log(
            " browsers: ",
            this.statsBrowsers,
            " terminal: ",
            this.statsTerminal
          );
          let string1 = "";
          let clients = __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__[
            "a"
          ].getNodesByConnectionType(
            __WEBPACK_IMPORTED_MODULE_4_node_lists_types_Connection_Type__["a"]
              .CONNECTION_CLIENT_SOCKET
          );
          for (let i = 0; i < Math.min(clients.length, 50); i++)
            string1 +=
              "(" + clients[i].socket.node.sckAddress.toString() + ")   ";
          if (clients.length > 50) string1 += ".........";
          let string2 = "";
          let server = __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__[
            "a"
          ].getNodesByConnectionType(
            __WEBPACK_IMPORTED_MODULE_4_node_lists_types_Connection_Type__["a"]
              .CONNECTION_SERVER_SOCKET
          );
          for (let i = 0; i < Math.min(server.length, 50); i++)
            string2 +=
              "(" + server[i].socket.node.sckAddress.toString() + ")   ";
          if (server.length > 50) string2 += ".........";
          console.log("clients: ", string1);
          console.log("server: ", string2);
          console.log(
            "waitlist full node ",
            __WEBPACK_IMPORTED_MODULE_3_node_lists_waitlist_Nodes_Waitlist__[
              "a"
            ].waitListFullNodes.length
          );
          console.log(
            "waitlist light node ",
            __WEBPACK_IMPORTED_MODULE_3_node_lists_waitlist_Nodes_Waitlist__[
              "a"
            ].waitListLightNodes.length
          );
          __WEBPACK_IMPORTED_MODULE_8_common_utils_bans_BansList__[
            "a"
          ].listBans();
          __WEBPACK_IMPORTED_MODULE_9_common_utils_bans_AddressBanList__[
            "a"
          ].listBans();
        }
        _recalculateStats(nodesListObject, printStats = true) {
          this.statsClients =
            __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__[
              "a"
            ].countNodesByConnectionType(
              __WEBPACK_IMPORTED_MODULE_4_node_lists_types_Connection_Type__[
                "a"
              ].CONNECTION_CLIENT_SOCKET
            );
          this.statsServer =
            __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__[
              "a"
            ].countNodesByConnectionType(
              __WEBPACK_IMPORTED_MODULE_4_node_lists_types_Connection_Type__[
                "a"
              ].CONNECTION_SERVER_SOCKET
            );
          this.statsWebPeers =
            __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__[
              "a"
            ].countNodesByConnectionType(
              __WEBPACK_IMPORTED_MODULE_4_node_lists_types_Connection_Type__[
                "a"
              ].CONNECTION_WEBRTC
            );
          this.statsBrowsers =
            __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__[
              "a"
            ].countNodesByType(
              __WEBPACK_IMPORTED_MODULE_6__types_Node_Type__["a"].NODE_WEB_PEER
            );
          this.statsTerminal =
            __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__[
              "a"
            ].countNodesByType(
              __WEBPACK_IMPORTED_MODULE_6__types_Node_Type__["a"].NODE_TERMINAL
            );
          this.statsWaitlistFullNodes =
            __WEBPACK_IMPORTED_MODULE_3_node_lists_waitlist_Nodes_Waitlist__[
              "a"
            ].waitListFullNodes.length;
          this.statsWaitlistLightNodes =
            __WEBPACK_IMPORTED_MODULE_3_node_lists_waitlist_Nodes_Waitlist__[
              "a"
            ].waitListLightNodes.length;
          if (printStats) this._printStats();
        }
      }
      __webpack_exports__["a"] = new NodesStats();
    }.call(__webpack_exports__, __webpack_require__(1).Buffer));
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_node_lists_geolocation_lists_geo_helpers_geo_helper__ =
      __webpack_require__(243);
    var __WEBPACK_IMPORTED_MODULE_1_common_blockchain_interface_blockchain_addresses_Interface_Blockchain_Address_Helper__ =
      __webpack_require__(18);
    var __WEBPACK_IMPORTED_MODULE_2_common_utils_coins_WebDollar_Coins__ =
      __webpack_require__(31);
    var __WEBPACK_IMPORTED_MODULE_3_consts_const_global__ =
      __webpack_require__(2);
    var __WEBPACK_IMPORTED_MODULE_4_node_lists_types_Node_Type__ =
      __webpack_require__(34);
    var __WEBPACK_IMPORTED_MODULE_5_node_lists_types_Connection_Type__ =
      __webpack_require__(46);
    var __WEBPACK_IMPORTED_MODULE_6_common_utils_helpers_Version_Checker_Helper__ =
      __webpack_require__(181);
    var __WEBPACK_IMPORTED_MODULE_7_common_utils_BufferExtended__ =
      __webpack_require__(4);
    var __WEBPACK_IMPORTED_MODULE_8_node_lists_waitlist_Nodes_Waitlist__ =
      __webpack_require__(38);
    var __WEBPACK_IMPORTED_MODULE_9_node_lists_Nodes_List__ =
      __webpack_require__(7);
    var __WEBPACK_IMPORTED_MODULE_10_common_mining_pools_common_Pools_Utils__ =
      __webpack_require__(127);
    var __WEBPACK_IMPORTED_MODULE_11_common_crypto_WebDollar_Crypto__ =
      __webpack_require__(29);
    var __WEBPACK_IMPORTED_MODULE_12_node_menu_Advanced_Messages__ =
      __webpack_require__(89);
    class Applications {
      constructor() {
        this.GeoHelper =
          __WEBPACK_IMPORTED_MODULE_0_node_lists_geolocation_lists_geo_helpers_geo_helper__[
            "a"
          ];
        this.AddressHelper =
          __WEBPACK_IMPORTED_MODULE_1_common_blockchain_interface_blockchain_addresses_Interface_Blockchain_Address_Helper__[
            "a"
          ];
        this.CoinsHelper =
          __WEBPACK_IMPORTED_MODULE_2_common_utils_coins_WebDollar_Coins__["a"];
        this.VersionCheckerHelper =
          __WEBPACK_IMPORTED_MODULE_6_common_utils_helpers_Version_Checker_Helper__[
            "a"
          ];
        this.PoolsUtilsHelper =
          __WEBPACK_IMPORTED_MODULE_10_common_mining_pools_common_Pools_Utils__[
            "a"
          ];
        this.BufferExtended =
          __WEBPACK_IMPORTED_MODULE_7_common_utils_BufferExtended__["a"];
        this.NodesList =
          __WEBPACK_IMPORTED_MODULE_9_node_lists_Nodes_List__["a"];
        this.NodesWaitlist =
          __WEBPACK_IMPORTED_MODULE_8_node_lists_waitlist_Nodes_Waitlist__["a"];
        this.WebDollarCrypto =
          __WEBPACK_IMPORTED_MODULE_11_common_crypto_WebDollar_Crypto__["a"];
        this.CONSTS = __WEBPACK_IMPORTED_MODULE_3_consts_const_global__["a"];
        this.NODE_TYPE =
          __WEBPACK_IMPORTED_MODULE_4_node_lists_types_Node_Type__["a"];
        this.CONNECTIONS_TYPE =
          __WEBPACK_IMPORTED_MODULE_5_node_lists_types_Connection_Type__["a"];
        this.AdvancedMessages =
          __WEBPACK_IMPORTED_MODULE_12_node_menu_Advanced_Messages__["a"];
      }
    }
    __webpack_exports__["a"] = new Applications();
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_consts_global__ = __webpack_require__(45);
    var __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__ =
      __webpack_require__(7);
    var __WEBPACK_IMPORTED_MODULE_2_node_lists_waitlist_Nodes_Waitlist__ =
      __webpack_require__(38);
    var __WEBPACK_IMPORTED_MODULE_3_node_lists_waitlist_Nodes_Waitlist_Connecting__ =
      __webpack_require__(269);
    let alreadySaved = false;
    __webpack_exports__["a"] = async (Blockchain) => {
      console.warn("SIGINT FIRED");
      __WEBPACK_IMPORTED_MODULE_0_consts_global__["a"].TERMINATED = true;
      if (alreadySaved) return;
      alreadySaved = true;
      Blockchain.Mining.stopMining();
      console.warn("Disconnecting All Nodes...");
      __WEBPACK_IMPORTED_MODULE_1_node_lists_Nodes_List__[
        "a"
      ].disconnectAllNodes("all");
      __WEBPACK_IMPORTED_MODULE_3_node_lists_waitlist_Nodes_Waitlist_Connecting__[
        "a"
      ].stopConnecting();
      __WEBPACK_IMPORTED_MODULE_2_node_lists_waitlist_Nodes_Waitlist__[
        "a"
      ].waitListFullNodes = [];
      __WEBPACK_IMPORTED_MODULE_2_node_lists_waitlist_Nodes_Waitlist__[
        "a"
      ].waitListLightNodes = [];
      console.log("Closing Express");
      try {
        if (false) {
          let NodeExpress =
            require("node/sockets/node-server/express/Node-Express").default;
          let NodeServer =
            require("node/sockets/node-server/sockets/Node-Server").default;
          NodeExpress.close();
          NodeServer.close();
        }
        console.warn("Node Express and Server closed");
      } catch (exception) {}
      Blockchain.Mining.stopMining();
      try {
        await Blockchain.blockchain.transactions.pendinQueue.pendingQueueSavingManager.savePendingTransactions();
      } catch (exception) {}
      let interval = async () => {
        if (
          __WEBPACK_IMPORTED_MODULE_0_consts_global__["a"]
            .MINIBLOCKCHAIN_LIGHT_CONFIGURATION_SAVED &&
          __WEBPACK_IMPORTED_MODULE_0_consts_global__["a"]
            .SEMAPHORE_PROCESS_DONE &&
          __WEBPACK_IMPORTED_MODULE_0_consts_global__["a"]
            .MINIBLOCKCHAIN_LIGHT_SAVED &&
          __WEBPACK_IMPORTED_MODULE_0_consts_global__["a"]
            .MINIBLOCKCHAIN_ADVANCED_SAVED &&
          __WEBPACK_IMPORTED_MODULE_0_consts_global__["a"]
            .INTERFACE_BLOCKCHAIN_SAVED &&
          __WEBPACK_IMPORTED_MODULE_0_consts_global__["a"].POOL_SAVED
        ) {
          try {
            if (
              !__WEBPACK_IMPORTED_MODULE_0_consts_global__["a"]
                .INTERFACE_BLOCKCHAIN_LOADING
            )
              await Blockchain.blockchain.saveBlockchainTerminated();
          } catch (exception) {
            console.error("Exception saving", exception);
          }
          console.log(
            __WEBPACK_IMPORTED_MODULE_0_consts_global__["a"]
              .MINIBLOCKCHAIN_LIGHT_CONFIGURATION_SAVED
          );
          console.log(
            __WEBPACK_IMPORTED_MODULE_0_consts_global__["a"]
              .SEMAPHORE_PROCESS_DONE
          );
          console.log(
            __WEBPACK_IMPORTED_MODULE_0_consts_global__["a"]
              .MINIBLOCKCHAIN_LIGHT_SAVED
          );
          console.warn("process.exit(0)");
          if (false) {
            setTimeout(() => {
              process.emit("SIGINT");
              process.exit(0);
            }, 1500);
          }
          return;
        }
        setTimeout(interval, 100);
      };
      setTimeout(interval, 100);
    };
  },
]);

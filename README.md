### Hi there 👋

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

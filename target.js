//https://tonyyan.wordpress.com/2021/03/02/use-js-to-validate-pow-on-one-btc-block/
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

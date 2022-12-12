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

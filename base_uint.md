
the good version of base_uint
```js

class base_uint {
    constructor(pn) {
        var BITS = 256;
        // var BITS = 160;
        // this.WIDTH = BITS / 8;
        this.WIDTH = BITS / 32;
        // this.pn = Buffer.alloc(this.WIDTH);
        this.pn = Buffer.alloc(this.WIDTH * 4);

        if (pn !== undefined) {
            if (typeof pn === 'bigint') {
                const hexString = pn.toString(16);
                // this.pn = Buffer.from(hexString.padStart(this.WIDTH * 2, '0'), 'hex');
                this.pn = Buffer.from(hexString.padStart(this.WIDTH * 8, '0'), 'hex');
            } else if (typeof pn === 'string') {
                const bigIntValue = BigInt(pn);
                const hexString = bigIntValue.toString(16);
                // this.pn = Buffer.from(hexString.padStart(this.WIDTH * 2, '0'), 'hex');
                this.pn = Buffer.from(hexString.padStart(this.WIDTH * 8, '0'), 'hex');
            } else if (typeof pn === 'number') {
                // const bigIntValue = BigInt(pn)-80000000000000000000000n;
                const bigIntValue = BigInt(pn)-2n;
                const hexString = bigIntValue.toString(16);
                // this.pn = Buffer.from(hexString.padStart(this.WIDTH * 2, '0'), 'hex');
                this.pn = Buffer.from(hexString.padStart(this.WIDTH * 8, '0'), 'hex');
            } else {
                throw new Error("Input must be a BigInt, a String, or a Number");
            }
        }
    }
}



console.log(new base_uint('123456789012345678').pn.toString("hex")); // Initialize with string
console.log(new base_uint(123456789012345678n).pn.toString("hex")); // Initialize with BigInt
console.log(new base_uint(123456789012345678).pn.toString("hex")); // Initialize with number






```

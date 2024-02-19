
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

```js
class uint256 {
    constructor(pn) {
        var BITS = 256;
        this.WIDTH = BITS / 32;
        this.pn = Buffer.alloc(this.WIDTH * 4).reverse();
        console.log("Initial type of pn:", typeof pn);
        try {
            if (pn !== undefined) {
                if (typeof pn === 'bigint') {
                    const hexString = pn.toString(16);
                    this.pn = Buffer.from(hexString.padStart(this.WIDTH * 8, '0'), 'hex');
                } else if (typeof pn === 'string') {
                    const bigIntValue = BigInt(pn);
                    const hexString = bigIntValue.toString(16);
                    this.pn = Buffer.from(hexString.padStart(this.WIDTH * 8, '0'), 'hex');
                } else if (typeof pn === 'number') {
                    const bigIntValue = BigInt(pn);
                    const hexString = bigIntValue.toString(16);
                    this.pn = Buffer.from(hexString.padStart(this.WIDTH * 8, '0'), 'hex');
                } else if (typeof pn === 'object') {
                    // Check if the object has a property called 'value'
                    if ('value' in pn) {
                        const bigIntValue = BigInt(pn.value);
                        const hexString = bigIntValue.toString(16);
                        this.pn = Buffer.from(hexString.padStart(this.WIDTH * 8, '0'), 'hex');
                    } else {
                        throw new Error("Object input must contain a 'value' property");
                    }
                } else {
                    throw new Error("Input must be a BigInt, a String, or a Number");
                }
            }
        } catch (error) {
            console.error("Error occurred:", error);
            console.trace(); // This will log the stack trace
        }
        console.log("Final type of pn:", typeof pn);
    }
}

// Example usage
const instance1 = new uint256(503n); // BigInt
const instance2 = new uint256({ value: "123" }); // Object with 'value' property
const instance3 = new uint256("123"); // String

// Check the result
console.log(instance1.pn.toString('hex'));
console.log(instance2.pn.toString('hex'));
console.log(instance3.pn.toString('hex'));
```






const fs = require('fs');

// Function to search and replace (base_uint160)b with base_uint160(b)
function replacePattern(text) {
    return text
        .replace(/\(base_uint160\)b/g, 'base_uint160(b)')
        .replace(/\(base_uint160\)a/g, 'base_uint160(a)')
        .replace(/uint64 b/g, ' b = new uint160()')
        .replace(/const uint160& a/g, ' a = new uint160()')
        .replace(/const base_uint160& a/g, ' a = new base_uint160()')
        .replace(/const uint160& b/g, ' b = new uint160()')
        .replace(/const base_uint160& b/g, ' b = new base_uint160()')
        .replace(/\s{2,}/g, ' ') // Condense multiple spaces
        .replace(/inline const uint160 operator\+/g, 'uint160.prototype.operator_incress = function')
        .replace(/inline const uint160 operator-/g, 'uint160.prototype.operator_decress = function')
        .replace(/inline const uint160 operator\^/g, 'uint160.prototype.operator_xor = function')
        .replace(/inline const uint160 operator&/g, 'uint160.prototype.operator_and = function')
        .replace(/inline bool operator==/g, 'function operator_equal_to')
        .replace(/inline bool operator!=/g, 'function equal_not')
        .replace(/inline const uint160 operator<</g, 'uint160.prototype.operator_left_shift = function')
        .replace(/inline const uint160 operator>>/g, 'uint160.prototype.operator_right_shift = function')
        .replace(/inline bool operator>=/g, 'function greater_than_or_equal_to')
        .replace(/inline bool operator==/g, 'function operator_equal_to')
        .replace(/inline bool operator!=/g, 'function operator_not_equal')
        .replace(/inline bool operator>/g, 'function greater_than')
        .replace(/inline bool operator</g, 'function operator_less_than')
        .replace(/inline const uint160 operator\|/g, 'uint160.prototype.operator_not = function')
        .replace(/unsigned int shift/g, 'shift')
        .replace(/{\s*(.*?)\s*}/g, '{\n$1\n}')
        .replace(/}/g, '};\n\n');
}

// Function to read a file, perform search and replace, and write to a new file
function processFile(inputFilePath, outputFilePath) {
    try {
        const data = fs.readFileSync(inputFilePath, 'utf8');
        // Extract elements within curly braces
        // const elements = extractElements(data); // Assuming you have defined this function elsewhere
        // Search and replace (base_uint160)b with base_uint160(b)
        const modifiedText = replacePattern(data);
        // Write the extracted elements and modified text to a new file
        fs.writeFileSync(outputFilePath, '\n\n' + modifiedText + '\n', 'utf8');
        console.log('File processed successfully!');
    } catch (error) {
        console.error('Error processing file:', error);
    }
}

// Specify the input and output file paths
const inputFilePath = 'ure.txt'; // Replace with your input file path
const outputFilePath = 'uutput.txt'; // Replace with your desired output file path

// Call the function to process the file
processFile(inputFilePath, outputFilePath);





# find and modify 


const fs = require('fs');

const filePath = 'uuuuextractElements1.js';
const searchString = '160';
const replacementString = '256';

// Read the content of the file
const fileContent = fs.readFileSync(filePath, 'utf8');

// Replace occurrences of '160' with '256'
const modifiedContent = fileContent.replace(new RegExp(searchString, 'g'), replacementString);

// Write the modified content back to the file
fs.writeFileSync(filePath, modifiedContent, 'utf8');

console.log('Search and replace complete.');


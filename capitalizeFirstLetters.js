const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

// First Version
// function capitalizeFirstLetters(input) {
//   let output = '';
//     for (let i = 0 ; i < input.length ; i++) {
//      if (i === 0) {
//       output += input[0].toUpperCase();
//     } else {
//       output += input[i];
//     }
//   }
//   return output;
// }

function capitalizeFirstLetters(input) {
  return input.length > 0
  ? input[0].toUpperCase() + input.slice(1)
  : '';
}


// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

// Check that capitalizeFirstLetters transforms the sentence I am a web developer correctly
assert.strictEqual(capitalizeFirstLetters('I am a web developer'), 'I Am A Web Developer');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');
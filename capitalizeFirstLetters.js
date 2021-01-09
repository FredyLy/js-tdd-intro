const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

function capitalizeFirstLetters(input) {
  const array = input.split(' ');
  let toCap = array.map((str) => {
    if (str.length > 0) {
      return str[0].toUpperCase() + str.slice(1);
    } else {
      return '';
    }
  })
  return toCap.join(' ');
}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

// Check that capitalizeFirstLetters transforms the sentence I am a web developer correctly
assert.strictEqual(capitalizeFirstLetters('i am a web developer'), 'I Am A Web Developer');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

capitalizeFirstLetters('i am a web developer');
capitalizeFirstLetters('bonjour');
capitalizeFirstLetters('a');
capitalizeFirstLetters('');
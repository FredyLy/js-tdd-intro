const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

//test suite label
describe('capitalizeFirstLetters', () => {
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  })
  it('transforms javaScript correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
  })
  it('transforms the sentence I am a web developer correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('i am a web developer'), 'I Am A Web Developer');
  })
  it('works with a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
  })
  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  })
})

console.log(capitalizeFirstLetters('i am a web developer'));
console.log(capitalizeFirstLetters('bonjour'));
console.log(capitalizeFirstLetters('a'));
console.log('empty string: ', capitalizeFirstLetters(''));

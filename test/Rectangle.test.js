const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
  it('is true if the two sides are equal', () => {
    const rectangle = new Rectangle(5, 5);
    assert.strictEqual(rectangle.isSquare(), true);
  })

  it('is false if the two sides are NOT equal', () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.isSquare(), false);
  })
  
  it('returns the rectangle area', () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.getArea(), 50);
  })

  it('returns the rectangle perimeter', () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.getPerimeter(), 30);
  })
})
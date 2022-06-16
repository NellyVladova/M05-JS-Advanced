const sum = require('./P04SumOfNumbers');
const { assert } = require('chai');

describe('test for SumOfNumbers', () => {
    it('test with correct array', () => {
        assert.equal(sum([1, 2, 3, 4]), 10);
    });
    it('test with empty array', () => {
        assert.equal(sum([]), 0);
    });
    it('test with invalid array element', () => {
        assert.equal(Number.isNaN(sum(['asd'])), true);
    });
});
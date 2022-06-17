const isOddOrEven = require('./P02EvenOrOdd');
const {assert} = require('chai');

describe('Tests for isEvenOrOdd', () => {
    it('test for undefined as an input', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });
    it('test for null as an input', () => {
        assert.equal(isOddOrEven(null), undefined);
    });
    it('test for number as an input', () => {
        assert.equal(isOddOrEven(0), undefined);
    });
    it('test for object as an input', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('test for array as an input' , () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('test with even string length', () => {
        assert.equal(isOddOrEven("Hi"), 'even');
    });
    it('test with odd string length', () => {
        assert.equal(isOddOrEven('Hello'), 'odd');
    });
    it('test with multiple different strings', () => {
        assert.equal(isOddOrEven("Hello, From, JavaScript, Test"), 'odd');
    });
});
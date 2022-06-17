const lookupChar = require('./P03CharLookup');
const { assert } = require('chai');

describe("Tests for CharLookup", () => {
    it('test with invalid string input', () => {
        assert.equal(lookupChar(0, 0), undefined);
    });
    it('test with invalid index input', () => {
        assert.equal(lookupChar('hello', '1'), undefined);
    });
    it('test with floating point number as input for index', () => {
        assert.equal(lookupChar('hello', 1.1), undefined);
    });
    it('test with negative index', () => {
        assert.equal(lookupChar('hello', -1), 'Incorrect index');
    });
    it('test with index bigger than string length', () => {
        assert.equal(lookupChar('hello', 10), 'Incorrect index');
    });
    it('test with valid input', () => {
        assert.equal(lookupChar('hello', 1), 'e');
    });
});
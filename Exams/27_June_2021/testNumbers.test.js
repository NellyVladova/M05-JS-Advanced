const testNumbers = require('./testNumbers');
const { expect } = require('chai');

describe('Tests for testNumbers', () => {
    describe('Tests for sumNumber()', () => {
        it('test with invalid first param', () => {
            expect(testNumbers.sumNumbers('asd', 1)).to.equal(undefined);
        });
        it('test with invalid second param', () => {
            expect(testNumbers.sumNumbers(1, 'asd')).to.equal(undefined);
        });
        it('test with valid params(integers)', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal(2.00);
        });
        it('test with valid params(floating point numbers)', () => {
            expect(testNumbers.sumNumbers(1.0, 1.0)).to.equal(2.00);
        });
    });
});
// to be continued...
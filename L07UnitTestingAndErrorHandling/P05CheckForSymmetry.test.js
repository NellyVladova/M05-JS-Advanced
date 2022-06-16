const isSymmetric = require('./P05CheckForSymmetry');
const {assert} = require('chai');

describe('Test for CheckForSymmetry', () => {
    it('test with number as an input', () => {
        assert.equal(isSymmetric(4), false);
    });
    it('test with object as an input', () => {
        assert.equal(isSymmetric({}), false);
    });
    it('test with empty array', () => {
        assert.equal(isSymmetric([]), true);
    });
    it('test without input', () => {
        assert.equal(isSymmetric({}), false);
    });
    it('test with symetric array', () => {
        assert.equal(isSymmetric([1, 2, 3, 3, 2, 1]), true);
    });
    it('test with not symmetric array', () => {
        assert.equal(isSymmetric([1, 2, 3]), false);
    });
    it('test with different array elements', () => {
        assert.equal(isSymmetric([1, '1']), false);
    });
})
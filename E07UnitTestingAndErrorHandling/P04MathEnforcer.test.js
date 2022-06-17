const mathEnforcer = require('./P04MathEnforcer');
const { assert } = require('chai');

describe('Tests for MathEnforcer', () => {
    describe('Tests for function addFive', () => {
        it('test with invalid input', () => {
            assert.equal(mathEnforcer.addFive('1'), undefined);
        });
        it('test with positive integer number', () => {
            assert.equal(mathEnforcer.addFive(1), 6);
        });
        it('test with negative integer number', () => {
            assert.equal(mathEnforcer.addFive(-1), 4);
        });
        it('test with floating point number', () => {
            assert.equal(mathEnforcer.addFive(1.1), 6.1);
        });
    });
    describe('Tests for function subtractTen', () => {
        it('test with invalid number', () => {
            assert.equal(mathEnforcer.subtractTen('1'), undefined);
        });
        it('test with positive integer number', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0);
        });
        it('test with negative integer number', () => {
            assert.equal(mathEnforcer.subtractTen(-1), -11);
        });
        it('test with floating point number', () => {
            assert.equal(mathEnforcer.subtractTen(1.5), -8.5);
        });
    });
    describe('Tests for function sum', () => {
        it('test with invalid first param', () => {
            assert.equal(mathEnforcer.sum('1', 1), undefined);
        });
        it('test with invalid second param', () => {
            assert.equal(mathEnforcer.sum(1, '1'), undefined);
        });
        it('test with positive integer numbers', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2);
        });
        it('test with negative integer numbers', () => {
            assert.equal(mathEnforcer.sum(-1, -1), -2);
        });
        it('test with positive and negative integer number', () => {
            assert.equal(mathEnforcer.sum(2, -1), 1);
        });
        it('test with negative and positive integer number', () => {
            assert.equal(mathEnforcer.sum(-2, 1), -1);
        });
        it('test with floating point numbers', () => {
            assert.equal(mathEnforcer.sum(1.5, 1.5), 3.0);
        });
    });
});
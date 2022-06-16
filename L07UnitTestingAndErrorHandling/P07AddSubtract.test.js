const createCalculator = require('./P07AddSubtract');
const {expect} = require('chai');

describe('Test for AddSubtract', () => {
    let calculate;
    beforeEach(() =>{
        calculate = createCalculator();
    })
    it('test for function get', () =>{
        expect(calculate.get()).to.be.equal(0);
    });
    it('test for function add with integers', () => {
        calculate.add(1);
        calculate.add(2);
        expect(calculate.get()).to.be.equal(3);
    });
    it('test for function add with floating point number', () => {
        calculate.add(1.1);
        calculate.add(2.2);
        expect(calculate.get().toFixed(1)).to.be.equal('3.3');
    });
    it('test for function add with string', () => {
        calculate.add("hello");
        expect(calculate.get()).to.be.NaN;
    });
    it('test for function subtract with integers', () => {
        calculate.subtract(1);
        calculate.subtract(2);
        expect(calculate.get()).to.be.equal(-3);
    });
    it('test for function subtract with floating point numbers', () => {
        calculate.subtract(1.1);
        calculate.subtract(2.2);
        expect(calculate.get().toFixed(1)).to.be.equal('-3.3');
    });
    it('test for function subtract with string', () => {
        calculate.subtract("hello");
        expect(calculate.get()).to.be.NaN;
    });
    it('test for both add and subtract with integers', () => {
        calculate.subtract(2);
        calculate.add(5);
        calculate.subtract(1);
        calculate.add(3);
        expect(calculate.get()).to.be.equal(5);
    });
    it('test for both add and subtract with floating point numbers', () => {
        calculate.subtract(2.2);
        calculate.add(5.5);
        calculate.subtract(1.1);
        calculate.add(3.3);
        expect(calculate.get()).to.be.equal(5.5);
    });
})
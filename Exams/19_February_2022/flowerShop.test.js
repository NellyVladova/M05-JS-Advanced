const flowerShop = require('./flowerShop');
const { expect } = require('chai');

describe('Tests for flowerShop', () => {
    describe('Tests for calcPriceOfFlowers()', () => {
        it('test with invalid flower type', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw(Error);
        });
        it('test with invalid price', () => {
            expect(() => flowerShop.calcPriceOfFlowers('tulips', 'asd', 1)).to.throw(Error);
        });
        it('test with invalid quantity', () => {
            expect(() => flowerShop.calcPriceOfFlowers('tulips', 2, 'asd')).to.throw(Error);
        });
        it('test with valid input params', () => {
            const expected = `You need $6.00 to buy tulips!`;
            const result = flowerShop.calcPriceOfFlowers('tulips', 2, 3);

            expect(result).to.equal(expected);
        });
    });
    describe('Tests for checkFlowersAvailable()', () => {
        it('test with unexisting flower', () => {
            const expected = `The Tulips are sold! You need to purchase more!`;
            const result = flowerShop.checkFlowersAvailable('Tulips', ['Lily', 'Rose', 'Orchid']);

            expect(result).to.equal(expected);
        });
        it('test with existing flower', () => {
            const expected = `The Lily are available!`;
            const result = flowerShop.checkFlowersAvailable('Lily', ['Lily', 'Rose', 'Orchid']);

            expect(result).to.equal(expected);
        });
    });
    describe('Tests for sellFlowers()', () => {
        it('test with invalid first param', () => {
            expect(() => flowerShop.sellFlowers(1, 1)).to.throw(Error);
        });
        it('test with invalid index(string)', () => {
            expect(() => flowerShop.sellFlowers([], 'asd')).to.throw(Error);
        });
        it('test with invalid index(negative number)', () =>{
            expect(() => flowerShop.sellFlowers(['Lily', 'Rose', 'Orchid'], -1)).to.throw(Error);
        });
        it('test with invalid index(floating point number)', () =>{
            expect(() => flowerShop.sellFlowers(['Lily', 'Rose', 'Orchid'], -1)).to.throw(Error);
        });
        it('test with invalid index(bigger than the array length) ', () =>{
            expect(() => flowerShop.sellFlowers(['Lily', 'Rose', 'Orchid'], 10)).to.throw(Error);
        });
        it('test with valid params', () => {
            let result = flowerShop.sellFlowers(['Lily', 'Rose', 'Orchid'], 1);
            let expected = 'Lily / Orchid';

            expect(result).to.equal(expected);
        });
    });
})
const rentCar = require('./rentCar');
const { expect } = require('chai');

describe('Tests for rentCar', () => {
    describe('Tests for searchCar()', () => {
        it('test with invalid first param', () => {
            expect(() => rentCar.searchCar('asd', 'q6')).to.throw(Error);
        });
        it('test with invalid second param', () => {
            expect(() => rentCar.searchCar([], 1)).to.throw(Error);
        });
        it('test with invalid params', () => {
            expect(() => rentCar.searchCar(1, 1)).to.throw(Error);
        });
        it('test with valid params and checks whether the model is in the shop', () => {
            const expected = 'There is 1 car of model Audi in the catalog!';
            const result = rentCar.searchCar(['Toyota', 'Audi', 'BMW', 'Volkswagen'], 'Audi');

            expect(expected).to.be.equal(result);
        });
        it('test with no such model in the shop', () => {
            expect(() => rentCar.searchCar(['Toyota', 'Audi', 'BMW', 'Volkswagen'], "Suzuki")).to.throw(Error);
        });
    });
    describe('Tests for calculatePriceOfCar()', () => {
        it('test with invalid first param', () => {
            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw(Error);
        });
        it('test with invalid second param', () => {
            expect(() => rentCar.calculatePriceOfCar('Audi', 'asd')).to.throw(Error);
        });
        it('test with invalid params', () => {
            expect(() => rentCar.calculatePriceOfCar(1, 'asd')).to.throw(Error);
        });
        it('test with valid params', () => {
            expect(() => rentCar.calculatePriceOfCar('Audi', 100)).not.to.throw(Error);
        });
        it('test with valid params', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 10)).to.equal(`You choose Audi and it will cost $360!`);
        });
        it('test with no such model in the shop', () => {
            expect(() => rentCar.calculatePriceOfCar('Suzuki', 100)).to.throw(Error);
        });
    });
    describe('Tests for checkBudget()', () => {
        it('test with invalid first param', () => {
            expect(() => rentCar.checkBudget('asd', 10, 10)).to.throw(Error);
        });
        it('test with invalid second param', () => {
            expect(() => rentCar.checkBudget(10, 'asd', 10)).to.throw(Error);
        });
        it('test with invalid third param', () => {
            expect(() => rentCar.checkBudget(10, 10, 'asd')).to.throw(Error);
        });
        it('test with invalid first and second params', () => {
            expect(() => rentCar.checkBudget('asd', 'asd', 10)).to.throw(Error);
        });
        it('test with invalid second and third params', () => {
            expect(() => rentCar.checkBudget(10, 'asd', 'asd')).to.throw(Error);
        });
        it('test with invalid all params', () => {
            expect(() => rentCar.checkBudget('asd', 'asd', 'asd')).to.throw(Error);
        });
        it('test with valid params and successfully rented car(with bigger budget than the cost)', () => {
            const expected = `You rent a car!`;
            const result = rentCar.checkBudget(10, 5, 100);

            expect(result).to.equal(expected);
        });
        it('test with valid params and successfully rented car(with budget which is equal to the cost)', () => {
            const expected = `You rent a car!`;
            const result = rentCar.checkBudget(10, 10, 100);

            expect(result).to.equal(expected);
        });
        it('test with valid params, but needed more money', () => {
            const expected = 'You need a bigger budget!';
            const result = rentCar.checkBudget(10, 20, 100);

            expect(result).to.equal(expected);
        });
    });
});

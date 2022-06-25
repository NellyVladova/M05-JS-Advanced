const carService = require('./03. Car service_Resources');
const { expect } = require('chai');

describe('Tests for carService', () => {
    describe('Tests for isItExpensive()', () => {
        it('test with issue = Engine', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it('test with issue = Transmission', () => {
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it('test with random issue', () => {
            expect(carService.isItExpensive('asd')).to.equal(`The overall price will be a bit cheaper`);
        });
    });
    describe('Tests for discount()', () => {
        it('test with invalid first param(string)', () => {
            expect(() => carService.discount('asd', 1)).to.throw(Error);
        });
        it('test with invalid first param(array)', () => {
            expect(() => carService.discount([], 1)).to.throw(Error);
        });
        it('test with invalid first param(object)', () => {
            expect(() => carService.discount({}, 1)).to.throw(Error);
        });
        it('test with invalid second param(string)', () => {
            expect(() => carService.discount(1, 'asd')).to.throw(Error);
        });
        it('test with invalid second param(array)', () => {
            expect(() => carService.discount(1, [])).to.throw(Error);
        });
        it('test with invalid second param(object)', () => {
            expect(() => carService.discount(1, {})).to.throw(Error);
        });
        it('test with valid first params, parts smaller than 2', () => {
            expect(carService.discount(1, 10)).to.equal("You cannot apply a discount");
        });
        it('test with valid first params, parts higher than 2', () => {
            expect(carService.discount(3, 10)).to.equal(`Discount applied! You saved 1.5$`);
        });
        it('test with valid first params, parts equal to 7', () => {
            expect(carService.discount(7, 10)).to.equal(`Discount applied! You saved 1.5$`);
        });
        it('test with valid first params, parts higher than 7', () => {
            expect(carService.discount(10, 10)).to.equal(`Discount applied! You saved 3$`);
        });
    });
    describe('test for partsToBuy()', () => {
        it('test with invalid first param(string)', () => {
            expect(() => carService.partsToBuy('asd', [])).to.throw(Error);
        });
        it('test with invalid first param(number)', () => {
            expect(() => carService.partsToBuy(1, [])).to.throw(Error);
        });
        it('test with invalid second param(string)', () => {
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 'asd')).to.throw(Error);
        });
        it('test with invalid second param(number)', () => {
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 1)).to.throw(Error);
        });
        it('test with empty first array', () => {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
        });
        it('test with valid params', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.equal(145);
        });
    });
});
const companyAdministration = require('./companyAdministration');
const { expect } = require('chai');

describe('Tests for companyAdministration', () => {
    describe('Tests for hiringEmployee()', () => {
        it('test with invalid position', () => {
            expect(() => companyAdministration.hiringEmployee('John', 'Teacher', 1)).to.throw(Error);
        });
        it('test with valid position and experience above 3 years', () => {
            const expected = `John was successfully hired for the position Programmer.`;
            const result = companyAdministration.hiringEmployee('John', 'Programmer', 5);

            expect(result).to.equal(expected);
        });
        it('test with valid position and experience exactly 3 years', () => {
            const expected = `John was successfully hired for the position Programmer.`;
            const result = companyAdministration.hiringEmployee('John', 'Programmer', 3);

            expect(result).to.equal(expected);
        });
        it('test with valid position and experience under 3 years', () => {
            const expected = `John is not approved for this position.`;
            const result = companyAdministration.hiringEmployee('John', 'Programmer', 1);

            expect(result).to.equal(expected);
        });
    });
    describe('Tests for calculateSalary()', () => {
        it('test with invalid hours(string)', () => {
            expect(() => companyAdministration.calculateSalary('asd')).to.throw(Error);
        });
        it('test with invalid hours(negative number)', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw(Error);
        });
        it('test with valid hours(under 160 hours)', () => {
            expect(companyAdministration.calculateSalary(100)).to.equal(1500);
        });
        it('test with valid hours(above 160 hours)', () => {
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });
    });
    describe('Tests for firedEmployee()', () => {
        it('test with invalid first param', () => {
            expect(() => companyAdministration.firedEmployee('asd', 1)).to.throw(Error);
        });
        it('test with invalid index(string)', () => {
            expect(() => companyAdministration.firedEmployee([], 'asd')).to.throw(Error);
        });
        it('test with invalid index(negative number)', () => {
            expect(() => companyAdministration.firedEmployee([], -1)).to.throw(Error);
        });
        it('test with invalid index(floating point number)', () => {
            expect(() => companyAdministration.firedEmployee([], 1.1)).to.throw(Error);
        });
        it('test with invalid index(bigger than the array length)', () => {
            expect(() => companyAdministration.firedEmployee([], 100)).to.throw(Error);
        });
        it('test with valid input params', () => {
            let expected = 'John, Marry, Pete';
            let result = companyAdministration.firedEmployee(['John', 'Marry', 'Tom', 'Pete'], 2);

            expect(result).to.equal(expected);
        });
    });
});
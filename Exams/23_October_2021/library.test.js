const library = require('./library');
const {expect} = require('chai');

describe('Tests for library', () => {
    describe('Tests for calcPricePfBook()', () => {
        it('test with invalid nameOfBook(number)', () => {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw(Error);
        });
        it('test with invalid nameOfBook(array)', () => {
            expect(() => library.calcPriceOfBook([], 1)).to.throw(Error);
        });
        it('test with invalid nameOfBook(object)', () => {
            expect(() => library.calcPriceOfBook({}, 1)).to.throw(Error);
        });
        it('test with invalid year(string)', () => {
            expect(() => library.calcPriceOfBook('Hello', 'asd')).to.throw(Error);
        });
        it('test with invalid year(floating point number)', () => {
            expect(() => library.calcPriceOfBook('Hello', 1.1)).to.throw(Error);
        });
        it('test with valid year under 1980', () => {
            expect(library.calcPriceOfBook('Hello', 1900)).to.equal(`Price of Hello is 10.00`);
        });
        it('test with valid year equal to 1980', () => {
            expect(library.calcPriceOfBook('Hello', 1980)).to.equal(`Price of Hello is 10.00`);
        });
        it('test with valid year above 1980', () => {
            expect(library.calcPriceOfBook('Hello', 1999)).to.equal(`Price of Hello is 20.00`);
        });
    });
    describe('Tests for findBook()', () => {
        it('test with empty book array', () => {
            expect(() => library.findBook([], "hello")).to.throw(Error);
        });
        it('test with not existing book', () => {
            let expected = "The book you are looking for is not here!";
            let result = library.findBook(["Troy", "Life Style", "Torronto"], 'Hello');

            expect(result).to.equal(expected);
        });
        it('test with existing book', () => {
            let expected = "We found the book you want.";
            let result = library.findBook(["Troy", "Life Style", "Torronto"], 'Troy');

            expect(result).to.equal(expected);
        });
    });
    describe('Tests for arrangeTheBooks()', () => {
        it('test with invalid count(string)', () => {
            expect(() => library.arrangeTheBooks('asd')).to.throw(Error);
        });
        it('test with invalid count(negative number)', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw(Error);
        });
        it('test with invalid count(floating point number)', () => {
            expect(() => library.arrangeTheBooks(1.1)).to.throw(Error);
        });
        it('test with valid count, but not enough space', () => {
            expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
        it('test with valid count and enough space', () => {
            expect(library.arrangeTheBooks(10)).to.equal("Great job, the books are arranged.");
        });
        it('test with valid count and exactly enough space', () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });
    });
});
const bookSelection = require('./bookSelection');
const { assert, expect } = require('chai');

describe('Tests for bookSelection', () => {
    describe('Tests for isGenreSuitable()', () => {
        it('Test with invalid age for Horror', () => {
            assert.equal(bookSelection.isGenreSuitable('Horror', 10), `Books with Horror genre are not suitable for kids at 10 age`);
        });
        it('Test with invalid age for Thriller', () => {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 10), `Books with Thriller genre are not suitable for kids at 10 age`);
        });
        it('Test with valid age for Thriller and Horror', () => {
            assert.equal(bookSelection.isGenreSuitable('Horror', 13), `Those books are suitable`);
        });
        it('Test with valid age and another book genre', () => {
            assert.equal(bookSelection.isGenreSuitable('Comedy', 8), `Those books are suitable`);
        });
    });
    describe('Tests for isItAffordable()', () => {
        it('Test with not enough money', () => {
            assert.equal(bookSelection.isItAffordable(10, 8), "You don't have enough money");
        });
        it('Test with enough money', () => {
            assert.equal(bookSelection.isItAffordable(10, 20), `Book bought. You have 10$ left`);
        });
        it('Test for invalid price', () => {
            expect(() => bookSelection.isItAffordable('asd', 20)).to.throw(Error);
        });
        it('Test for invalid budget', () => {
            expect(() => bookSelection.isItAffordable(10, 'asd')).to.throw(Error);
        });
    });
    describe('Tests for suitableTitles()', () => {
        it('Test for invalid books parameter', () => {
            expect(() => bookSelection.suitableTitles('asd', 'asdas')).to.throw(Error);
        });
        it('Test for invalid wantedGenre', () => {
            expect(() => bookSelection.suitableTitles([], 1)).to.throw(Error);
        });
        it('Test for invalid books and wantedGenre', () => {
            expect(() => bookSelection.suitableTitles('asd', 1)).to.throw(Error);
        });
        it('Test with valid parameters', () => {
            const expected = ['City of Brass', 'The night circus'];
            const actual = bookSelection.suitableTitles([
                { title: 'Pet Sematary', genre: 'Thriller' },
                { title: 'City of Brass', genre: 'Fantasy' },
                { title: 'The night circus', genre: 'Fantasy' }], 'Fantasy');

            assert.deepEqual(expected, actual);
        });
    })
});

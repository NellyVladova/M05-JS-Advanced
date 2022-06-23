const cinema = require('./cinema');
const { expect } = require('chai');

describe('Tests for cinema', () => {
    describe('Tests for showMovie()', () => {
        it('test with empty movie array', () => {
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
        });
        it('test with not empty movie array', () =>{
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        });
    });
    describe('Tests for ticketPrice()', () => {
        it('test with valid project type - Premiere', () =>{
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });
        it('test with valid project type - Normal', () =>{
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });
        it('test with valid project type - Discount', () =>{
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it('test with invalid project type', () =>{
            expect(() => cinema.ticketPrice('asd')).to.throw(Error);
        });
    });
    describe('Tests for swapSeatsInHall()', () => {
        it('test with invalid firstPlace(string)', () =>{
            expect(cinema.swapSeatsInHall('asd', 1)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('test with invalid firstPlace(under 0)', () =>{
            expect(cinema.swapSeatsInHall(-1, 1)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('test with invalid firstPlace(above 20)', () =>{
            expect(cinema.swapSeatsInHall(21, 1)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('test with invalid firstPlace = 0', () =>{
            expect(cinema.swapSeatsInHall(0, 1)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('test with invalid firstPlace = 20', () =>{
            expect(cinema.swapSeatsInHall(20, 1)).to.equal("Successful change of seats in the hall.");
        });
        it('test with invalid secondPlace(string)', () =>{
            expect(cinema.swapSeatsInHall(1, 'asd')).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('test with invalid secondPlace(under 0)', () =>{
            expect(cinema.swapSeatsInHall(1, -1)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('test with invalid secondPlace(above 20)', () =>{
            expect(cinema.swapSeatsInHall(1, 21)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('test with invalid secondPlace = 0', () =>{
            expect(cinema.swapSeatsInHall(1, 0)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('test with invalid secondPlace = 20', () =>{
            expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
        });
        it('test with invalid places (both equal to 0)', () =>{
            expect(cinema.swapSeatsInHall(0, 0)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it('test with valid places - 1', () =>{
            expect(cinema.swapSeatsInHall(2, 10)).to.equal("Successful change of seats in the hall.");
        });
        it('test with valid places - 2', () =>{
            expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
        });
        it('test with valid equal places', () =>{
            expect(cinema.swapSeatsInHall(10, 10)).to.equal("Unsuccessful change of seats in the hall.");
        });
    });
});
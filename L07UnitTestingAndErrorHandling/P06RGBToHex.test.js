const rgbToHexColor = require('./P06RGBToHex');
const {assert} = require('chai');

describe('Test for RGBToHex', () => {
    it('test with invalid input(lower than 0)', () =>{
        assert.equal(rgbToHexColor(-1, 0, 0), undefined);
        assert.equal(rgbToHexColor(0, -1, 0), undefined);
        assert.equal(rgbToHexColor(0, 0, -1), undefined);
    });
    it('test with invalid input(higher than 255)', () =>{
        assert.equal(rgbToHexColor(256, 0, 0), undefined);
        assert.equal(rgbToHexColor(0, 256, 0), undefined);
        assert.equal(rgbToHexColor(0, 0, 256), undefined);
    });
    //tests with correct input
    it('test with valid parameters(0, 0, 0)', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');
    });
    it('test with valid parameters(1, 1, 1)', () => {
        assert.equal(rgbToHexColor(1, 1, 1), '#010101');
    });
    it('test with valid parameters(255, 255, 255)', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });
    it('test with mising parameters', () =>{
        assert.equal(rgbToHexColor(0, 0), undefined);
        assert.equal(rgbToHexColor(0), undefined);
        assert.equal(rgbToHexColor(), undefined);
    });
});

const rgbToHexColor = require('./P06RGBToHex');
const {assert} = require('chai');

describe('Test for RGBToHex', () => {
    //red color
    it('test with invalid(string) input for red color', () => {
        assert.equal(rgbToHexColor('asd', 5, 100), undefined);
    });
    it('test with invalid(float point number) input for red color', () => {
        assert.equal(rgbToHexColor(1.66, 5, 100), undefined);
    });
    it('test with invalid(array) input for red color', () => {
        assert.equal(rgbToHexColor([], 5, 100), undefined);
    });
    it('test with invalid(object) input for red color', () => {
        assert.equal(rgbToHexColor({}, 5, 100), undefined);
    });
    it('test with negative number for red color', () => {
        assert.equal(rgbToHexColor(-10, 5, 100), undefined);
    });
    it('test with number bigger than 255 for red color', () => {
        assert.equal(rgbToHexColor(300, 5, 100), undefined);
    });
    //green color
    it('test with invalid(string) input for green color', () => {
        assert.equal(rgbToHexColor(0, 'asd', 100), undefined);
    });
    it('test with invalid(float point number) input for green color', () => {
        assert.equal(rgbToHexColor(0, 2.36, 100), undefined);
    });
    it('test with invalid(array) input for green color', () => {
        assert.equal(rgbToHexColor(0, [], 100), undefined);
    });
    it('test with invalid(object) input for green color', () => {
        assert.equal(rgbToHexColor(0, {}, 100), undefined);
    });
    it('test with negative number for green color', () => {
        assert.equal(rgbToHexColor(0, -10, 100), undefined);
    });
    it('test with number bigger than 255 for green color', () => {
        assert.equal(rgbToHexColor(0, 300, 100), undefined);
    });
    //blue color
    it('test with invalid(string) input for blue color', () => {
        assert.equal(rgbToHexColor(10, 20, 'asd'), undefined);
    });
    it('test with invalid(float point number) input for blue color', () => {
        assert.equal(rgbToHexColor(10, 20, 3.9), undefined);
    });
    it('test with invalid(array) input for blue color', () => {
        assert.equal(rgbToHexColor(10, 20, []), undefined);
    });
    it('test with invalid(object) input for blue color', () => {
        assert.equal(rgbToHexColor(10, 20, {}), undefined);
    });
    it('test with negative number for blue color', () => {
        assert.equal(rgbToHexColor(10, 20, -100), undefined);
    });
    it('test with number bigger than 255 for blue color', () => {
        assert.equal(rgbToHexColor(10, 20, 300), undefined);
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
    it('test with valid parameters(255, 234, 0)', () =>{
        assert.equal(rgbToHexColor(255, 234, 0), '#FFEA00')
    });
    it('test with no parameters', () =>{
        assert.equal(rgbToHexColor(), undefined);
    });
});
const PaymentPackage = require('./P12PaymentPackage');
const { expect, assert } = require('chai');

describe("Tests for class PaymentPackage", () => {
    describe('Tests for the name', () => {
        it('test for constructor', () => {
            let instance = new PaymentPackage('Hello', 100);
            assert.equal(instance._name, 'Hello', '1');
            assert.equal(instance._value, 100, '3');
            assert.equal(instance._VAT, 20, '4');
            assert.equal(instance._active, true, '5');
        });
        it('test for invalid name(empty string)', () => {
            expect(() => new PaymentPackage('', 1)).to.throw('Name must be a non-empty string');
        });
        it('test for invalid name(integer)', () => {
            expect(() => new PaymentPackage(0, 1)).to.throw('Name must be a non-empty string');
        });
        it('test for invalid name(array)', () => {
            expect(() => new PaymentPackage([], 1)).to.throw('Name must be a non-empty string');
        });
        it('test for invalid name(object)', () => {
            expect(() => new PaymentPackage({}, 1)).to.throw('Name must be a non-empty string');
        });
        it('test for valid name', () => {
            expect(() => new PaymentPackage('Hello', 1)).not.to.throw('Name must be a non-empty string');
        });
    });
    describe('Tests for the value', () => {
        it('test for invalid value(string)', () => {
            expect(() => new PaymentPackage('Hello', 'Hi')).to.throw('Value must be a non-negative number');
        });
        it('test for invalid value(array)', () => {
            expect(() => new PaymentPackage('Hello', [])).to.throw('Value must be a non-negative number');
        });
        it('test for invalid value(object)', () => {
            expect(() => new PaymentPackage('Hello', {})).to.throw('Value must be a non-negative number');
        });
        it('test for invalid value(negative number)', () => {
            expect(() => new PaymentPackage('Hello', -1)).to.throw('Value must be a non-negative number');
        });
        it('test for valid value', () => {
            expect(() => new PaymentPackage('Hello', 1)).not.to.throw('Value must be a non-negative number');
        });
        it('test for setting the value to null', () => {
            let instance = new PaymentPackage('Hello', 100);
            assert.doesNotThrow(() => { instance.value = 0 });
        });
    });
    describe('Tests for the vat', () => {
        it('test for invalid vat(string)', () => {
            let clazz = new PaymentPackage('Hello', 1);
            expect(() => clazz.VAT = 'Hi').to.throw('VAT must be a non-negative number');
        });
        it('test for invalid vat(array)', () => {
            let clazz = new PaymentPackage('Hello', 1);
            expect(() => clazz.VAT = []).to.throw('VAT must be a non-negative number');
        });
        it('test for invalid vat(object)', () => {
            let clazz = new PaymentPackage('Hello', 1);
            expect(() => clazz.VAT = {}).to.throw('VAT must be a non-negative number');
        });
        it('test for invalid vat(negative number)', () => {
            let clazz = new PaymentPackage('Hello', 1);
            expect(() => clazz.VAT = -1).to.throw('VAT must be a non-negative number');
        });
        it('test for valid vat', () => {
            let clazz = new PaymentPackage('Hello', 1);
            expect(() => clazz.VAT = 1).not.to.throw('VAT must be a non-negative number');
        });
    });
    describe('Tests for the active', () => {
        it('test for invalid active(string)', () => {
            let clazz = new PaymentPackage('Hello', 1);
            expect(() => clazz.active = 'Hi').to.throw('Active status must be a boolean');
        });
        it('test for invalid active(array)', () => {
            let clazz = new PaymentPackage('Hello', 1);
            expect(() => clazz.active = []).to.throw('Active status must be a boolean');
        });
        it('test for invalid active(object)', () => {
            let clazz = new PaymentPackage('Hello', 1);
            expect(() => clazz.active = {}).to.throw('Active status must be a boolean');
        });
        it('test for invalid active(number)', () => {
            let clazz = new PaymentPackage('Hello', 1);
            expect(() => clazz.active = 1).to.throw('Active status must be a boolean');
        });
        it('test for invalid active(negative number)', () => {
            let clazz = new PaymentPackage('Hello', 1);
            expect(() => clazz.active = -1).to.throw('Active status must be a boolean');
        });
        it('test for valid active(true)', () => {
            let clazz = new PaymentPackage('Hello', 1);
            expect(() => clazz.active = true).not.to.throw('Active status must be a boolean');
        });
        it('test for valid active(false)', () => {
            let clazz = new PaymentPackage('Hello', 1);
            expect(() => clazz.active = false).not.to.throw('Active status must be a boolean');
        });
    });
    describe('Tests for toString()', () => {

        it('test with valid input and default vat and active', () => {
            let clazz = new PaymentPackage('Hello', 123);
            let output = [
                `Package: Hello`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(clazz.toString()).to.equal(output.join('\n'));
        });

        it('test with valid input and only default active', () => {
            let clazz = new PaymentPackage('Hello', 123);
            clazz.VAT = 30;
            let output = [
                `Package: Hello`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(clazz.toString()).to.equal(output.join('\n'));
        });

        it('test with valid input and only default vat', () => {
            let clazz = new PaymentPackage('Hello', 123);
            clazz.active = false;
            let output = [
                `Package: Hello (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(clazz.toString()).to.equal(output.join('\n'));
        });

        it('test with valid input without default vat and active', () => {
            let clazz = new PaymentPackage('Hello', 123);
            clazz.VAT = 30;
            clazz.active = false;
            let output = [
                `Package: Hello (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(clazz.toString()).to.equal(output.join('\n'));
        });
    });
});

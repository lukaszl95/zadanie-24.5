const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('seconds', () => {
        it('should return 139', () => {
            const actual = calculateTotalPoints(110,'Skocznia normalna',98,[19,20,19,18],14,3);
    										//(distance, hillSize, kPoint, styleNotes, windFactor, gateFactor)
            const expected = '139';
    
            assert.equal(actual, expected);
        });
    });
});
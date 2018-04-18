const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('stylePoints', () => {
        it('should return stylePoints', () => {
            const actual = calculateDistancePoints(110,'Skocznia normalna',98);
    
            const expected = '84';
    
            assert.equal(actual, expected);
        });
    });
});
const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('stylePoints', () => {
        it('should return stylePoints', () => {
            const actual = calculateStylePoints([19,20,19,18]);
    
            const expected = '38';
    
            assert.equal(actual, expected);
        });
    });
});
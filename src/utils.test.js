const utils = require('./utils');

describe('extract', () => {
    test('1 -2 ', () => {
        expect(utils.extract(1, 2)).toEqual(-1);
    })

});

describe('utils.greet', () => {

    const name = 'Zoe';

    it('should contain the input name', () => {
        expect(utils.greet(name)).toContain(name);
    });

    it('should return a "Hello Adam!"', () => {
        expect(utils.greet(name)).toBe(`Hello ${name}`);
    })

})


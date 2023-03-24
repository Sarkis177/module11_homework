import { getPercents } from '../index.js';

describe(('get a percente of a number'), () => {
    it(`successful execution`, () => {
        expect(getPercents(30, 200)).toBe(60)
    }),
    it(`corner case`, () => {
    expect(getPercents(30, 0)).toBe(0)
    }),
    it(`corner case`, () => {
        expect(getPercents(0, 200)).toBe(0)
        }),
    it(`unsuccessful execution`, () => {
        expect(getPercents(30, abc)).toBe(60)
        });
});

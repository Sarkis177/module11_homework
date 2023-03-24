import { getMonth } from '../getMonth.js';

describe('tests for getMonth function', () => {
    it('should correctly show the month, when not a digit is entered and the digit is greater than 12', () => {
        expect(getMonth(6)).toBe('июнь')
        expect(getMonth(15)).toBe('неизвестно')
        expect(getMonth('январь')).toBe('введено не число')
    });
});
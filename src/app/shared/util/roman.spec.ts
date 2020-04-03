import { romanize } from './roman';

describe('Roman Number Conversiono', () => {
  test('should make roman numeral correctly (0)', () => {
    expect(romanize(0)).toEqual('');
  });

  test('should make roman numeral correctly (3)', () => {
    expect(romanize(3)).toEqual('III');
  });

  test('should make roman numeral correctly (4)', () => {
    expect(romanize(4)).toEqual('IV');
  });

  test('should make roman numeral correctly (5)', () => {
    expect(romanize(5)).toEqual('V');
  });

  test('should make roman numeral correctly (9)', () => {
    expect(romanize(9)).toEqual('IX');
  });

  test('should make roman numeral correctly (10)', () => {
    expect(romanize(10)).toEqual('X');
  });
});

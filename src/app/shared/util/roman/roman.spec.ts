import { romanize } from './roman';

describe('Roman Number Conversiono', () => {
  it('should make roman numeral correctly (0)', () => {
    expect(romanize(0)).toEqual('');
  });

  it('should make roman numeral correctly (3)', () => {
    expect(romanize(3)).toEqual('III');
  });

  it('should make roman numeral correctly (4)', () => {
    expect(romanize(4)).toEqual('IV');
  });

  it('should make roman numeral correctly (5)', () => {
    expect(romanize(5)).toEqual('V');
  });

  it('should make roman numeral correctly (9)', () => {
    expect(romanize(9)).toEqual('IX');
  });

  it('should make roman numeral correctly (10)', () => {
    expect(romanize(10)).toEqual('X');
  });
});

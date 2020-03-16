import { RomanService } from './roman.service';

describe('Roman Service', () => {
  let service: RomanService;
  beforeEach(() => {
    service = new RomanService();
  });

  test('should make roman numeral correctly (0)', () => {
    expect(service.romanize(0)).toEqual('');
  });

  test('should make roman numeral correctly (3)', () => {
    expect(service.romanize(3)).toEqual('III');
  });

  test('should make roman numeral correctly (4)', () => {
    expect(service.romanize(4)).toEqual('IV');
  });

  test('should make roman numeral correctly (5)', () => {
    expect(service.romanize(5)).toEqual('V');
  });

  test('should make roman numeral correctly (9)', () => {
    expect(service.romanize(9)).toEqual('IX');
  });

  test('should make roman numeral correctly (10)', () => {
    expect(service.romanize(10)).toEqual('X');
  });
});

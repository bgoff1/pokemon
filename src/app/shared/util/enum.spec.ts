import { enumKeys, enumValues } from './enum';

enum testEnum {
  a,
  b,
  c
}
describe('Enum', () => {
  test('should get keys', () => {
    expect(enumKeys(testEnum)).toEqual([0, 1, 2]);
  });

  test('should get values', () => {
    expect(enumValues(testEnum)).toEqual(['a', 'b', 'c']);
  });
});

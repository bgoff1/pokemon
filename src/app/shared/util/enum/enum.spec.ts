import { enumKeys, enumValues } from './enum';

enum testEnum {
  a,
  b,
  c
}
describe('Enum', () => {
  it('should get keys', () => {
    expect(enumKeys(testEnum)).toEqual([0, 1, 2]);
  });

  it('should get values', () => {
    expect(enumValues(testEnum)).toEqual(['a', 'b', 'c']);
  });
});

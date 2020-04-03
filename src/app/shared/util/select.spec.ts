import { firstNum } from './select';

describe('Select', () => {
  test('should get the first num', () => {
    expect(firstNum([1, 2, 3], 2)).toEqual([1, 2]);
  });

  test('should get with offset', () => {
    expect(firstNum([1, 2, 3], 2, 1)).toEqual([2, 3]);
  });
});

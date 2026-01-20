import sumArray from '../app/demo';

describe('sumArray', () => {
  test('sums positive numbers', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  test('returns 0 for empty array', () => {
    expect(sumArray([])).toBe(0);
  });

  test('handles negative and positive numbers', () => {
    expect(sumArray([-1, 5, -2])).toBe(2);
  });

  test('handles floats approximately', () => {
    expect(sumArray([1.5, 2.25])).toBeCloseTo(3.75);
  });

  test('handles large arrays', () => {
    const arr = new Array(10000).fill(1);
    expect(sumArray(arr)).toBe(10000);
  });
});

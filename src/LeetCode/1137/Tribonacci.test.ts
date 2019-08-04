import { solution } from './Tribonacci';

test('example 1', () => {
  const n = 4;
  const result = solution(n);
  expect(result).toBe(4);
});

test('example 2', () => {
  const n = 25;
  const result = solution(n);
  expect(result).toBe(1389537);
});

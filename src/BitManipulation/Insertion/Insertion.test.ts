import { solution } from './Insertion';

test('example case', () => {
  const n = 1024;
  const m = 19;
  const i = 2;
  const j = 6;
  const result = solution(n, m, i, j);

  expect(result).toBe(1100);
});

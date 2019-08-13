import { solution, memoize } from './TripleStep';

test('case 1', (): void => {
  const n = 1;
  const result = solution(n);
  const resultMemoize = memoize(n);
  expect(result).toBe(1);
  expect(resultMemoize).toBe(1);
});

test('case 2', (): void => {
  const n = 2;
  const result = solution(n);
  const resultMemoize = memoize(n);
  expect(result).toBe(2);
  expect(resultMemoize).toBe(2);
});

test('case 3', (): void => {
  const n = 3;
  const result = solution(n);
  const resultMemoize = memoize(n);
  expect(result).toBe(4);
  expect(resultMemoize).toBe(4);
});

test('case 4', (): void => {
  const n = 4;
  const result = solution(n);
  const resultMemoize = memoize(n);
  expect(result).toBe(7);
  expect(resultMemoize).toBe(7);
});

test('case 5', (): void => {
  const n = 9;
  const result = solution(n);
  const resultMemoize = memoize(n);
  expect(result).toBe(149);
  expect(resultMemoize).toBe(149);
});

test('case 6', (): void => {
  const n = 31;
  const result = solution(n);
  const resultMemoize = memoize(n);
  expect(result).toBe(98950096);
  expect(resultMemoize).toBe(98950096);
});

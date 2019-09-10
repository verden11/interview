import { solution } from './recursiveMultiply';

test('case 1', (): void => {
  const a = 1;
  const b = 5;
  const result = solution(a, b);
  expect(result).toBe(a * b);
});

test('case 2', (): void => {
  const a = 2;
  const b = 3;
  const result = solution(a, b);
  expect(result).toBe(a * b);
});

test('case 3', (): void => {
  const a = 5;
  const b = 7;
  const result = solution(a, b);
  expect(result).toBe(a * b);
});

test('case 4', (): void => {
  const a = 11;
  const b = 7;
  const result = solution(a, b);
  expect(result).toBe(a * b);
});

test('negative inputs', (): void => {
  const a = 1;
  const b = -5;
  expect(() => {
    solution(a, b);
  }).toThrowError();
});

import { solution } from './magicIndex';

test('case 1', (): void => {
  const input = [-1, -2, 2, 9];
  const result = solution(input);
  expect(result).toBe(2);
});

test('case 2', (): void => {
  const input = [-7, -2, 9, 10, 12, 14, 15];
  const result = solution(input);
  expect(result).toBe(-1);
});

test('case 3', (): void => {
  const input = [-3, -2, -1, 3, 3, 9, 9, 9, 9];
  const result = solution(input);
  expect(result).toBe(3);
});

test('case 4', (): void => {
  const input = [-3, -2, -1, 3, 3, 9, 9, 9, 9];
  const result = solution(input);
  expect(result).toBe(3);
});

test('case 5', (): void => {
  const input = [0, 0, 4];
  const result = solution(input);
  expect(result).toBe(0);
});

test('case 6', (): void => {
  const input = [-1, 0, 2];
  const result = solution(input);
  expect(result).toBe(2);
});

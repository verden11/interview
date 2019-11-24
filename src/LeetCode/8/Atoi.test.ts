import { solution } from './Atoi';

test('simple', (): void => {
  const input = '42';
  const restult = solution(input);
  expect(restult).toBe(42);
});

test('with whitespace', (): void => {
  const input = '  -42';
  const result = solution(input);
  expect(result).toBe(-42);
});

test('with words', (): void => {
  const input = '4193 with words';
  const restult = solution(input);
  expect(restult).toBe(4193);
});

test('words and number', (): void => {
  const input = 'text and 987';
  const result = solution(input);
  expect(result).toBe(0);
});

test('large number', (): void => {
  const input = '-91283472332';
  const result = solution(input);
  expect(result).toBe(Math.pow(-2, 31));
});

test('large positive number', (): void => {
  const input = '2147483648';
  const result = solution(input);
  expect(result).toBe(2147483647);
});

test('large postive number 2', (): void => {
  const input = '2147483646';
  const result = solution(input);
  expect(result).toBe(2147483646);
});

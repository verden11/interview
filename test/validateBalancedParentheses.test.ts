import { solution } from '../src/validateBalancedParentheses';

test('test case 1', (): void => {
  const input = '((()))';
  expect(solution(input)).toBe(true);
});

test('test case 2', (): void => {
  const input = '[()]{}';
  expect(solution(input)).toBe(true);
});

test('test case 3', (): void => {
  const input = '({[)]';
  expect(solution(input)).toBe(false);
});

test('test case 4', (): void => {
  const input = '';
  expect(solution(input)).toBe(true);
});

test('test case 5', (): void => {
  const input = ')';
  expect(solution(input)).toBe(false);
});

test('test case 6', (): void => {
  const input = '}';
  expect(solution(input)).toBe(false);
});

test('test case 7', (): void => {
  const input = ']';
  expect(solution(input)).toBe(false);
});

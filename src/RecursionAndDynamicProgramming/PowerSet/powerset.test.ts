import { solution } from './powerSet';

test('case 0', (): void => {
  const input: string[] = [];
  const result = solution(input);
  expect(result).toHaveLength(1);
});

test('case 1', (): void => {
  const input = ['x', 'y'];
  const result = solution(input);
  expect(result).toHaveLength(4);
});

test('case 2', (): void => {
  const input = ['x', 'y', 'z'];
  const result = solution(input);
  expect(result).toHaveLength(8);
});

test('does not contain duplicates', (): void => {
  const input = ['x', 'y', 'z', 'x'];
  const result = solution(input);
  expect(result).toHaveLength(8);
});

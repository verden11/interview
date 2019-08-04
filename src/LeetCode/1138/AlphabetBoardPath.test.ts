import { solution } from './AlphabetBoardPath';

test('Example 1', () => {
  const target = 'leet';
  const result = solution(target);
  expect(result).toBe('DDR!UURRR!!DDD!');
});

test('Example 2', () => {
  const target = 'code';
  const result = solution(target);
  expect(result).toBe('RR!DDRR!UUL!R!');
});

test('Example 3', () => {
  const target = 'zdz';
  const result = solution(target);
  expect(result).toBe('DDDDD!UUUUURRR!LLLDDDDD!');
});


test('Example 4', () => {
  const target = 'zb';
  const result = solution(target);
  expect(result).toBe('DDDDD!UUUUUR!');
});
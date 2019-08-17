import { solution } from './robotInAGrid';

test('case 1', (): void => {
  const grid = [[true, true, true], [false, false, true], [true, true, true]];
  const result = solution(grid);
  expect(result).toBeTruthy();
  expect(result).toHaveLength(5);
});

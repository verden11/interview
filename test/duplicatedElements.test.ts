import { solution, solutionCustom } from '../src/duplicatedElements';

test('test case 1', () => {
  const input = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15];
  const target = 9;
  expect(solution(input, target)).toStrictEqual([6, 8]);
  expect(solutionCustom(input, target)).toStrictEqual([6, 8]);
});

test('test case 2', () => {
  const input = [100, 150, 150, 153];
  const target = 150;
  expect(solution(input, target)).toStrictEqual([1, 2]);
  expect(solutionCustom(input, target)).toStrictEqual([1, 2]);
});

test('test case 3', () => {
  const input = [1, 2, 3, 4, 5, 6, 10];
  const target = 9;
  expect(solution(input, target)).toStrictEqual([-1, -1]);
  expect(solutionCustom(input, target)).toStrictEqual([-1, -1]);
});

test('test case 4', () => {
  const input = [1, 2, 3, 4, 5, 6, 10];
  const target = 2;
  expect(solution(input, target)).toStrictEqual([1, 1]);
  expect(solutionCustom(input, target)).toStrictEqual([1, 1]);
});

test('test case 5', () => {
  const input = [5, 7, 7, 8, 8, 10];
  const target = 8;
  expect(solution(input, target)).toStrictEqual([3, 4]);
  expect(solutionCustom(input, target)).toStrictEqual([3, 4]);
});

test('test case 6', () => {
  const input = [5, 7, 7, 8, 8, 10];
  const target = 6;
  expect(solution(input, target)).toStrictEqual([-1, -1]);
  expect(solutionCustom(input, target)).toStrictEqual([-1, -1]);
});

test('test case 7', () => {
  const input = [1];
  const target = 1;
  expect(solution(input, target)).toStrictEqual([0, 0]);
  expect(solutionCustom(input, target)).toStrictEqual([0, 0]);
});

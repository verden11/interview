export const solution = (n: number): number => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return solution(n - 1) + solution(n - 2) + solution(n - 3);
};

export const memoize = (n: number): number => {
  const cache: number[] = [];
  return countWays(n, cache);
};

const countWays = (n: number, cache: number[]): number => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (cache[n]) return cache[n];
  cache[n] = countWays(n - 1, cache) + countWays(n - 2, cache) + countWays(n - 3, cache);
  return cache[n];
};

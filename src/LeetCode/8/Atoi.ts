export const solution = (s: string): number => {
  const result = Number.parseInt(s, 10);
  if (isNaN(result)) return 0;

  // check if the number is 32-bit signed integer [-2^31, 2^31 -1]
  const power = Math.log2(Math.abs(result));
  if (power >= 31) return result > 0 ? 2 ** 31 - 1 : (-2) ** 31;
  return result;
};

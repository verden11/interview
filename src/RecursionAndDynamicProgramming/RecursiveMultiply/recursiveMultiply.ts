const multiply = (a: number, b: number, remainder: number, memo: number[]): number => {
  if (a === 1) return b + remainder;
  if (a % 2 !== 0 && b % 2 !== 0) {
    return multiply(a - 1, b, b, memo);
  }

  // check if a is power of 2
  const isPow2 = (a & (a - 1)) === 0;
  if (!isPow2) {
    return multiply(a / 2, b, 0, memo) + multiply(a / 2, b, 0, memo) + remainder;
  }

  const power = Math.log2(a);
  return (b << power) + remainder;
};

export const solution = (a: number, b: number): number => {
  if (a < 1 || b < 1) throw new Error();

  return multiply(a, b, 0, []);
};

export const solution = (n: number, m: number, i: number, j: number): number => {
  if (i > j || i < 0 || j >= 32) return 0; // invalid input

  const allOnes = ~0; // will equal to sequence of all 1s

  // 1s before position j, then 0s
  const left = j < 31 ? allOnes << (j + 1) : 0;

  // 1s after position i, then 0s
  const right = (1 << i) - 1;

  // All 1s, except for 0s between i and j.
  const mask = left | right;

  const n_cleared = n & mask; // Clear bits j through i
  const m_shifted = m << i; 

  return n_cleared | m_shifted;
};

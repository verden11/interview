export const solution = (n: number): number => {
  let t0 = 0;
  let t1 = 1;
  let t2 = 1;
  if (n === 0) return t0;
  if (n === 1) return t1;
  if (n === 2) return t2;
  for (let i = 2; i < n; i++) {
    const temp_t2 = t2;
    const temp_t1 = t1;
    t2 += t1 + t0;

    t1 = temp_t2;
    t0 = temp_t1;
  }
  return t2;
};

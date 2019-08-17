export const solution = (set: string[]): string[][] => {
  const sanitiseInput = [...new Set(set)];
  if (sanitiseInput.length === 0) return [sanitiseInput];

  const e: string = sanitiseInput.pop() || '';

  const pt = solution(sanitiseInput);

  const fept: string[][] = [];
  pt.forEach(x => {
    fept.push(x.concat([e]));
  });

  return fept.concat(pt);
};

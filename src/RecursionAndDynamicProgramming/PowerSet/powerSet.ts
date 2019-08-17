const powerSet = (set: string[]): string[][] => {
  if (set.length === 0) return [set];

  // the following block is to silence eslint
  // as .pop() may return undefined
  // but the length is checked at the top of the function
  const el = set.pop();
  if (!el) throw new Error('.pop() returned undefined');
  const e: string = el;

  const pt = powerSet(set);
  const fept: string[][] = [];
  pt.forEach(x => {
    fept.push(x.concat([e]));
  });

  return fept.concat(pt);
};

export const solution = (set: string[]): string[][] => {
  const sanitiseInput = [...new Set(set)];
  return powerSet(sanitiseInput);
};

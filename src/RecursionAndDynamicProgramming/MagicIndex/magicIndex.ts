const search = (arr: number[], start: number, end: number): number => {
  if (end < start) return -1; // exit case

  const mid = Math.floor((end - start) / 2 + start); // avoid overflow
  if (arr[mid] === mid) return mid;

  const leftIndex = Math.min(arr[mid], mid - 1);
  const searchLeft = search(arr, start, leftIndex);
  if (searchLeft !== -1) return searchLeft;

  const rightIndex = Math.max(arr[mid], mid + 1);
  const searchRight = search(arr, rightIndex, end);

  return searchRight;
};

export const solution = (arr: number[]): number => {
  if (arr.length === 0) return -1;
  return search(arr, 0, arr.length - 1);
};

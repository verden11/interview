class Point {
  row: number;
  col: number;
  constructor(r: number, c: number) {
    this.row = r;
    this.col = c;
  }

  toString(): string {
    return `{row: ${this.row}, col: ${this.col}}`;
  }
}

const getPath = (grid: boolean[][], row: number, col: number, path: Point[], failedPoints: Set<string>): boolean => {
  // check if path is possible
  if (col < 0 || row < 0 || !grid[row][col]) return false;

  const p: Point = new Point(row, col);

  // check if the point is already visited
  if (failedPoints.has(p.toString())) {
    return false;
  }

  // if there is a path from the start to here, add my location
  const isAtOrigin: boolean = row === 0 && col === 0;
  if (
    isAtOrigin ||
    getPath(grid, row, col - 1, path, failedPoints) ||
    getPath(grid, row - 1, col, path, failedPoints)
  ) {
    path.push(p);
    return true;
  }
  failedPoints.add(p.toString());
  return false;
};

export const solution = (grid: boolean[][]): Point[] | null => {
  const hasEmpty = grid.some(arr => arr.length === 0);
  if (hasEmpty) return null;
  const points: Point[] = [];
  const failedPoints: Set<string> = new Set();
  if (getPath(grid, grid.length - 1, grid[0].length - 1, points, failedPoints)) {
    return points;
  }
  return null;
};

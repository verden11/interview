export const solution = (target: string): string => {
  if (target.length < 1) return '';
  const path: string[] = [];

  let currX = 0;
  let currY = 0;
  for (const ch of target) {
    const ascii: number = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    const x: number = ascii % 5;
    const y: number = Math.floor(ascii / 5);
    const xDiff: number = x - currX;
    const yDiff: number = y - currY;
    if (y === 5) {
      // move left/right fist
      path.push(move(xDiff, true));
      path.push(move(yDiff, false));
    } else {
      // move up/down first
      path.push(move(yDiff, false));
      path.push(move(xDiff, true));
    }
    path.push('!');
    currX = x;
    currY = y;
  }
  return path.join('');
};

function move(distance: number, horizontal: boolean): string {
  const dir = horizontal ? ['R', 'L'] : ['D', 'U'];
  if (distance > 0) {
    return dir[0].repeat(distance);
  } else {
    return dir[1].repeat(Math.abs(distance));
  }
}

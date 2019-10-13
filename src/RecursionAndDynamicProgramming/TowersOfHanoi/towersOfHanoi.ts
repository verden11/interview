import { Stack } from '../../structures/Stack';

const moveDisks = (n: number, origin: Stack, destination: Stack, buffer: Stack): void => {
  // base case
  if (n <= 0) return;

  // move n-1 disk from destination to buffer
  moveDisks(n - 1, origin, buffer, destination);

  // move top from origin to destination
  destination.push(origin.pop());

  // move top n - 1 from buffer to destination, using origin as a buffer
  moveDisks(n - 1, buffer, destination, origin);
};

export const solution = (n: number): Stack[] => {
  const towers = [new Stack(), new Stack(), new Stack()];

  // create first tower with n disks
  for (let i = n - 1; i >= 0; i--) {
    towers[0].push(i);
  }
  moveDisks(n, towers[0], towers[2], towers[1]);

  return towers;
};

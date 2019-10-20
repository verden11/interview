import { solution } from './towersOfHanoi';

describe('Towers of Hanoi', (): void => {
  it('case N = 2', (): void => {
    const N = 2;
    const towers = solution(N);
    expect(towers).toHaveLength(3);

    const [tower1, tower2, tower3] = towers;
    expect(tower1.size()).toBe(0);
    expect(tower2.size()).toBe(0);
    expect(tower3.size()).toBe(N);
  });

  it('case N = 5', (): void => {
    const N = 5;
    const towers = solution(N);
    expect(towers).toHaveLength(3);

    const [tower1, tower2, tower3] = towers;
    expect(tower1.size()).toBe(0);
    expect(tower2.size()).toBe(0);
    expect(tower3.size()).toBe(N);
  });
});

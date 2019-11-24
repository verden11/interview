import { decomp as solution } from './factorialDecomposition';

describe('Factorial Decomposition', () => {
  it('basic cases', () => {
    expect(solution(2)).toStrictEqual('2');
    expect(solution(3)).toStrictEqual('2 * 3');
    expect(solution(7)).toStrictEqual('2^4 * 3^2 * 5 * 7');
  });

  it('n < 20 cases', () => {
    expect(solution(5)).toStrictEqual('2^3 * 3 * 5');
    expect(solution(14)).toStrictEqual('2^11 * 3^5 * 5^2 * 7^2 * 11 * 13');
  });
});

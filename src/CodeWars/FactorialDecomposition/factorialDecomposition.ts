const primes: number[] = [2, 3];

const isPrime = (n: number): boolean => {
  if (n <= 1) return false;
  if (n < 4) return true; // 2 and 3 are primes
  if (n % 2 === 0) return false;
  if (n < 9) return true; // 4, 6, and 8 already excluded
  if (n % 3 === 0) return false;
  const r = Math.floor(Math.sqrt(n));
  let f = 5;
  while (f <= r) {
    if (n % f === 0) return false;
    if (n % (f + 2) === 0) return false;
    f += 6;
  }
  return true;
};

const findNextPrime = (n: number): number => {
  while (true) {
    n += 2;
    if (isPrime(n)) {
      primes.push(n);
      return n;
    }
  }
};

const factorNumber = (n: number): Map<number, number> => {
  const map = new Map<number, number>();
  let counter = 0;
  while (n !== 1) {
    const prime = primes[counter] || findNextPrime(primes[counter - 1]);
    const tmp = Math.floor(n / prime);
    if (tmp * prime === n) {
      n /= prime;
      map.set(prime, (map.get(prime) || 0) + 1);
    } else {
      counter++;
    }
  }

  return map;
};

export function decomp(n: number): string {
  const map = new Map();
  for (let i = 2; i <= n; i++) {
    const tmpMap = factorNumber(i);
    for (const entry of tmpMap.keys()) {
      map.set(entry, (map.get(entry) || 0) + tmpMap.get(entry));
    }
  }

  let ret = '';
  // build return string
  for (const entry of map.entries()) {
    const key = entry[0];
    const value = entry[1];
    ret += value > 1 ? `${key}^${value}` : key;
    ret += ' * ';
  }

  return ret.slice(0, -3);
}

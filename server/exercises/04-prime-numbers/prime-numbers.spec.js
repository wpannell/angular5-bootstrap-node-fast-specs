/* eslint-disable no-param-reassign */

let primeFactorsOf = number => {
  const factors = [];
  if (number > 1) {
    if ((number % 2) === 0) {
      factors.push(2);
      number /= 2;
    }
    if (number > 1) factors.push(number);
  }
  return factors;
};

describe('prime factors', () => {
  it('1 = []', () => {
    primeFactorsOf(1).should.deepEqual([]);
  });

  it('2 = [2]', () => {
    primeFactorsOf(2).should.deepEqual([2]);
  });

  it('3 = [3]', () => {
     primeFactorsOf(3).should.deepEqual([3]);
  });

  it('4 = [2, 2]', () => {
     primeFactorsOf(4).should.deepEqual([2, 2]);

  });
  it('5 = [5]');
  it('6 = [2, 3]');
  it('7 = [7]');
  it('8 = [2, 2, 2]');
  it('9 = [3, 3]');
});

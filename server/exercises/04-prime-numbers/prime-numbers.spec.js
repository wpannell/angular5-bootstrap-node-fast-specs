/* eslint-disable no-param-reassign */

let primeFactorsof = () => [1];

describe('prime factors', () => {
  it('1 = [1]', () => {
    primeFactorsof(1).should.deepEqual([1]);
  });

  it('2 = [2]');
  it('3 = [3]');
  it('4 = [2, 2]');
  it('5 = [5]');
  it('6 = [2, 3]');
  it('7 = [7]');
  it('8 = [2, 2, 2]');
  it('9 = [3, 3]');
});

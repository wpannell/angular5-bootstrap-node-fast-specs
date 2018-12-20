/* eslint-disable no-param-reassign */
let primeFactorsof = (number) => {
  const factors = [];
  //for (var i = 2; i <= number; i++) {
  if (number > 1) {
    while (number % 2 === 0) {
      factors.push(2);
      number /= 2;
    }
    if (number > 1) factors.push(number);
  }
  return factors;
};
describe.only('prime factors', function () {
  it('1=[1]', () => {
    primeFactorsof(1).should.deepEqual([]);
  });

  it('2=[1]', () => {
    primeFactorsof(2).should.deepEqual([2]);

  });
  it('3=[1]', () => {
    primeFactorsof(3).should.deepEqual([3]);

  });
  it('4=[2,2]', () => {
    primeFactorsof(4).should.deepEqual([2, 2]);

  });
  it('5=[5]', () => {
    primeFactorsof(5).should.deepEqual([5]);

  });
  it('6=[2,3]', () => {
    primeFactorsof(6).should.deepEqual([2, 3]);
  });

  it('7=[7]', () => {
    primeFactorsof(7).should.deepEqual([7]);
  });

  it('8=[2,2,2]', () => {
    primeFactorsof(8).should.deepEqual([2, 2, 2]);
  });

  it('9=[3,3]', () => {
    primeFactorsof(9).should.deepEqual([3, 3]);

  });
});

let primeFactorsOf = number => {
  if (number === 2) return [2];
  return [];
};

/* eslint-disable no-param-reassign */
describe('prime factors', () => {
  it('1=[1]', () => {
    primeFactorsOf(1).should.deepEqual([]);
  });

  it('2=[2]', () => {
    primeFactorsOf(2).should.deepEqual([2]);
  });

  it('3=[3]');
  it('4=[2,2]');
  it('5=[5]');
  it('6=[2,3]');
  it('7=[7]');
  it('8=[2,2,2]');
  it('9=[3,3]');

});

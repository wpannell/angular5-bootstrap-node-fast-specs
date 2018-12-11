const isPrime = number => {
  if (number < 1) {
    return false;
  };

  return true;
};

describe('Verify if a number is a Prime number', () => {
   it('0 is not', () => {
     isPrime(0).should.be.false();
   });

   it('1 is', () => {
     isPrime(1).should.be.true();
   });

   it('2 is', () => {
     isPrime(2).should.be.true();
   });

   it('3 is');
   it('4 is not');
   it( '5 is');
   it('6 is not');
   it('7 is');
   it('8 is not');
   it('9 is not');
   it('10 is not');
   it('11 is');
});

const isPrime = number => {
  if (number <= 1) {
    return false;
  };

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

describe('Verify if a number is a Prime number', () => {
   it('0 is not', () => {
     isPrime(0).should.be.false();
   });

   it('1 is not', () => {
     isPrime(1).should.be.false();
   });

   it('4 is not', () => {
     isPrime(4).should.be.false();
   });

   it( '5 is', () => {
     isPrime(5).should.be.true();
   });
});

let fahrenheit2celsius = temp => (temp - 32) * 5 / 9;

describe('a fahrenheit2celsius feature', () => {
  it('has a working test infrastructure', () => {
    true.should.be.true();
  });

  it('fahrenheit2celsius of 212 is 100', () => {
    fahrenheit2celsius(212).should.equal(100);
  });

  it('fahrenheit2celsius of 32 is 0', () => {
    fahrenheit2celsius(32).should.equal(0);
  });
});

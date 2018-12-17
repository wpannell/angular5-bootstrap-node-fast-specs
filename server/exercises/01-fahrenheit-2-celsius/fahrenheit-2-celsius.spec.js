let fahrenheitToCelsius = () => 0;

describe('a fahrenheit2celsius feature', () => {
  it('shows the automated test infrastructure works', () => {
    true.should.be.true('a customized message');
  });

  it('32 degrees fahrenheit is 0 degree celsius', () => {
    fahrenheitToCelsius(32).should.equal(0);
  });

  it('212 degrees fahrenheit is 100 degrees celsius');
  it('122 degrees fahrenheit is 50 degrees celsius');
});

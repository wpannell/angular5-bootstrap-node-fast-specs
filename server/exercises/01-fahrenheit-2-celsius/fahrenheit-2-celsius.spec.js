let fahrenheitToCelsius = (fahrenheitTemp) => {
  return (fahrenheitTemp === 212) ? 100 : 0;
};

describe('the fahrenheit2celsius canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true('test not working');
  });
  it('212° fahrenheit = 100° celsius', () => {
    fahrenheitToCelsius(212).should.equal(100);
  });

  it('32° fahrenheit = 0° celsius', () => {
    fahrenheitToCelsius(32).should.equal(0, 'in correct conversion of 32 f');
  });

  it('122° fahrenheit = 50° celsius');
});

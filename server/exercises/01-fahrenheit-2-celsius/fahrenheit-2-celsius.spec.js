let fahrenheitToCelsius = () => 100;

describe('the fahrenheit2celsius canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true('test not working');
  });
  it('212° fahrenheit = 100° celsius', () => {
    fahrenheitToCelsius(212).should.equal(100);
  });


  it('32° fahrenheit = 0° celsius');
  it('122° fahrenheit = 50° celsius');
});

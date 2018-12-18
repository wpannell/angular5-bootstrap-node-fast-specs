let fahrenheit2Celsius = () => null;

describe('a fahrenheit2celsius feature', () => {
  it('shows the automated test infrastructure works', () => {
    true.should.be.true('this is a customized message');
  });

  it('212° fahrenheit is 100° celsius', () => {
    fahrenheit2Celsius(212).should.equal(100);
  });

  it('32° fahrenheit is 0° celsius');
  it('122° fahrenheit is 50° celsius');
});

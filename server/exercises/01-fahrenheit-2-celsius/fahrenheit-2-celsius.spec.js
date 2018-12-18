let fahrenheit2Celsius = (temperature) => (temperature - 32) * 5 / 9;

describe('fahrenheit2celsius feature', () => {
  it('shows the automated test infrastructure works', () => {
    true.should.be.true('this is a customized message for farhenheit 2 celsius feature.');
  });

  it('212° fahrenheit in celsius is 100°', () => {
    fahrenheit2Celsius(212).should.equal(100);
  });
  it('32° fahrenheit in celsius is 0°', () => {
    fahrenheit2Celsius(32).should.equal(0);
  });
  it('122° fahrenheit in celsius is 50°', () => {
    fahrenheit2Celsius(122).should.equal(50);
  });


});

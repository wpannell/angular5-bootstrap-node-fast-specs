describe('Stack canary test', () => {
  it('shows the test framework works!', function () {
    true.should.be.true('test framework not working');
  });

  it('isEmpty should be true');
  it('push 1 isEmpty should be false');
  it('push 1 then pop should give 1');
  it('pop should give error Stack is Empty');
  it('push 10, push 20 then pop, pop again should give 10');
  it('push 1, push 2, push 3 then peek should give 3');
  it('push 1, push 2 then pop then peek should give 1');
});

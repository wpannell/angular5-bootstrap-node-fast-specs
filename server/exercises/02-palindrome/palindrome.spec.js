let palindrome = () => true;

describe.only('a palindrome function', () => {
  it('has a canary test that proves the test infrastructure works', () => {
    true.should.be.true();
  });

  it('mom is a palindrome', () => {
    palindrome('mom').should.is.true();

  });

  it('mom and dad is not palindrome');
  it('madam is a palindrome');
  it('rise to vote sir is a palindrome');
});

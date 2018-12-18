let isPalindrome = () => true;

describe('a palindrome function', () => {
  it('has a canary test that proves the test infrastructure works', () => {
    true.should.be.true();
  });

  it('mom is a palindrome', () => {
    isPalindrome('mom').should.be.equal(true);
  });

  it('mom and dad is not palindrome');
  it('madam is a palindrome');
  it('rise to vote sir is a palindrome');
});

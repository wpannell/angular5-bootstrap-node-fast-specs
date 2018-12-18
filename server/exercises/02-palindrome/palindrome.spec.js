let isPalindrome = (text) => text === 'mom';

describe('a palindrome function', () => {
  it('has a canary test that proves the test infrastructure works', () => {
    true.should.be.true();
  });

  it('mom is a palindrome', () => {
    isPalindrome('mom').should.be.true();
  });

  it('mom and dad is not palindrome', () => {
    isPalindrome('mom and dad').should.be.false();
  });
  it('madam is a palindrome');
  it('rise to vote sir is a palindrome');
});

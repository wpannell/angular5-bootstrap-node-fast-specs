const isPalindrome = phrase => phrase.split('').reverse().join('') === phrase;

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

  it('madam is a palindrome', () => {
    isPalindrome('madam').should.be.true();
  });

  it('rise to vote sir is not a palindrome', () => {
    isPalindrome('rise to vote sir').should.be.false();
  });
});

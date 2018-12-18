let isPalindrome = phrase => phrase.split('').reverse().join('') === phrase;

describe('a isPalindrome function', () => {
  it('has a canary test that proves the test infrastructure works', () => {
    true.should.be.true();
  });

  it('mom is a isPalindrome', () => {
    isPalindrome('mom').should.be.true();
  });

  it('mom and dad is not isPalindrome', () => {
    isPalindrome('mom and dad').should.be.false();
  });

  it('madam is a isPalindrome', () => {
    isPalindrome('madam').should.be.true();
  });

  it('rise to vote sir is a isPalindrome', () => {
    isPalindrome('rise to vote sir is a isPalindrome').should.be.true();
  });
});

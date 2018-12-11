const isPalindrome = word => word === word.split('').reverse().join('');

describe('verify if a word or a sentence is a Palindrome', () => {
  it('"anna" is', () => {
    isPalindrome('anna').should.be.true();
  });

  it('"ab" is not', () => {
    isPalindrome('ab').should.be.false();
  });

  it('"Top spot" is not', () => {
    isPalindrome('top spot').should.be.false();
  });
});

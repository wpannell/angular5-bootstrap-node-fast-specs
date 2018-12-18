let elements = [];

let stack = {
  isEmpty() {
    return elements.length === 0;
  },

  length() {
    return elements.length;
  },

  push(element) {
    elements.unshift(element);
  }
};

describe('stack implementation', () => {
  beforeEach(() => {
    elements = [];
  });

  it('shows the automated test infrastructure works', () => {
    true.should.be.true();
  });

  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with a length of zero', () => {
    stack.length().should.equal(0);
  });

  it('when push is not empty', () => {
    stack.push(1);
    stack.isEmpty().should.be.false();
  });

  it('when push length is one', () => {
    stack.push(2);
    stack.length().should.equal(1);
  });

  it('should pop the same that is pushed');
  it('length should be zero after push and pop');
  it('push two and pop returns the last element pushed');
  it('push two, 2nd pop returns the first element pushed');
  it('pop should throw an stack empty error when empty');
  it('push should throw a stack at capacity error when at capacity');
  it('peek should return the top element');
  it('peek should not modify length');
  it('peek should throw an stack empty error when empty');
});

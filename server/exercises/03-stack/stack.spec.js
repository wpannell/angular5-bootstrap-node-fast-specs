const stackCreator = () => {
  let top = null;

  const isEmpty = () => top === null;
  const length = () => 0;

  const push = element => {
    top = element;
  };

  return {
    isEmpty: isEmpty,
    length: length,
    push: push
  };
};

const stack = stackCreator();

describe('stack', () => {
  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with a length of zero', () => {
    stack.length().should.equal(0);
  });

  it('when push is not empty', () => {
    stack.push(5);
    stack.isEmpty().should.be.false();
  });

  it('when push length is one');
  it('should pop the same that is pushed');
  it('length should be zero after push and pop');
  it('push two and pop returns the last element pushed');
  it('push two, 2nd pop returns the first element pushed');
  it('pop should throw a stack empty error when empty');
  it('push should throw a stack at capacity error when at capacity');
});

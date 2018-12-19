const makeStack = () => {
  let items = [];

  const empty = () => items.length === 0;
  const length = () => items.length;

  const pop = () => {
    if (empty()) throw new Error('can not pop an empty stack');
    return items.pop();
  };

  const push = something => {
    items.push(something);
  };

  return {
    empty,
    length,
    pop,
    push
  };
};

let stack = null;

describe.only('', () => {
  beforeEach(() => {
    stack = makeStack();
  });

  it('starts empty', () => {
    stack.empty().should.be.true();
  });

  it('starts with a length of zero', () => {
    stack.length().should.equal(0);
  });

  it('when push is not empty', () => {
    stack.push({});
    stack.empty().should.be.false();
  });

  it('when push length is one', () => {
    stack.push({});
    stack.length().should.equal(1);
  });

  it('should pop the same that is pushed', () => {
    const something = {};
    stack.push(something);
    stack.pop().should.equal(something);
  });

  it('length should be zero after push and pop', () => {
    stack.push({});
    stack.pop();
    stack.length().should.equal(0);
  });

  it('push two and pop once leaves stack length of one', () => {
    stack.push({});
    stack.push({});
    stack.pop();
    stack.length().should.equal(1);
  });

  it('pop should throw a stack empty error when empty', () => {
    (() => {
      stack.pop();
    }).should.throw('can not pop an empty stack');
  });

  it('push should throw a stack at capacity error when at capacity');
});

let elements = [];

let stack = {
  isEmpty() {
    return elements.length === 0;
  },

  length() {
    return elements.length;
  },

  push(element) {
    if (elements.length === 2) throw new Error('Stack length limit is 2');
    elements.unshift(element);
  },

  pop() {
    if (elements.length === 0) throw new Error('Stack is Empty');
    return elements.shift();
  },

  peek() {
    if (elements.length === 0) throw new Error('Peeking on an empty stack');
    return elements[0];
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

  it('should pop the same that is pushed', () => {
    stack.push(3);
    stack.pop().should.equal(3);
  });

  it('length should be zero after push and pop', () => {
    stack.push(4);
    stack.pop();
    stack.length().should.equal(0);
  });

  it('push two and pop returns the last element pushed', () => {
    stack.push(5);
    stack.push(6);
    stack.pop(0).should.equal(6);
  });

  it('push two, 2nd pop returns the first element pushed', () => {
    stack.push(7);
    stack.push(8);
    stack.pop();
    stack.pop().should.equal(7);
  });

  it('pop should throw an stack empty error when empty', () => {
    stack.pop.bind(null, null).should.throw('Stack is Empty');
  });

  it('push should throw a stack at capacity error when at capacity', () => {
    stack.push(9);
    stack.push(10);
    stack.push.bind(null, 11).should.throw('Stack length limit is 2');
  });

  it('peek should return the top element', () => {
    stack.push(12);
    stack.peek().should.equal(12);
  });

  it('peek should not modify length', () => {
    stack.push(13);
    stack.peek();
    stack.length().should.equal(1);
  });

  it('peek should throw an stack empty error when empty', () => {
    stack.peek.bind(null, null).should.throw('Peeking on an empty stack');
  });
});

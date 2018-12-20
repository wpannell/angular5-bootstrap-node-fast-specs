class Stack {

  constructor() {
    this.elements = [];
  }

  isEmpty() {
    return !this.elements || this.length() === 0;
  }

  length() {
    return this.elements.length;
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    return this.elements.pop();
  }
}

describe('', () => {
  it('starts empty', () => {
    let stack = new Stack();
    stack.isEmpty().should.be.true();
  });
  it('starts with a length of zero', () => {
    let stack = new Stack();
    stack.length().should.equal(0);
  });
  it('when push is not empty', () => {
    let stack = new Stack();
    stack.push(1);
    stack.isEmpty().should.be.false();
  });

  it('when push length is one', () => {
    let stack = new Stack();
    stack.push(1);
    stack.length().should.equal(1);
  });

  it('should pop the same that is pushed', () => {
    let stack = new Stack();
    stack.push(1);
    stack.pop().should.be.equal(1);
  });

  it('length should be zero after push and pop', () => {
    let stack = new Stack();
    stack.push(1);
    stack.length().should.equal(0);
  });
  it('push two and pop returns the last element pushed', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop().should.be.equal(2);
  });
  xit('push two, 2nd pop returns the first element pushed', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop().should.be.equal(1);
  });
  it('pop should throw an stack empty error when empty');
  it('push should throw a stack at capacity error when at capacity');
  it('peek should return the top element');
  it('peek should not modify length');
  it('peek should throw an stack empty error when empty');
});


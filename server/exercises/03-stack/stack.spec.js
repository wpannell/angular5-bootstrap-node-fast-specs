class Stack {
  constructor() {
    this.items = [];
    this.capacity = 3;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  push(element) {
    if (this.items.length > this.capacity) {
      throw new Error('stack at capacity error when at capacity');
    } else {
      this.items.push(element);
    }
  }
  pop() {
    if (this.items.length === 0) {
      throw new Error('stack empty error when empty');
    } else {
      return this.items.pop();
    }
  }
  peek() {
    if (this.items.length === 0) {
      throw new Error('stack empty error when empty');
    } else {
      return this.items[this.items.length - 1];
    }
  }
}

describe('implement stack', function () {
  let stack;
  beforeEach(function () {
    stack = new Stack();
  });


  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });
  it('starts with a length of zero', () => {
    stack.size().should.be.equal(0);
  });
  it('when push is not empty', () => {
    stack.push('one');
    stack.isEmpty().should.be.false();
  });
  it('when push length is one', () => {
    stack.push('one');
    stack.size().should.be.equal(1);
  });
  it('should pop the same that is pushed', () => {
    stack.push('one');
    stack.pop().should.be.equal('one');
  });
  it('length should be zero after push and pop', () => {
    stack.push('one');
    stack.pop();
    stack.size().should.be.equal(0);
  });
  it('peek should return the top element', () => {
    stack.push('one');
    stack.peek().should.be.equal('one');
  });
  it('peek should not modify length', () => {
    stack.push('one');
    stack.peek();
    stack.size().should.be.equal(1);
  });
  it('push two and pop returns the last element pushed', () => {
    stack.push('one');
    stack.push('two');
    stack.pop().should.be.equal('two');
  });
  it('push two, 2nd pop returns the first element pushed', () => {
    stack.push('one');
    stack.push('two');
    stack.pop();
    stack.pop().should.be.equal('one');
  });
  it('pop should throw an stack empty error when empty', () => {
    stack.pop.bind().should.throw();

  });
  it('peek should throw an stack empty error when empty', () => {
    stack.peek.bind().should.throw();

  });
  it('push should throw a stack at capacity error when at capacity', function () {
    stack.push.bind().should.throw();

  });

});

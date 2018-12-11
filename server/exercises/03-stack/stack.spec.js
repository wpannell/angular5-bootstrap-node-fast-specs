const createStack = () => {
  let top = null;
  let size = 0;

  const isEmpty = () => top === null;
  const length = () => size;

  const push = element => {
    top = {
      value: element,
      next: top === null ? null : top,
    };

    size++;
  };

  const pop = () => {
    if (isEmpty()) {
      throw new Error('cannot pop an empty stack');
    }
    let poppedElement = top;

    if (top.next !== null) {
      top = top.next;
    } else {
      top = null;
    }

    size--;

    return poppedElement.value;
  };

  return {
    isEmpty: isEmpty,
    length: length,
    push: push,
    pop: pop
  };
};

let stack;

describe('stack', () => {
  beforeEach(() => {
    stack = createStack();
  });

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

  it('when push length is one', () => {
    stack.push(10);
    stack.length().should.equal(1);
  });

  it('should pop the same that is pushed', () => {
    stack.push(3);
    stack.pop().should.equal(3);
  });

  it('length should be zero after push and pop', () => {
    stack.push(8);
    stack.pop();
    stack.length().should.equal(0);
  });

  it('length should be two after push and push', () => {
    stack.push(6);
    stack.push(7);
    stack.length().should.equal(2);
  });

  it('push two, 2nd pop returns the first element pushed', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop().should.equal(1);
  });

  it('pop should throw a stack empty error when empty', () => {
    (() => {
      stack.pop();
    }).should.throw('cannot pop an empty stack');
  });

  it('push should throw a stack at capacity error when at capacity');
});

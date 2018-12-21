import {lineCount} from './line-count';

describe.only('line count can be checked', () => {
  const filespec = '/Users/aadeveloper/git/tdd-exercises/server/exercises/async-02-line-count-with-promise/line-count.js';

  it('with the done parameter like with a callback', () => {
    lineCount(filespec).then((numberOfLines) => {
      numberOfLines.should.equal(13);
    });
  });
  it('by returning the promise after .then', () => {
    return lineCount(filespec).then((numberOfLines) => {
      numberOfLines.should.equal(14);
    });
  });

  it('by using eventually or fulfilledWith', () => {

    return lineCount(filespec).should.eventually.equal(14);
  });
});

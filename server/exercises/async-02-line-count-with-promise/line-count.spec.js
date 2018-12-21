import {lineCount} from './line-count';

const filespec = 'server/exercises/async-02-line-count-with-promise/line-count.js';

describe('line count can be checked', () => {
  it('with the done parameter like with a callback', (done) => {
    lineCount(filespec).then((numberOfLinesInTheFile) => {
      numberOfLinesInTheFile.should.equal(14);
      done();
    });
  });

  it('by returning the promise after .then', () => {
    return lineCount(filespec).then((numberOfLinesInTheFile) => {
      numberOfLinesInTheFile.should.equal(14);
    });
  });

  it('by using eventually or fulfilledWith', () => {
    return lineCount(filespec).should.be.fulfilledWith(14);
  });
});

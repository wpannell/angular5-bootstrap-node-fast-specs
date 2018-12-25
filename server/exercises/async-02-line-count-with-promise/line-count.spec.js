import {lineCount} from './line-count';

const filespec = 'server/exercises/async-02-line-count-with-promise/line-count.js';

describe('line count can be checked', () => {

  it('with the done parameter like with a callback', () => {
    lineCount(filespec).then((numberOfLinesInTheFile) => {
      numberOfLinesInTheFile.should.equal(13);

    });
  });

  it('by returning the promise after .then', () => {
    return lineCount(filespec).then((numberOfLinesInTheFile) => {
      numberOfLinesInTheFile.should.equal(14);
    });
  });

  it('by using fulfilledWith', () => {
    return lineCount(filespec).should.be.fulfilledWith(14);
  });

  it('by using eventually', () => {
    return lineCount(filespec).should.eventually.equal(14);
  });
});

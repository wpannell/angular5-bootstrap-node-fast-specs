import {lineCount} from './line-count';
const file = 'server/exercises/async-02-line-count-with-promise/line-count.js';

describe('line count can be checked', () => {

  it('with the done parameter like with a callback', (done) => {
    lineCount(file).then((fileLineCount) => {
      fileLineCount.should.equal(14);
      done();
    });
  });

  it('by returning the promise after .then', () => {
    return lineCount(file).then((fileLineCount) => {
      fileLineCount.should.equal(14);
    });
  });

  it('by using eventually or fulfilledWith', () => {
    return lineCount(file).should.eventually.equal(14);
  });

  it('by using eventually or fulfilledWith', () => {
    return lineCount(file).should.be.fulfilledWith(14);
  });
});

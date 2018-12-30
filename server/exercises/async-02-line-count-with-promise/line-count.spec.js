import {lineCount} from './line-count';

const file = 'server/exercises/async-02-line-count-with-promise/line-count.js';
const errorFile = 'no-such-file.js';

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

  it('by using eventually', () => {
    return lineCount(file).should.eventually.equal(14);
  });

  it('by using fulfilledWith', () => {
    return lineCount(file).should.be.fulfilledWith(14);
  });

  it('with the done parameter like with a callback when there is error', done => {
    lineCount(errorFile).catch(error => {
      error.should.deepEqual(new Error('problem reading file: ' + errorFile));
      done();
    });
  });

});

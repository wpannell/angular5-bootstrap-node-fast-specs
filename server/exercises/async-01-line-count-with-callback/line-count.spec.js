import {lineCount} from './line-count';

const filename = 'server/exercises/async-01-line-count-with-callback/line-count.js';
const errorFile = 'is-not-there.js';

describe('line count', () => {
  it('for file —— line-count.js —— should be 13', (done) => {
    lineCount(filename, null, (lines) => {
      lines.should.equal(13);
      done();
    });
  });

  it('for file —— is-not-there.js —— should be problem reading file: ' +
    'is-not-there.js', (done) => {

    lineCount(errorFile, (msg) => {
      msg.should.equal('problem reading file: ' + errorFile);
      done();
    }, null);
  });

});

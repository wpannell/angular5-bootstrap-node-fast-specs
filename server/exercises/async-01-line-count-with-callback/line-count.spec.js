import {lineCount} from './line-count';

const file = 'server/exercises/async-01-line-count-with-callback/line-count.js';

describe('line count', () => {
  it('for file —— line-count.js —— should be 13', done => {
    lineCount(file, null, totalLineCount => {
      totalLineCount.should.equal(13);
      done();
    });
  });

  it('for file —— is-not-there.js —— should be problem reading file: ' +
      'is-not-there.js');
});

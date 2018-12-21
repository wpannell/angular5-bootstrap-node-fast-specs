import {months} from './months';

describe('months', () => {
  it('has a canary test', () => {
    true.should.be.true('');
  });

  it('gives the current month', () => {
    months.current(new Date(2020, )).should.deepEqual({
      month: 9,
      year: 2020
    });
  });

  it('gives the prior month');
});


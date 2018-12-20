import {months} from './months';

describe('months', () => {
  it('has a canary test', () => {
    true.should.be.true();
  });

  it('gives the current month', () => {
    months.current(new Date(2020, 7)).should.deepEqual({
      month: 8,
      year: 2020
    });
  });

  it('gives the prior month', () => {
    months.prior(new Date(2018, 11)).should.deepEqual({
      month: 11,
      year: 2018
    });
  });
});


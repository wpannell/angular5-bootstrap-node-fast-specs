import {months} from './months';

describe('months', () => {
  it('has a canary test', () => {
    true.should.be.true();
  });

  it('gives the current month', () => {
    months.current().should.deepEqual({
      month: 12,
      year: 2018
    });
  });

  it('gives the prior month', () => {
    months.prior().should.deepEqual({
      month: 11,
      year: 2018
    });
  });
});


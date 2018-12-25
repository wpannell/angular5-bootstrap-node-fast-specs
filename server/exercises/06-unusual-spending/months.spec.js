import {months} from './months';

describe('months', () => {
  it('has a canary test', () => {
    true.should.be.true('');
  });

  it('gives current month', () => {
    months.current().should.deepEqual({
      month: 12,
      year: 2018
    });
  });

  it('gives prior month', () => {
    months.prior().should.deepEqual({
      month: 11,
      year: 2018
    });
  });

  it('gives prior month for jan ', () => {
    months.prior(new Date(2019, 0)).should.deepEqual({
      month: 12,
      year: 2018
    });
  });
});

import {months} from './months';

describe('months', () => {
  it('has a canary test', () => {
    true.should.be.true();
  });

  it('should return prior month', () => {
    months.prior(new Date(2018, 11)).should.deepEqual({month: 11, year: 2018});
  });

  it('should return current month', () => {
    months.current(new Date(2020, 11)).should.deepEqual({month: 12, year: 2020});
  });

});

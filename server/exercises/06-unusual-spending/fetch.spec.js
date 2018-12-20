import * as td from 'testdouble';

const {replace, when} = td;

describe('fetch', () => {
  it('fetch manages the collaboration of months and api', () => {
    const months = replace(require('./months'), 'months');
    replace(months, 'prior');
    replace(months, 'current');

    const api = replace(require('./api'), 'api');

    const fetch = require('./fetch').fetch;

    const priorMonth = {
      year: 2018,
      month: 11
    };
    const currentMonth = {
      year: 2018,
      month: 12
    };

    when(months.prior()).thenReturn(priorMonth);
    when(months.current()).thenReturn(currentMonth);

    const userId = 'userId';
    const priorMonthPayments = [{
      amount: 100,
      category: 'cable'
    }, {
      amount: 200,
      category: 'Gasoline'
    }];
    const currentMonthPayments = [{
      amount: 150,
      category: 'mobile phone'
    }];

    when(api(userId, priorMonth)).thenReturn(priorMonthPayments);
    when(api(userId, currentMonth)).thenReturn(currentMonthPayments);

    fetch(userId).should.deepEqual([currentMonthPayments, priorMonthPayments]);
  });
});

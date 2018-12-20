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

    const priorPayments = [{
      amount: 100,
      category: 'cable'
    }, {
      amount: 200,
      category: 'Gasoline'
    }];

    const priorMonthPayments = {
      month: priorMonth,
      payments: priorPayments};

    const currentPayments = [{
      amount: 150,
      category: 'mobile phone'
    }];

    const currentMonthPayments = {
      month: currentMonth,
      payments: currentPayments
    };

    when(api(userId, priorMonth)).thenReturn(priorPayments);
    when(api(userId, currentMonth)).thenReturn(currentPayments);

    fetch(userId).should.deepEqual([currentMonthPayments, priorMonthPayments]);
  });
});

import * as td from 'testdouble';

const {replace, when, should} = td;

describe('fetch', (id) => {

  it('sucessfully collaborates  with months and api ', () => {

    var currentMonth = {
      month: 12,
      year: 2018
    };
    const priorMonth = {
      month: 11,
      year: 2018
    };

    var currentMonthPayment = [{amount: 90, category: 'tennis'}];

    var priorMonthPayment = [{amount: 75, category: 'tennis'}];

    var payments = [currentMonthPayment, priorMonthPayment];

    const months = replace(require('./months'), 'months');
    replace(months, 'prior');
    replace(months, 'current');

    const api = replace(require('./api'), 'api');

    when(months.current()).thenReturn(currentMonth);
    when(months.prior()).thenReturn(priorMonth);
    when(api(id, currentMonth)).thenReturn(currentMonthPayment);
    when(api(id, priorMonth)).thenReturn(priorMonthPayment);
    const fetch = require('./fetch').fetch;

    fetch(id).should.deepEqual(payments);
  });
});

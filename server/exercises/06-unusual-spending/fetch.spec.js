import td from 'testdouble';

const {replace, when, verify} = td;

describe('fetch ', () => {
  it('fetch manages the collaboration of months and api', () => {

    // === arrange ===
    // create test doubles
    const months = replace(require('./months'), 'months');
    replace(months, 'current');
    replace(months, 'prior');
    const api = replace(require('./api'), 'api');

    //system under test
    const fetch = require('./fetch').fetch;

    // stub
    const priorMonth = {
      month: 11,
      year: 2018
    };
    const currentMonth = {
      month: 12,
      year: 2018
    };
    const userId = 'userId';
    const priorMonthPayments = [
      {amount: 90, category: 'tennis'},
    ];
    const currentMonthPayments = [
      {amount: 70, category: 'basketball'},
    ];


    when(months.prior()).thenReturn(priorMonth);
    when(months.current()).thenReturn(currentMonth);

    when(api(userId, priorMonth)).thenReturn(priorMonthPayments);
    when(api(userId, currentMonth)).thenReturn(currentMonthPayments);

    // === act & assert ===
    fetch(userId).should.deepEqual([priorMonthPayments, currentMonthPayments]);

    // === assert ===


  });
});


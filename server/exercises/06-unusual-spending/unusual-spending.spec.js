import td from 'testdouble';

const {replace, when, verify} = td;
const path = './server/exercises/06-unusual-spending/';

describe.only('unusual spending', () => {
  it('unusal spending manages the collaboration of fetch, ' +
    'categorize and email', () => {

    // === arrange ===
    const fetch = replace('fetch').fetch;
    const categorize = replace(path + 'categorize').categorize;
    const email = replace(path + 'email').email;

    // system under test
    let unusualSpending;

    const userId = 'userId';
    const payments = 'payments';
    const categorizedPayments = 'categorizedPayments';

    when(fetch(userId)).thenReturn(payments);
    when(categorize(payments)).thenReturn(categorizedPayments);

    unusualSpending = require('./unusual-spending').unusualSpending;

    // act // when
    unusualSpending(userId);

    // assert //then
    verify(email(userId, categorizedPayments));

  });


});


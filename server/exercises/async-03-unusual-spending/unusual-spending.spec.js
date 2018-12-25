import * as td from 'testdouble';

const {replace, when, verify} = td;

describe('async unusual spending', () => {
  it('unusal spending manages the collaboration of fetch, ' +
    'categorize and email', () => {

    // === arrange ===
    // create test doubles
    const fetch = replace(require('./fetch'), 'fetch');
    const categorize = replace(require('./categorize'), 'categorize');
    const email = replace(require('./email'), 'email');

    //system under test
    const unusualSpending = require('./unusual-spending').unusualSpending;

    // stub
    const userId = 'userId';
    const payments = 'payments';
    const categorizedPayments = 'categorizedPayments';

    when(fetch(userId)).thenReturn(new Promise((resolve) => {
      resolve(payments);
    }));
    when(categorize(payments)).thenReturn(categorizedPayments);

    // === act & assert ===
    return unusualSpending(userId).then(() => {
      verify(email(userId, categorizedPayments));
    });
  });
});


import td from 'testdouble';

const {replace, when, verify} = td;

describe('unusual spending', () => {
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

    when(fetch(userId)).thenReturn(payments);
    when(categorize(payments)).thenReturn(categorizedPayments);

    // === act ===
    unusualSpending(userId);

    // === assert ===
    verify(email(userId, categorizedPayments));

  });
});


import * as td from 'testdouble';

const {replace, when, verify} = td;

describe.only('unusual spending', () => {
  it('unusual spending manages the collaboration of fetch, categorize and email', () => {
    const fetch = replace(require('./fetch'), 'fetch');
    const categorize = replace(require('./categorize'), 'categorize');
    const email = replace(require('./email'), 'email');

    const userId = 'userId';
    const payments = 'payments';
    const categorizedPayments = 'categorizedPayments';

    let unusualSpending;

    when(fetch(userId)).thenReturn(payments);
    when(categorize(payments)).thenReturn(categorizedPayments);

    unusualSpending = require('./unusual-spending').unusualSpending;

    unusualSpending(userId);

    verify(email(userId, categorizedPayments));
  });
});

import td from 'testdouble';

const {replace, when, verify} = td;
const path = './server/exercises/06-unusual-spending/';

describe('unusual spending', () => {
  it('has a canary spec that shows test automation works', () => {
    true.should.be.true('a customized message');
  });

  it('unusual spending manages the collaboration of fetch, categorize and email', () => {
    const fetch = replace(path + 'fetch').fetch;
    const categorize = replace(path + 'categorize').categorize;
    const email = replace(path + 'email').email;

    let unusualSpending;

    const userId = 'userId';
    const payments = 'payments';
    const categorizedPayments = 'categorizedPayments';

    when(fetch(userId)).thenReturn(payments);
    when(fetch(categorize)).thenReturn(categorizedPayments);

    unusualSpending = require('./unusual-spending').unusualSpending;

    unusualSpending(userId);

    verify(email(userId, categorizedPayments));
  });
});

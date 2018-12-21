import * as td from 'testdouble';

const {replace, when, verify} = td;

describe('unusual spending', () => {
  it('has a canary test', () => {
    true.should.be.true();
  });

  xit('successfully manages the collaboration of fetch, categorize and email', () => {
    const fetch = replace(require('./fetch'), 'fetch');
    const categorize = replace(require('./categorize'), 'categorize');
    const email = replace(require('./email'), 'email');
    const unusualSpending = require('./unusual-spending').unusualSpending;

    const userId = 'userId';
    const payments = 'payments';


    const categorizedPayments = 'categorizedPayments';

    when(fetch(userId)).thenReturn(new Promise((resolve) => {
      return resolve(payments);
    }));

    when(categorize(payments)).thenReturn(categorizedPayments);

    return unusualSpending.then(() => {
      verify(email(userId, categorizedPayments));
    });

  });

  it('failed the collaboration of fetch, categorize and email');
});

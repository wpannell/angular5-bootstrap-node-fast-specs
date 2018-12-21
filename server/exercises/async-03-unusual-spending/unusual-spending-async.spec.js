import * as td from 'testdouble';

const {replace, when, verify} = td;

describe('unsual spending async', () => {
  it('has a canary test', () => {
    true.should.be.true('this is a customized message');
  });

  it('successfully manages the collaboration of fetch, categorize and email', () => {
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

    return unusualSpending(userId).then(() => {
      verify(email(userId, categorizedPayments));
    });
  });

  it('failed the collaboration of fetch, categorize and email', () => {
    const fetch = replace(require('./fetch'), 'fetch');
    const categorize = replace(require('./categorize'), 'categorize');

    const unusalSpending = require('./unusual-spending').unusualSpending;

    const payments = 'payments';
    const categorizedPayments = 'categorizedPayments';

    const userId = 'userId';
    when(fetch(userId)).thenReturn(new Promise((resolve, reject) => {
      return reject(new Error('error retrieving payments'));
    }));

    when(categorize(payments)).thenReturn(categorizedPayments);

    return unusalSpending(userId).catch((rejected) => {
      rejected.message.should.equal('problem with fetch: error retrieving payments');
    });

  });
});


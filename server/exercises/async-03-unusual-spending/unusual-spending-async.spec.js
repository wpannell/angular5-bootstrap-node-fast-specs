import * as td from 'testdouble';
import {Promise} from 'q';

const userId = 'userId';
const categorizedPayments = 'categorizedPayments';
const payments = 'payments';

const {replace, when, verify} = td;

describe('unusual spending async', () => {
  it('has a canary test', () => {
    true.should.be.true();
  });

  const fetch = replace(require('./fetch'), 'fetch');
  const categorize = replace(require('./categorize'), 'categorize');
  const email = replace(require('./email'), 'email');

  it('sucessfully manages the collaboration of fetch, categorize, email', () => {
    when(fetch(userId)).thenReturn(new Promise((resolve) => {
      return resolve(payments);
    }));
    when(categorize(payments)).thenReturn(categorizedPayments);
    const unusualSpending = require('./unusual-spending').unusualSpending;
    return unusualSpending(userId).then(() => {
      verify(email(userId, categorizedPayments));
    });

  });

  it('on fail', () => {
    when(fetch(userId)).thenReturn(new Promise((resolve, reject) => {
      return reject(new Error('Error'));
    }));
    const unusualSpending = require('./unusual-spending').unusualSpending;
    return unusualSpending(userId).catch((rejected) => {
      rejected.message.should.equal('problem with fetch Error');
    });
  });
});


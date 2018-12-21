import * as td from 'testdouble';
const {replace, when, verify, reset} = td;

describe('unusual spending', () => {
  afterEach(() => {
    reset();
  });

  it('has a canary test', () => {
    true.should.be.true('');
  });


  it('successfully collaborates with fetch, categorize and email', () => {
    const fetch = replace(require('./fetch'), 'fetch');
    const categorize = replace(require('./categorize'), 'categorize');
    const email = replace(require('./email'), 'email');

    const userID = {};
    const payments = {};
    const categorizedPayments = {};

    when(fetch(userID)).thenReturn(payments);
    when(categorize(payments)).thenReturn(categorizedPayments);

    const unusualSpending = require('./unusual-spending').unusualSpending;

    // act
    unusualSpending(userID);

    // assert
    verify(email(userID, categorizedPayments));

  });
});


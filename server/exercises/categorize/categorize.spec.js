import {categorize} from './categorize';

describe.only('months', () => {
  it('has a canary test', () => {
    true.should.be.true();
  });

  it('current month : [{amount:10 , categorize: tennis},' +
    '     {amount:20 , categorize: tennis}] ===' +
    '     [{amount: 30, categorize: tennis}]', () => {
    const currentMonthPayment = [{amount: 10, categorize: 'tennis'},
      {amount: 20, categorize: 'tennis'}];
    const priorMonthPayment = [{amount: 20, categorize: 'tennis'},
      {amount: 30, categorize: 'tennis'}];

    const categorizedCurrentMonth = [{amount: 30, categorize: 'tennis'}];
    const categorizedPriorMonth = [{amount: 50, categorize: 'tennis'}];

    var payments = [currentMonthPayment, priorMonthPayment];
    var categorizedPayments = [categorizedCurrentMonth, categorizedPriorMonth];

   // categorize(payments).should.deepEqual(categorizedPayments);
  });

});

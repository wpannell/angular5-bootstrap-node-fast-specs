import {categorize} from './categorize';

describe('categorize', () => {
  it('has canary test ', () => {
    true.should.be.true('');
  });

  it('when payments:[prior month: [tennis:90, tennis:100,basketball:40]]' +
    '[current month:[tennis:50 , basketball:20 , basketball:100]]',
    () => {

    // arrange
    const priorMonthPayments = [
      {amount: 90, category: 'tennis'},
      {amount: 100, category: 'tennis'},
      {amount: 40, category: 'basketball'}
    ];

    const currentMonthPayments = [
      {amount: 50, category: 'tennis'},
      {amount: 20, category: 'basketball'},
      {amount: 100, category: 'basketball'},
    ];

    const payments = [priorMonthPayments, currentMonthPayments];

    const categorizedPriorMonthPayments = [
      {amount: 190, category: 'tennis'},
      {amount: 40, category: 'basketball'}
    ];

    const categorizedCurrentMonthPayments = [
      {amount: 50, category: 'tennis'},
      {amount: 120, category: 'basketball'}
    ];

    const categorizedPayments = [categorizedPriorMonthPayments, categorizedCurrentMonthPayments];

    // categorize(payments).should.deepEqual(categorizedPayments);
  });
});


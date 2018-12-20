import {categorize} from './categorize';

describe('categorize', () => {
  it('given payments should return categorized payments', () => {
    const payments = [{
      month: {
        month: 12,
        year: 2018
      },
      payments: [{
        amount: 50,
        category: 'coffee'
      }, {
        amount: 120,
        category: 'grocery'
      }]}, {
      month: {
        month: 11,
        year: 2018
      },
      payments: [{
        amount: 100,
        category: 'cable'
      }, {
        amount: 25,
        category: 'coffee'
      }, {
        amount: 30,
        category: 'cable'
      }]}
    ];
    const categorizedPayments = [{
        month: {
          month: 12,
          year: 2018
        },
        payments: [{
          amount: 50,
          category: 'coffee'
        }, {
          amount: 120,
          category: 'grocery'
        }]
      }, {
        month: {
          month: 11,
          year: 2018
        },
        payments: [{
          amount: 130,
          category: 'cable'
        }, {
          amount: 25,
          category: 'coffee'
        }]
      }
    ];

    categorize(payments).should.deepEqual(categorizedPayments);
  });
});

import {categorize} from './categorize';

describe('categorize', () => {
  it('when payments are passed in should return categorized payments', () => {
    categorize('payments').should.deepEqual('categorizedPayments');
  });
});

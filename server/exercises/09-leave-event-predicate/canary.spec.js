import app from '../../server';

describe('the canary test', () => {
  it('shows the infrastructure works', function() {
    true.should.be.true();
  });
});

export default app;

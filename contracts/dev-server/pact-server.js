const pact = require('@pact-foundation/pact-node');
const path = require('path');

pact.logLevel('debug');

const server = pact.createStub({
  port: 9999,
  pactUrls: [path.resolve(__dirname, '../pacts/dpo_erase_request_consumer-dpo_erase_request_provider.json')]
});
return server.start();

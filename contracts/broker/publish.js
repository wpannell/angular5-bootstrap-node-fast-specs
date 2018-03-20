const pact = require('@pact-foundation/pact-node');
const path = require('path');

const contracts = '../pacts';
let [,,broker] = process.argv;

console.log(broker);

const opts = {
  pactFilesOrDirs: [path.resolve(__dirname, contracts)],
  pactBroker: broker,
  tags: ['sandbox'],
  consumerVersion: '2.0.0'
};

pact.publishPacts(opts)
.then(() => {
  console.log('Pact contract publishing complete!');
  console.log('');
  console.log('Head over to ' + broker);
  console.log('to see your published contracts.');
})
.catch(e => {
  console.log('Pact contract publishing failed: ', e)
});

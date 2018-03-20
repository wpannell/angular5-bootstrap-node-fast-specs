require('should');
const td = require('testdouble');
const {replace, when, reset} = td;

describe('browse', () => {
  afterEach(() => {
    reset();
  });

  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`collaborates with service.fetch, transform and grid`, () => {
    const BrowseFetchService = require('./fetch/fetch.service').BrowseFetchService;
    const service = new BrowseFetchService();
    replace(service, 'fetch');

    const transformer = require('./transform');
    replace(transformer, 'transform');

    const eraseRequests = [{erase: 'request'}];
    const accessRequests = [{access: 'request'}];
    const transformedRequests = [{transformed: 'transformed'}];

    when(service.fetch('ERASE')).thenResolve(eraseRequests);
    when(service.fetch('ACCESS')).thenResolve(accessRequests);
    when(transformer.transform([...eraseRequests, ...accessRequests])).thenReturn(transformedRequests);

    const BrowseComponent = require('./browse.component.ts').BrowseComponent;
    const browse = new BrowseComponent(service);

    return browse.fetch().then(() => {
      browse.requests.should.deepEqual(transformedRequests);
    });
  });
});

export {};


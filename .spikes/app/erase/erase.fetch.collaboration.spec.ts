const should = require('should');
const td = require('testdouble');
const {replace, when, verify, reset, config} = td;

describe('erase', () => {
  afterEach(() => {
    reset();
  });

  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`collaborates with fetch, navigate and combiner`, () => {
    const EraseFetchService = require('./fetch/fetch.service').EraseFetchService;
    const service = new EraseFetchService();
    replace(service, 'fetch');

    const NavigatorService = require('../../navigate/navigator.service').NavigatorService;
    const navigator = new NavigatorService();
    replace(navigator, 'payload');

    const detailsTransformer = require('./transform-details');
    replace(detailsTransformer, 'transformDetails');

    const requestId = 'dummy request id';
    const details = {dummy: 'details'};
    const payload = {requestId: requestId};
    const requestorDetails = [{dummy: 'requestor details'}];

    when(navigator.payload()).thenReturn(payload);
    when(service.fetch(requestId)).thenResolve(details);
    when(detailsTransformer.transformDetails(details)).thenReturn(requestorDetails);

    const EraseComponent = require('./erase.component.ts').EraseComponent;
    const erase = new EraseComponent(service, navigator);

    return erase.ngOnInit().then(() => {
      erase.details.should.deepEqual(requestorDetails);
    });
  });
});

export {};


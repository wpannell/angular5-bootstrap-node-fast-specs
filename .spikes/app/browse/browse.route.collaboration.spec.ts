require('should');
const td = require('testdouble');
const {replace, when, verify, reset} = td;

describe('browse', () => {
  afterEach(() => {
    reset();
  });

  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`collaborates with navigator`, () => {
    const NavigatorService = require('../../navigate/navigator.service').NavigatorService;
    const navigator = new NavigatorService();
    replace(navigator, 'goto');

    const eraseRequestType = 'ERASE';
    const dummyPayload = {requestId: 'some dummy ID' , type: eraseRequestType};
    const fakeFetchService = {};

    const BrowseComponent = require('./browse.component.ts').BrowseComponent;

    const browse = new BrowseComponent(fakeFetchService, navigator);
    browse.onRowClicked(dummyPayload);

    verify(navigator.goto(['/erase', 'some dummy ID'], dummyPayload));
  });
});

export {};


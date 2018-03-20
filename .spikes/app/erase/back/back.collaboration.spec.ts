const should = require('should');
const td = require('testdouble');
const {replace, verify, reset} = td;

describe('back', () => {
  afterEach(() => {
    reset();
  });

  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`collaborates with location`, () => {
    const LocationService = require('./location/location.service').LocationService;
    const locater = new LocationService();
    replace(locater, 'back');

    const BackComponent = require('./back.component.ts').BackComponent;

    const backButton = new BackComponent(locater);
    backButton.back();

    verify(locater.back());
  });
});

export {};


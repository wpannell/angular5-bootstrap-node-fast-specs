const td = require('testdouble');
const {replace, verify, reset} = td;

describe('interactions-button', () => {
  afterEach(() => {
    reset();
  });

  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`collaborates with modal and interactions`, () => {
     // arrange
     const ModalService = require('./modal/modal.service').ModalService;
     const modal = new ModalService();
     replace(modal, 'open');

     const InteractionsComponent = require('./interactions/interactions.component').InteractionsComponent;
     const interactions = new InteractionsComponent();

     const InteractionsButtonComponent = require('./interactions-button.component').InteractionsButtonComponent;
     const interactionsButton = new InteractionsButtonComponent(modal, interactions);

     // act
     interactionsButton.open();

     // assert
     verify(modal.open(interactions));
  });
});

export {};


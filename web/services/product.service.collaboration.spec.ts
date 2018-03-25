require('should');
const td = require('testdouble');
const {replace, when, reset} = td;

describe('service spec', () => {
  afterEach(() => {
    reset();
  });

  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`root component collaborates with service.fetch`, () => {
    const ProductFetchService = require('./product.service').ProductFetchService;
    const service = new ProductFetchService();
    replace(service, 'fetch');

    const fetchRequest = '/assets/data/products.json';
    const fetchResponse = {products: []};

    when(service.fetch(fetchRequest)).thenResolve(fetchResponse);

    const RootComponent = require('./root.component.ts').RootComponent;
    const rootComponent = new RootComponent(service);

    return rootComponent.ngOnInit().then((result) => {
      result.products.should.deepEqual([]);
    });
  });
});

export {};


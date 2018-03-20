import {getTestBed, TestBed} from '@angular/core/testing';
import {BrowseFetchService} from './fetch.service';
import {BrowseFetchModule} from './fetch.module';
import {MOCK_SERVER_PORT, environment} from '../../../environments/environment';

require('should');
const pact = require('pact');

const endpoint = '/requests';
const LOG_LEVEL = process.env.LOG_LEVEL || 'WARN';
process.env.API_HOST = environment.api;

const {term, somethingLike, eachLike} = pact.Matchers;

const responseSpecification = eachLike({
  requestId: somethingLike('018f4f7f07508a2f4a5f74ebef59eea2'),
  type: 'ERASE',
  firstName: somethingLike('Ima'),
  lastName: somethingLike('Tester'),
  created: somethingLike(1516912129312),
  lastUpdated: somethingLike(1517343846536),
  status: term({
    generate: 'IN_PROGRESS',
    matcher: 'APPROVED|PENDING_APPROVAL|IN_PROGRESS|COMPLETE|DECLINED'
  }),
  assignTo: somethingLike('gary'),
  cupid: somethingLike('25535577')
});

const responseCode200 = {
  state: 'has some requests',
  uponReceiving: 'a get request for erase requests',
  withRequest: {
    method: 'GET',
    path: endpoint,
    query: {
      'type': 'ERASE'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  },
  willRespondWith: {
    status: 200,
    body: responseSpecification
  }
};

let provider;
describe('Browse Fetch Service', () => {
  before(() => {
    provider = pact({
      consumer: 'Privacy Portal DPO',
      provider: 'GDPR Erase Requests',
      port: MOCK_SERVER_PORT,
      log: process.cwd() + '/contracts/logs/mockserver-integration.log',
      dir: process.cwd() + '/contracts/pacts',
      logLevel: LOG_LEVEL,
      cors: true,
      spec: 2
    });

    return provider.setup();
  });

  after(() => {
    return provider.finalize();
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [BrowseFetchModule]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  describe('fetches erase requests', () => {
    let service, requests, request;

    beforeEach(async function () {
      service = TestBed.get(BrowseFetchService);
      await provider.addInteraction(responseCode200);
      requests = await service.fetch('ERASE');
      request = requests[0];
    });

    afterEach(async function () {
      await provider.verify();
    });

    describe('with a 200 server response', () => {
      it('a list of erase requests', () => {
        requests.should.be.Array();
      });

      context('a single request contains a', () => {
        it('request ID', () => {
          request.requestId.should.equal('018f4f7f07508a2f4a5f74ebef59eea2');
        });

        it('type', () => {
          request.type.should.equal('ERASE');
        });

        it('first name', () => {
          request.firstName.should.equal('Ima');
        });

        it('last name', () => {
          request.lastName.should.equal('Tester');
        });

        it('create date stamp', () => {
          request.created.should.equal(1516912129312);
        });

        it('last updated date stamp', () => {
          request.lastUpdated.should.equal(1517343846536);
        });

        it('status', () => {
          request.status.should.equal('IN_PROGRESS');
        });

        it('assign to', () => {
          request.assignTo.should.equal('gary');
        });

        it('cupid', () => {
          request.cupid.should.equal('25535577');
        });
      });
    });
  });
});

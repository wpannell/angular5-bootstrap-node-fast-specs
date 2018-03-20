import {getTestBed, TestBed} from '@angular/core/testing';
import {EraseFetchService} from './fetch.service';
import {EraseFetchModule} from './fetch.module';
import {MOCK_SERVER_PORT} from '../../../environments/environment';

require('should');
const pact = require('pact');

const REQUEST_ID = '01234567890123456789012345678901';
const endpoint = `/requests/${REQUEST_ID}/details`;
const LOG_LEVEL = process.env.LOG_LEVEL || 'WARN';

const {term, somethingLike, eachLike} = pact.Matchers;

const responseSpecification = {
  requestId: somethingLike('018f4f7f07508a2f4a5f74ebef59eea2'),
  type: 'ERASE',
  firstName: somethingLike('Ima'),
  lastName: somethingLike('Tester'),
  created: somethingLike(1516912129312),
  status: term({
    generate: 'IN_PROGRESS',
    matcher: 'PENDING_APPROVAL|IN_PROGRESS|COMPLETE|DECLINED'
  }),
  assignTo: somethingLike('gary'),
  cupids: eachLike(
    term({
      generate: '0123456789',
      matcher: '^[0-9]{1,20}$'
    })
  ),
  history: eachLike({
    title: somethingLike('System Post'),
    createdBy: somethingLike('GaryMeech'),
    timestamp: somethingLike(1517515934159),
    message: somethingLike('Complete by GaryMeech'),
    isInternal: somethingLike(true)
  })
};

const responseCode200 = {
  state: 'has request details',
  uponReceiving: 'a get request for request details',
  withRequest: {
    method: 'GET',
    path: term({
      generate: endpoint,
      matcher: '/requests/[a-z0-9]{32}/details'
    }),
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
describe('Erase Request Service', () => {
  before(() => {
    provider = pact({
      consumer: 'Privacy Portal DPO',
      provider: 'GDPR Request Details',
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
      imports: [EraseFetchModule]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  describe('fetches erase details', () => {
    let service, details, cupid, history;

    beforeEach(async function () {
      service = TestBed.get(EraseFetchService);
      await provider.addInteraction(responseCode200);
      details = await service.fetch(REQUEST_ID);
      cupid = details.cupids[0];
      history = details.history[0];
    });

    afterEach(async function () {
      await provider.verify();
    });

    describe('with a 200 server response', () => {
      it('an object with erase details', () => {
        details.should.be.Object();
      });

      it('requestId', () => {
        details.requestId.should.equal('018f4f7f07508a2f4a5f74ebef59eea2');
      });

      it('type', () => {
        details.type.should.equal('ERASE');
      });

      it('firstName', () => {
        details.firstName.should.equal('Ima');
      });

      it('lastName', () => {
        details.lastName.should.equal('Tester');
      });

      it('created', () => {
        details.created.should.equal(1516912129312);
      });

      it('status', () => {
        details.status.should.equal('IN_PROGRESS');
      });

      it('assign to', () => {
        details.assignTo.should.equal('gary');
      });

      it('a list of cupids', () => {
        details.cupids.should.be.Array();
      });

      it('a list of histories', () => {
        details.history.should.be.Array();
      });

      describe('a single cupid contains', () => {
        it('a cupid', () => {
          cupid.should.equal('0123456789');
        });
      });

      describe('a single history contains', () => {
        it('title', () => {
          history.title.should.equal('System Post');
        });

        it('createdBy', () => {
          history.createdBy.should.equal('GaryMeech');
        });

        it('timestamp', () => {
          history.timestamp.should.equal(1517515934159);
        });

        it('message', () => {
          history.message.should.equal('Complete by GaryMeech');
        });

        it('an internal flag', () => {
          history.isInternal.should.be.true();
        });
      });
    });
  });
});

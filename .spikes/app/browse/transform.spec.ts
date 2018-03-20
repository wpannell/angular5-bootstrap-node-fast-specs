import * as moment from 'moment';
import {transform} from './transform';
import * as timekeeper from 'timekeeper';
import * as R from 'ramda';

require('should');

const {clone} = R;

const requests = [{
  'requestId': '0106ef8273320eb372de1afaf304a89b',
  'created': 1518469544938,
  'status': 'DECLINED',
  'cupid': 16489523,
  'assignTo': 'gary',
  'type': 'ERASE',
  'lastUpdated': 1518469544938,
  'firstName': 'Bill',
  'lastName': 'Smith'
}];

const expectedDate = moment(new Date('02-12-18')).format('MM-DD-YY');
describe('grid results transform', () => {
  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`converts 'Last Update' to 'MM-DD-YY'`, () => {
    transform(clone(requests)).map((request) => {
      request.lastUpdated.should.equal(expectedDate);
    });
  });

  it(`converts 'Created' to 'MM-DD-YY'`, () => {
    transform(clone(requests)).map((request) => {
      request.created.should.equal(expectedDate);
    });
  });

  it(`makes 'Age' from 'Created'`, () => {
    transform(clone(requests)).map((request) => {
      request.age.should.equal(8);
    });
  });

  before(() => {
    timekeeper.freeze(new Date('02-21-18'));
  });

  after(() => {
    timekeeper.reset();
  });
});



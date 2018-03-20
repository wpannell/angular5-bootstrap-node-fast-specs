import * as moment from 'moment';
import {transform} from './transform';
import * as timekeeper from 'timekeeper';
import * as R from 'ramda';

require('should');

const {clone} = R;

const histories = [{
  'title': 'Request Submitted',
  'createdBy': 'tatiana',
  'timestamp': 157515934159,
  'message': 'Complete by eswar and marcella',
  'isInternal': true
}, {
  'title': 'System Post',
  'createdBy': 'marcella',
  'timestamp': 1510515934159,
  'message': 'Complete by eswar and marcella',
  'isInternal': true
}];

const expectedOrderedHistory = [{
  'title': 'System Post',
  'createdBy': 'marcella',
  'timestamp': moment(new Date(1510515934159)).format('hh:mm DD MMMM YYYY'),
  'message': 'Complete by eswar and marcella',
  'isInternal': true},
  {
  'title': 'Request Submitted',
  'createdBy': 'tatiana',
  'timestamp': moment(new Date(157515934159)).format('hh:mm DD MMMM YYYY'),
  'message': 'Complete by eswar and marcella',
  'isInternal': true
}];

const expectedHistory = [ {
  'title': 'System Post',
  'createdBy': 'marcella',
  'timestamp': moment(new Date(1510515934159)).format('hh:mm DD MMMM YYYY'),
  'message': 'Complete by eswar and marcella',
  'isInternal': true},
  {
    'title': 'Request Submitted',
    'createdBy': 'tatiana',
    'timestamp': moment(new Date(157515934159)).format('hh:mm DD MMMM YYYY'),
    'message': 'Complete by eswar and marcella',
    'isInternal': true
  }
];

describe(`history transform`, () => {
  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`gives the timestamp in 'hh:mm DD MMMM YYYY' format`, () => {
    transform(clone(histories)).should.deepEqual(expectedHistory);
  });

  it(`gives later timestamp first`, () => {
    const transformedHistories = transform(clone(histories));
    transformedHistories.should.deepEqual(expectedOrderedHistory);
  });

  before(() => {
    timekeeper.freeze(new Date('02-21-18'));
  });

  after(() => {
    timekeeper.reset();
  });
});



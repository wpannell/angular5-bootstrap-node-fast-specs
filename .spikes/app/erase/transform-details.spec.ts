import * as R from 'ramda';
import * as timekeeper from 'timekeeper';
import {transformDetails} from './transform-details';
import * as moment from 'moment';

require('should');

const {clone} = R;

const details = {
  'requestId': '0106ef8273320eb372de1afaf304a89b',
  'firstName' : 'Bill',
  'lastName' : 'Smith',
  'created' : 157515934159,
  'status': 'IN_PROGRESS',
  'assignTo': 'giselle',
  'cupids': ['0123456789', '012345679', '01234789', '0789', '056789', '09', '0', '01', '0123', '456789'],
  'history': [{
    'title': 'System Post',
    'createdBy': 'giselle',
    'timestamp': 15159,
    'message': 'Complete by eswar and marcella',
    'isInternal': true
  }, {
    'title': 'Request Submitted',
    'createdBy': 'tatiana',
    'timestamp': 157515934159,
    'message': 'Complete by eswar and marcella',
    'isInternal': true
  }]
};
const details_emptyAssignTo = {
  'id': '0106ef8273320eb372de1afaf304a89b',
  'requestId': '0106ef8273320eb372de1afaf304a89b',
  'status': 'IN_PROGRESS',
  'assignTo': '',
  'cupids': [],
  'history': []
};

const expectedRequestorDetails = {
  'requestId': '0106ef8273320eb372de1afaf304a89b',
  'firstName': 'Bill',
  'lastName': 'Smith',
  'created': moment(157515934159).format('MM-DD-YY'),
  'status': 'IN_PROGRESS',
  'assignTo': 'giselle',
  'cupids': [
    '0123456789',
    '012345679',
    '01234789',
    '0789',
    '056789',
    '09',
    '0',
    '01',
    '0123',
    '456789'
  ],
  'head': ['0123456789'],
  'tail': [
      '012345679',
      '01234789',
      '0789',
      '056789',
      '09',
      '0',
      '01',
      '0123',
      '456789'
    ],
  'history': [{
    'title': 'Request Submitted',
    'createdBy': 'tatiana',
    'timestamp': moment(new Date(157515934159)).format('hh:mm DD MMMM YYYY'),
    'message': 'Complete by eswar and marcella',
    'isInternal': true
  }, {
    'title': 'System Post',
    'createdBy': 'giselle',
    'timestamp': moment(new Date(15159)).format('hh:mm DD MMMM YYYY'),
    'message': 'Complete by eswar and marcella',
    'isInternal': true
  }]
};

describe('transform-details', () => {
  it(`has a passing canary test`, () => {
    true.should.be.true(`something's bugging the automated test infrastructure`);
  });

  it(`builds the requestor details`, () => {
    transformDetails(clone(details)).should.deepEqual(expectedRequestorDetails);
  });

  it(`set default value to assignTo if it is empty` , () => {
    const assignTo = transformDetails(clone(details_emptyAssignTo)).assignTo;
    assignTo.should.equal('unassigned');
  });

  before(() => {
    timekeeper.freeze(new Date(15159));
  });

  after(() => {
    timekeeper.reset();
  });
});

import * as moment from 'moment';

const daysFromNow = (secondsFromEpoch) =>  moment().diff(moment(secondsFromEpoch), 'days');
const formatDate = (secondsFromEpoch) =>  moment(secondsFromEpoch).format('MM-DD-YY');

function transform (requests) {
  return requests.map((request) => {
    request.age = daysFromNow(request.created);
    request.lastUpdated = formatDate(request.lastUpdated);
    request.created = formatDate(request.created);
    return request;
  });
}

export {transform};


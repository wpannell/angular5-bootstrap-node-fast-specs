import * as moment from 'moment';

const formatDate = (secondsFromEpoch) =>  moment(secondsFromEpoch).format('hh:mm DD MMMM YYYY');

function transform (histories) {
  histories.sort((a, b) => {
    if (a.timestamp < b.timestamp) {
      return 1;
    }

    if (a.timestamp > b.timestamp) {
      return -1;
    }
    return 0;
  });

  return histories.map((history) => {
    history.timestamp = formatDate(history.timestamp);
    return history;
  });
}

export {transform};


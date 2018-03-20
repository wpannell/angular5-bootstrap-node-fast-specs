import {transform} from './transform';
import * as moment from 'moment';
const formatDate = (secondsFromEpoch) =>  moment(secondsFromEpoch).format('MM-DD-YY');

function transformDetails(detail: any): any {
  if (detail.assignTo === '') {
    detail.assignTo = 'unassigned';
  }
  return {
    requestId: detail.requestId,
    firstName: detail.firstName,
    lastName: detail.lastName,
    status: detail.status,
    assignTo: detail.assignTo,
    cupids: detail.cupids,
    head: detail.cupids.slice(0, 1),
    tail: detail.cupids.slice(1),
    created: formatDate(detail.created),
    history: transform(detail.history)
  };
}

export {transformDetails};

import {categorize} from './categorize';
import {fetch} from './fetch';
import {email} from './email';

export const unusualSpending = (id) => {

  return fetch(id).then((payments) => {
    const categorizedPayments = categorize(payments);
    email(id, categorizedPayments);

  }).catch((error) => {
    throw new Error('problem with fetch ' + error.message);
  });

};

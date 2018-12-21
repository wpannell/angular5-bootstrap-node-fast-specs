import {categorize} from './categorize';
import {fetch} from './fetch';
import {email} from './email';

export const unusualSpending = userId => {
  return fetch(userId).then((payments) => {
    const categorizedPayments = categorize(payments);
    email(userId, categorizedPayments);
  }).catch((err) => {
    throw new Error('problem with fetch: ' + err.message);
  });
};

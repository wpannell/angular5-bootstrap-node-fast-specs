import {categorize} from './categorize';
import {email} from './email';
import {fetch} from './fetch';

export const unusualSpending = userId => {
  return fetch(userId).then(payments => {
    const categorizedPayments = categorize(payments);
    email(userId, categorizedPayments);
  });
};

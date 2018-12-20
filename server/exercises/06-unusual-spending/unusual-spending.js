import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = (userId) => {
  let payments = fetch(userId);
  let categorizedPayments = categorize(payments);
  email(userId, categorizedPayments);
};

export {unusualSpending};

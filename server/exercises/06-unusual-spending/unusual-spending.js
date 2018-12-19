import {fetch} from './fetch';
import {email} from './email';
import {categorize} from './categorize';

export const unusualSpending = userId => {
  const payments = fetch(userId);
  const categorizedPayments = categorize(payments);
  email(userId, categorizedPayments);
};

import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

export const unusualSpending = userId => {
  const payments = fetch(userId);
  const categorizedPayments = categorize(payments);
  email(userId, categorizedPayments);
};

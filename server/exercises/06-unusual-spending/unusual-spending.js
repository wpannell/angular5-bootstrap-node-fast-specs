import {categorize} from './categorize';
import {fetch} from './fetch';
import {email} from './email';

export const unusualSpending = (id) => {

  const payments = fetch(id);
  const categorizedPayments = categorize(payments);
  email(id, categorizedPayments);

};

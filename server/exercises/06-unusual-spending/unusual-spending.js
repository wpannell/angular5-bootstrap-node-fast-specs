import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = (userId) => {
  email(userId, categorize(fetch(userId)));
};
export {unusualSpending};

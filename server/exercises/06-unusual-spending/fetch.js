import {months} from './months';
import {api} from './api';

const fetch = (userId) => {
  let priorMonth = months.prior();
  let currentMonth = months.current();

  let priorMonthPayments = api(userId, priorMonth);
  let currentMonthPayments = api(userId, currentMonth);

  return [priorMonthPayments, currentMonthPayments];
};

export {fetch};

import {months} from './months';
import {api} from './api';

const fetch = userId => {
  const priorMonth = months.prior();
  const currentMonth = months.current();

  const priorMonthPayments = api(userId, priorMonth);
  const currentMonthPayments = api(userId, currentMonth);

  return [currentMonthPayments, priorMonthPayments];
};

export {fetch};

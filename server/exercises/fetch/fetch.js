import {months} from './months';
import {api} from './api';

export const fetch = (id) => {

  const currentMonth = months.current();
  const priorMonth = months.prior();
  const currentMonthsPayments = api(id, currentMonth);
  const priorMonthPayments = api(id, priorMonth);

  return [currentMonthsPayments, priorMonthPayments];
};

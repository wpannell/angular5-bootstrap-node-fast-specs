import {months} from './months';
import {api} from './api';

const fetch = userId => {
  const priorMonth = months.prior();
  const currentMonth = months.current();

  const priorPayments = api(userId, priorMonth);
  const currentPayments = api(userId, currentMonth);

  const priorMonthPayments = {
    month: priorMonth,
    payments: priorPayments
  };

  const currentMonthPayments = {
    month: currentMonth,
    payments: currentPayments
  };

  return [currentMonthPayments, priorMonthPayments];
};

export {fetch};

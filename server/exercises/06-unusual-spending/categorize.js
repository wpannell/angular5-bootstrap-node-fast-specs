const calculateCategorizedPayments = payments => {
  let categorizedPayments = [];

  payments.forEach(payment => {
    if (categorizedPayments.length > 0 && payment.category === categorizedPayments[categorizedPayments.length - 1].category) {
      categorizedPayments[categorizedPayments.length - 1].amount += payment.amount;
    } else {
      categorizedPayments.push(payment);
    }
  });

  return categorizedPayments;
};

export const categorize = payments => {
  let categorizedPayments = [];

  payments.forEach(payment => {
    let categorizedPayment = {};

    categorizedPayment = {
      month: payment.month,
      payments: calculateCategorizedPayments(payment.payments)
    };

    categorizedPayments.push(categorizedPayment);
  });

  return categorizedPayments;
};

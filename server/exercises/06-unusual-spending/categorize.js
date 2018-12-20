const calculateCategorizedPayments = payments => {
  let categorizedPayments = [];

  payments.sort((payment1, payment2) => {
    return payment1.category > payment2.category;
  });

  payments.forEach(payment => {
    const lastPaymentIndex = categorizedPayments.length - 1;

    if (categorizedPayments.length > 0 && payment.category === categorizedPayments[lastPaymentIndex].category) {
      categorizedPayments[lastPaymentIndex].amount += payment.amount;
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

const categorize = ([priorMonthPayments, currentMonthPayments]) => {


    function categorizePayments(payments) {
      let categorizedPayments = [];

      payments.forEach(payment => {

        if (!categorizedPayments[payment.category]) {
          categorizedPayments[payment.category] = payment;
        } else {
          categorizedPayments[payment.category].amount += payment.amount;
        }
      });
      let categorizedPaymentsArray = [];
      let keySet = Object.keys(categorizedPayments);
      keySet.forEach(key =>
        categorizedPaymentsArray.push(categorizedPayments[key])
      );
      return categorizedPaymentsArray;
    }

    const categorizedPriorMonthPayments = categorizePayments(priorMonthPayments);

    const categorizedCurrentMonthPayments = categorizePayments(currentMonthPayments);
    return [categorizedPriorMonthPayments, categorizedCurrentMonthPayments];

  }
;

export {categorize};

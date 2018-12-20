export const categorize = payments => {
  return [{
    month: {
      month: 12,
      year: 2018
    },
    payments: [{
      amount: 50,
      category: 'coffee'
    }, {
      amount: 120,
      category: 'grocery'
    }]
  }, {
    month: {
      month: 11,
      year: 2018
    },
    payments: [{
      amount: 130,
      category: 'cable'
    }]
  }
  ];
};

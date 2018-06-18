let makeRentalFrom = (movie, daysRented) => {

  return {
    get movie() { return movie; },
    get daysRented() { return daysRented; }
  };
};

module.exports = {makeRentalFrom};

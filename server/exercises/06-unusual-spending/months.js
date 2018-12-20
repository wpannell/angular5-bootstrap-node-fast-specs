const months = {
  prior: (date = new Date()) => {
    let month = date.getMonth();
    let year = date.getFullYear();
    year = month === 0 ? year - 1 : year;
    month = month === 0 ? 12 : month;
    return {month: month, year: year};
  },
  current: (date = new Date()) => {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return {month: month, year: year};
  }
};

export {months};

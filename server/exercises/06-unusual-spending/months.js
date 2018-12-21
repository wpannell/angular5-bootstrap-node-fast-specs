export const months = {
  prior: () => {},

  current: (date = new Date()) => {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return {
      month: month,
      year: year
    };
  }
};

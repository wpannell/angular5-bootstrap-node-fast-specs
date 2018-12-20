export const months = {
  current: (date = new Date()) => {
    return {
      month: date.getMonth() + 1,
      year: date.getFullYear()
    };
  },
  prior: (date = new Date()) => {
    return {
      month: date.getMonth(),
      year: date.getFullYear()
    };
  }
};

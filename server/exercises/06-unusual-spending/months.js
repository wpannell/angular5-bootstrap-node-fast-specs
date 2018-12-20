const today = new Date();

const months = {
  prior: () => {
    return {
      month: today.getMonth(),
      year: today.getFullYear()
    };
  },
  current: () => {
    return {
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
  }
};

export {months};

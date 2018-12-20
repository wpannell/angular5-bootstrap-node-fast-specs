const today = new Date();

const months = {
  prior: () => {},
  current: () => {
    return {
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
  }
};

export {months};

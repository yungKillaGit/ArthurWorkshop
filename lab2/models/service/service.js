const buildMakeService = (serviceValidator) => ({ name, price, description } = {}) => {
  const error = serviceValidator({ name, price, description });
  if (error !== undefined) {
    throw new Error(error);
  }
  return {
    getName: () => name,
    getPrice: () => price,
    getDescription: () => description,
  };
};

module.exports = buildMakeService;

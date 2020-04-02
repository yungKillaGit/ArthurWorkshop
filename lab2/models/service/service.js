const errorHandler = require('../../error-handler')();

const buildMakeService = (serviceValidator) => ({ name, price, description } = {}) => {
  const error = serviceValidator({ name, price, description });
  if (error !== undefined) {
    return errorHandler.getValidationError(error);
  }
  return {
    getName: () => name,
    getPrice: () => price,
    getDescription: () => description,
  };
};

module.exports = buildMakeService;

module.exports = ({ validator, errorHandler }) => ({ name, price, description } = {}) => {
  const serviceValidator = validator.makeServiceValidator();
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

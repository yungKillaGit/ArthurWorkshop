module.exports = ({ validator, errorHandler }) => ({ client, services } = {}) => {
  const requestValidator = validator.makeRequestValidator();
  const error = requestValidator({ client, services });
  if (error !== undefined) {
    return errorHandler.getValidationError(error);
  }
  return {
    getClient: () => client,
    getServices: () => services,
  };
};

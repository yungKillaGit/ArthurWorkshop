const errorHandler = require('../../error-handler')();

const buildMakeRequest = (requestValidator) => ({ client, services } = {}) => {
  const error = requestValidator({ client, services });
  if (error !== undefined) {
    return errorHandler.getValidationError(error);
  }
  return {
    getClient: () => client,
    getServices: () => services,
  };
};

module.exports = buildMakeRequest;

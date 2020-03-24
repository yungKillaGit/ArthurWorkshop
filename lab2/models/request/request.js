const buildMakeRequest = (requestValidator) => ({ client, services } = {}) => {
  const error = requestValidator({ client, services });
  if (error !== undefined) {
    throw new Error(error);
  }
  return {
    getClient: () => client,
    getServices: () => services,
  };
};

module.exports = buildMakeRequest;

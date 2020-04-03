const RequestsDB = ({
  Request, makeRequest, mapper, errorHandler, clientsDB, servicesDB,
}) => ({
  getRequests: async () => Request
    .find({})
    .populate('client services')
    .then((response) => ({ status: 200, data: mapper.mapRequests(response) })),

  getRequest: async (id) => {
    const validationResult = errorHandler.checkIfIdIsValid(id);
    if (validationResult instanceof Error) {
      throw validationResult;
    }
    return Request
      .findById(id)
      .populate('client services')
      .then((response) => {
        if (response === null) {
          throw errorHandler.getNotFoundError('request not found');
        }
        return { status: 200, data: mapper.mapRequests(response) };
      });
  },

  addRequest: async (requestInfo) => {
    const request = makeRequest(requestInfo);
    if (request instanceof Error) {
      throw request;
    }
    const newRequest = {
      client: request.getClient(),
      services: request.getServices(),
    };
    const client = await clientsDB.getClient('id', newRequest.client);
    if (client instanceof Error) {
      throw client;
    }
    const servicesValidationResult = await servicesDB.checkIfServicesExist(newRequest.services);
    if (!servicesValidationResult.areServicesExist) {
      const errorMessage = `service with id ${servicesValidationResult.nonExistingService} not found`;
      throw errorHandler.getNotFoundError(errorMessage);
    }
    return Request
      .create(newRequest)
      .then((response) => {
        const populatedRequest = response.populate('client services').execPopulate();
        return populatedRequest.then((doc) => ({ status: 201, data: mapper.mapRequests(doc) }));
      });
  },

  deleteRequest: async (id) => {
    const validationResult = errorHandler.checkIfIdIsValid(id);
    if (validationResult instanceof Error) {
      throw validationResult;
    }
    return Request
      .findByIdAndDelete(id)
      .then((response) => {
        if (response === null) {
          throw errorHandler.getNotFoundError('request not found');
        }
        return { status: 200, data: response._id };
      });
  },

  updateRequest: async (id, requestInfo) => {
    const validationResult = errorHandler.checkIfIdIsValid(id);
    if (validationResult instanceof Error) {
      throw validationResult;
    }
    return Request
      .findById(id)
      .then((response) => {
        if (response === null) {
          throw errorHandler.getNotFoundError('request not found');
        }
        const request = makeRequest({ ...response._doc, ...requestInfo });
        if (request instanceof Error) {
          throw request;
        }
        const newRequest = {
          client: request.getClient(),
          services: request.getServices(),
        };
        return Request
          .findByIdAndUpdate(id, newRequest, { new: true })
          .populate('client services')
          .then((data) => ({ status: 200, data: mapper.mapRequests(data) }));
      });
  },
});

module.exports = RequestsDB;

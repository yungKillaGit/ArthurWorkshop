const ClientsDB = ({
  Client, makeClient, mapper, errorHandler,
}) => ({
  getClients: async () => Client
    .find({})
    .then((response) => ({ status: 200, data: mapper.mapClients(response) })),

  getClient: async (property, value) => {
    if (property === 'id') {
      property = '_id';
      const validationResult = errorHandler.checkIfIdIsValid(value);
      if (validationResult instanceof Error) {
        throw validationResult;
      }
    }
    return Client
      .find({ [property]: value })
      .then((response) => {
        // Check if response is empty array.
        if (!(Array.isArray(response) && response.length)) {
          throw errorHandler.getNotFoundError('client not found');
        }
        return { status: 200, data: mapper.mapClients(response[0]) };
      });
  },

  addClient: async (clientInfo) => {
    const client = makeClient(clientInfo);
    if (client instanceof Error) {
      throw client;
    }
    const newClient = {
      fullName: client.getFullName(),
      age: client.getAge(),
      city: client.getCity(),
      phoneNumber: client.getPhoneNumber(),
    };
    return Client
      .create(newClient)
      .then((response) => ({ status: 201, data: mapper.mapClients(response) }));
  },

  deleteClient: async (id) => {
    const validationResult = errorHandler.checkIfIdIsValid(id);
    if (validationResult instanceof Error) {
      throw validationResult;
    }
    return Client
      .findByIdAndDelete(id)
      .then((response) => {
        if (!response) {
          throw errorHandler.getNotFoundError('client not found');
        }
        return { status: 200, data: response._id };
      });
  },

  updateClient: async (id, clientInfo) => {
    const validationResult = errorHandler.checkIfIdIsValid(id);
    if (validationResult instanceof Error) {
      throw validationResult;
    }
    return Client
      .findById(id)
      .then((response) => {
        if (!response) {
          throw errorHandler.getNotFoundError('client not found');
        }
        const client = makeClient({ ...response._doc, ...clientInfo });
        if (client instanceof Error) {
          throw client;
        }
        const newClient = {
          fullName: client.getFullName(),
          age: client.getAge(),
          city: client.getCity(),
          phoneNumber: client.getPhoneNumber(),
        };
        return Client
          .findByIdAndUpdate(id, newClient, { new: true })
          .then((data) => ({ status: 200, data: mapper.mapClients(data) }));
      });
  },
});

module.exports = ClientsDB;

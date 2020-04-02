const Client = require('../../../db/mongodb/models/client');
const makeClient = require('../../../models/client');
const map = require('../../mapper')(require('./mapping'));
const errorHandler = require('../../../error-handler')();

const getClients = async () => Client
  .find({})
  .then((response) => ({ status: 200, data: map(response) }));

const getClient = async (property, value) => {
  if (property === 'id') {
    property = '_id';
    const validationResult = errorHandler.checkIfIdIsValid(value);
    if (validationResult instanceof Error) {
      throw validationResult;
    }
  }
  console.log(`client id in function getClient ${value}`);
  return Client
    .find({ [property]: value })
    .then((response) => {
      // Check if response is empty array.
      if (!(Array.isArray(response) && response.length)) {
        throw errorHandler.getNotFoundError('client not found');
      }
      return { status: 200, data: map(response[0]) };
    });
};

const addClient = async (clientInfo) => {
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
    .then((response) => ({ status: 201, data: map(response) }));
};

const deleteClient = async (id) => {
  const validationResult = errorHandler.checkIfIdIsValid(id);
  if (validationResult instanceof Error) {
    throw validationResult;
  }
  return Client
    .findByIdAndDelete(id)
    .then((response) => {
      if (response === null) {
        throw errorHandler.getNotFoundError('client not found');
      }
      return { status: 200, data: response._id };
    });
};

const updateClient = async (id, clientInfo) => {
  const validationResult = errorHandler.checkIfIdIsValid(id);
  if (validationResult instanceof Error) {
    throw validationResult;
  }
  return Client
    .findById(id)
    .then((response) => {
      if (response === null) {
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
        .then((data) => ({ status: 200, data: map(data) }));
    });
};

module.exports = {
  getClient,
  getClients,
  addClient,
  deleteClient,
  updateClient,
};

const Client = require('../../../db/mongodb/models/client');
const makeClient = require('../../../models/client');
const map = require('../../mapper')(require('./mapping'));

const getClients = () => Client
  .find({})
  .then(map)
  .catch((error) => ({
    status: 'fail',
    error: error.message,
  }));

const getClient = (property, value) => {
  if (property === 'id') {
    property = '_id';
  }
  return Client
    .find({ [property]: value })
    .then((response) => map(response[0]))
    .catch((error) => ({
      status: 'fail',
      error: error.message,
    }));
};

const addClient = (clientInfo) => {
  const client = makeClient(clientInfo);
  const newClient = {
    fullName: client.getFullName(),
    age: client.getAge(),
    city: client.getCity(),
    phoneNumber: client.getPhoneNumber(),
  };
  return Client
    .create(newClient)
    .then(map)
    .catch((error) => ({
      status: 'fail',
      error: error.message,
    }));
};

const deleteClient = (id) => Client
  .findByIdAndDelete(id)
  .then((response) => ({
    id: response._id,
    status: 'success',
  }))
  .catch((error) => ({
    status: 'fail',
    error: error.message,
  }));

const updateClient = (id, clientInfo) => Client
  .findById(id)
  .then((response) => {
    const client = makeClient({ ...response._doc, ...clientInfo });
    const newClient = {
      fullName: client.getFullName(),
      age: client.getAge(),
      city: client.getCity(),
      phoneNumber: client.getPhoneNumber(),
    };
    return Client
      .findByIdAndUpdate(id, newClient, { new: true })
      .then(map)
      .catch((error) => ({
        status: 'fail',
        error: error.message,
      }));
  });

module.exports = {
  getClient,
  getClients,
  addClient,
  deleteClient,
  updateClient,
};

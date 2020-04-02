const {
  getClient,
  getClients,
  addClient,
  deleteClient,
  updateClient,
} = require('./mongod');

const clientsDB = {
  getClient,
  getClients,
  addClient,
  deleteClient,
  updateClient,
};

module.exports = clientsDB;

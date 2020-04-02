const {
  getService,
  getServices,
  addService,
  deleteService,
  updateService,
  checkIfServicesExist,
} = require('./mongod');

const servicesDB = {
  getService,
  getServices,
  addService,
  deleteService,
  updateService,
  checkIfServicesExist,
};

module.exports = servicesDB;

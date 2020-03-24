const {
  getService,
  getServices,
  addService,
  deleteService,
  updateService,
} = require('./mongod');

const servicesDB = {
  getService,
  getServices,
  addService,
  deleteService,
  updateService,
};

module.exports = servicesDB;

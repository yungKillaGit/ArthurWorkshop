const {
  getRequest,
  getRequests,
  addRequest,
  deleteRequest,
  updateRequest,
} = require('./mongod');

const requestsDB = {
  getRequest,
  getRequests,
  addRequest,
  deleteRequest,
  updateRequest,
};

module.exports = requestsDB;

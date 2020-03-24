const Request = require('../../../db/mongodb/models/request');
const makeRequest = require('../../../models/request');
const map = require('../../mapper')(require('./mapping'));

const getRequests = () => Request
  .find({})
  .populate('client services')
  .then(map)
  .catch((error) => ({
    status: 'fail',
    error: error.message,
  }));

const getRequest = (id) => Request
  .findById(id)
  .populate('client services')
  .then(map)
  .catch((error) => ({
    status: 'fail',
    error: error.message,
  }));

const addRequest = (requestInfo) => {
  const request = makeRequest(requestInfo);
  const newRequest = {
    client: request.getClient(),
    services: request.getServices(),
  };
  return Request
    .create(newRequest)
    .then(map)
    .catch((error) => ({
      status: 'fail',
      error: error.message,
    }));
};

const deleteRequest = (id) => Request
  .findByIdAndDelete(id)
  .then((response) => ({
    id: response._id,
    status: 'success',
  }))
  .catch((error) => ({
    status: 'fail',
    error: error.message,
  }));

const updateRequest = (id, requestInfo) => Request
  .findById(id)
  .then((response) => {
    const request = makeRequest({ ...response._doc, ...requestInfo });
    const newRequest = {
      client: request.getClient(),
      services: request.getServices(),
    };
    return Request
      .findByIdAndUpdate(id, newRequest, { new: true })
      .populate('client services')
      .then(map)
      .catch((error) => ({
        status: 'fail',
        error: error.message,
      }));
  });

module.exports = {
  getRequest,
  getRequests,
  addRequest,
  deleteRequest,
  updateRequest,
};

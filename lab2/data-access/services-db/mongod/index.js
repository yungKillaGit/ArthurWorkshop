const Service = require('../../../db/mongodb/models/service');
const makeService = require('../../../models/service');
const map = require('../../mapper')(require('./mapping'));

const getServices = () => Service
  .find({})
  .then(map)
  .catch((error) => ({
    status: 'fail',
    error: error.message,
  }));

const getService = (property, value) => {
  if (property === 'id') {
    property = '_id';
  }
  return Service
    .find({ [property]: value })
    .then((response) => map(response[0]))
    .catch((error) => ({
      status: 'fail',
      error: error.message,
    }));
};

const addService = (serviceInfo) => {
  const service = makeService(serviceInfo);
  const newService = {
    name: service.getName(),
    price: service.getPrice(),
    description: service.getDescription(),
  };
  return Service
    .create(newService)
    .then(map)
    .catch((error) => ({
      status: 'fail',
      error: error.message,
    }));
};

const deleteService = (id) => Service
  .findByIdAndDelete(id)
  .then((response) => ({
    id: response._id,
    status: 'success',
  }))
  .catch((error) => ({
    status: 'fail',
    error: error.message,
  }));

const updateService = (id, serviceInfo) => Service
  .findById(id)
  .then((response) => {
    const service = makeService({ ...response._doc, ...serviceInfo });
    const newService = {
      name: service.getName(),
      price: service.getPrice(),
      description: service.getDescription(),
    };
    return Service
      .findByIdAndUpdate(id, newService, { new: true })
      .then(map)
      .catch((error) => ({
        status: 'fail',
        error: error.message,
      }));
  });

module.exports = {
  getService,
  getServices,
  addService,
  deleteService,
  updateService,
};

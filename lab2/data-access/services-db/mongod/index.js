const Service = require('../../../db/mongodb/models/service');
const makeService = require('../../../models/service');
const map = require('../../mapper')(require('./mapping'));
const errorHandler = require('../../../error-handler')();

const getServices = async (selectOptions) => (selectOptions === undefined
  ? Service
    .find({})
    .then((response) => ({ status: 200, data: map(response) }))
  : Service
    .find({})
    .select(selectOptions)
    .then((response) => ({ status: 200, data: map(response) })));

const getService = async (property, value) => {
  if (property === 'id') {
    property = '_id';
    const validationResult = errorHandler.checkIfIdIsValid(value);
    if (validationResult instanceof Error) {
      throw validationResult;
    }
  }
  return Service
    .find({ [property]: value })
    .then((response) => {
      // Check if response is empty array.
      if (!(Array.isArray(response) && response.length)) {
        throw errorHandler.getNotFoundError('service not found');
      }
      return { status: 200, data: map(response[0]) };
    });
};

const addService = async (serviceInfo) => {
  const service = makeService(serviceInfo);
  if (service instanceof Error) {
    throw service;
  }
  const newService = {
    name: service.getName(),
    price: service.getPrice(),
    description: service.getDescription(),
  };
  return Service
    .create(newService)
    .then((response) => ({ status: 201, data: map(response) }));
};

const deleteService = async (id) => {
  const validationResult = errorHandler.checkIfIdIsValid(id);
  if (validationResult instanceof Error) {
    throw validationResult;
  }
  return Service
    .findByIdAndDelete(id)
    .then((response) => {
      if (response === null) {
        throw errorHandler.getNotFoundError('service not found');
      }
      return { status: 200, data: response._id };
    });
};

const updateService = async (id, serviceInfo) => {
  const validationResult = errorHandler.checkIfIdIsValid(id);
  if (validationResult instanceof Error) {
    throw validationResult;
  }
  return Service
    .findById(id)
    .then((response) => {
      if (response === null) {
        throw errorHandler.getNotFoundError('service not found');
      }
      const service = makeService({ ...response._doc, ...serviceInfo });
      if (service instanceof Error) {
        throw service;
      }
      const newService = {
        name: service.getName(),
        price: service.getPrice(),
        description: service.getDescription(),
      };
      return Service
        .findByIdAndUpdate(id, newService, { new: true })
        .then((data) => ({ status: 200, data: map(data) }));
    });
};

const checkIfServicesExist = async (services) => {
  const allServiceIds = await Service.find({}).select('_id');
  let nonExistingService;
  const areServicesExist = services.every((e) => {
    if (!allServiceIds.includes(e)) {
      nonExistingService = e;
      return false;
    }
    return true;
  });
  return {
    areServicesExist,
    nonExistingService,
  };
};

module.exports = {
  getService,
  getServices,
  addService,
  deleteService,
  updateService,
  checkIfServicesExist,
};

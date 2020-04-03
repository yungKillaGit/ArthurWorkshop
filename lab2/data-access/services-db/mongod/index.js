const ServicesDB = ({
  Service, makeService, mapper, errorHandler,
}) => ({
  getServices: async () => Service
    .find({})
    .then((response) => ({ status: 200, data: mapper.mapServices(response) })),

  getService: async (property, value) => {
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
        return { status: 200, data: mapper.mapServices(response[0]) };
      });
  },

  addService: async (serviceInfo) => {
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
      .then((response) => ({ status: 201, data: mapper.mapServices(response) }));
  },

  deleteService: async (id) => {
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
  },

  updateService: async (id, serviceInfo) => {
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
          .then((data) => ({ status: 200, data: mapper.mapServices(data) }));
      });
  },

  checkIfServicesExist: async (services) => {
    let allServiceIds = await Service
      .find({})
      .select('_id');
    allServiceIds = allServiceIds.map((x) => `${x._id}`);
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
  },
});

module.exports = ServicesDB;

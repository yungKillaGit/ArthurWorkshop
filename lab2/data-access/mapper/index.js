const mapper = () => ({
  map: (mapping) => (data) => {
    if (!data) {
      return null;
    }
    if (Array.isArray(data)) {
      return data.map(mapping);
    }
    return mapping(data);
  },
  mappings: {
    client: (client) => ({
      id: client._id,
      fullName: client.fullName,
      age: client.age,
      city: client.city,
      phoneNumber: client.phoneNumber,
    }),
    service: (service) => ({
      id: service._id,
      name: service.name,
      price: service.price,
      description: service.description,
    }),
    request: (request) => {
      const _this = mapper();
      return {
        id: request._id,
        client: _this.mapClients(request.client),
        services: _this.mapServices(request.services),
      };
    },
  },
  mapClients: (data) => {
    const _this = mapper();
    return _this.map(_this.mappings.client)(data);
  },
  mapServices: (data) => {
    const _this = mapper();
    return _this.map(_this.mappings.service)(data);
  },
  mapRequests: (data) => {
    const _this = mapper();
    return _this.map(_this.mappings.request)(data);
  },
});

module.exports = mapper;

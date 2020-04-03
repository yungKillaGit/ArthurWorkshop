module.exports = (container, asFunction) => ({
  inject: () => {
    container.register({
      mongooseConnection: asFunction(require('../db/mongodb/connection')),
      mapper: asFunction(require('../data-access/mapper')),
      Client: asFunction(require('../db/mongodb/models/client')).singleton(),
      Service: asFunction(require('../db/mongodb/models/service')).singleton(),
      Request: asFunction(require('../db/mongodb/models/request')).singleton(),
      makeClient: asFunction(require('../factories/makeClient')),
      makeService: asFunction(require('../factories/makeService')),
      makeRequest: asFunction(require('../factories/makeRequest')),
      clientsDB: asFunction(require('../data-access/clients-db/mongod')),
      servicesDB: asFunction(require('../data-access/services-db/mongod')),
      requestsDB: asFunction(require('../data-access/requests-db/mongod')),
      serviceSeeder: asFunction(require('../db/mongodb/seeds/services')),
      clientSeeder: asFunction(require('../db/mongodb/seeds/clients')),
    });
  },
});

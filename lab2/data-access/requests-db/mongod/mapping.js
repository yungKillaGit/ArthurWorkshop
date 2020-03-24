const mapper = require('../../mapper');
const mapClient = mapper(require('../../clients-db/mongod/mapping'));
const mapService = mapper(require('../../services-db/mongod/mapping'));

module.exports = (request) => ({
  id: request._id,
  client: mapClient(request.client),
  services: mapService(request.services),
});

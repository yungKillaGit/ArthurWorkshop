const buildMakeService = require('./service');
const serviceSchema = require('./service-schema');
const serviceValidator = require('../validator')(serviceSchema);

const makeService = buildMakeService(serviceValidator);

module.exports = makeService;

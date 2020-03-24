const buildMakeClient = require('./client');
const clientSchema = require('./client-schema');
const clientValidator = require('../validator')(clientSchema);

const makeClient = buildMakeClient(clientValidator);

module.exports = makeClient;

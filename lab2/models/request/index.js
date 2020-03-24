const buildMakeRequest = require('./request');
const requestSchema = require('./request-schema');
const requestValidator = require('../validator')(requestSchema);

const makeRequest = buildMakeRequest(requestValidator);

module.exports = makeRequest;

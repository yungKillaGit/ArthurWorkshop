const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = Joi.object().keys({
  client: Joi.objectId().error(new Error('client id is not valid')),
  services: Joi.array().items(Joi.objectId()).error(new Error('service ids are not valid')),
});

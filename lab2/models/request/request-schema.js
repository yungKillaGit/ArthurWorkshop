const Joi = require('@hapi/joi').extend(require('@meanie/joi-object-id'));

module.exports = Joi.object().keys({
  client: Joi.objectId().error(new Error('must have valid client id')),
  services: Joi.array().items(Joi.objectId()).error(new Error('must have array of valid service ids')),
});

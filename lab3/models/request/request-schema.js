module.exports = ({ Joi, joiObjectId }) => {
  Joi.objectId = joiObjectId(Joi);
  return Joi.object().keys({
    client: Joi.objectId().error(new Error('client id is not valid')),
    services: Joi.array().items(Joi.objectId()).error(new Error('service ids are not valid')),
  }).options({ presence: 'required' });
};

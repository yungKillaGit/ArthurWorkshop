module.exports = ({ Joi }) => Joi.object().keys({
  name: Joi.string().error(new Error('must have name as string')),
  price: Joi.number().error(new Error('must have price as number')),
  description: Joi.string().error(new Error('must have description as string')),
}).options({ presence: 'required' });

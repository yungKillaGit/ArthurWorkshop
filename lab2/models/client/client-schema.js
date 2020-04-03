module.exports = ({ Joi }) => Joi.object().keys({
  fullName: Joi.string().error(new Error('must have full name as string')),
  age: Joi.number().error(new Error('must have age as number')),
  city: Joi.string().error(new Error('must have city as string')),
  phoneNumber: Joi.string().error(new Error('must have phone number as string')),
}).options({ presence: 'required' });

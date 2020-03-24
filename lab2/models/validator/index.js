const validator = (schema) => (payload) => {
  const { error } = schema.validate(payload);
  if (error !== undefined) {
    return error;
  }
  return undefined;
};

module.exports = validator;

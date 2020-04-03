const validator = ({ clientSchema, serviceSchema, requestSchema }) => ({
  makeValidator: (schema) => (payload) => {
    const { error } = schema.validate(payload);
    if (error !== undefined) {
      return error;
    }
    return undefined;
  },
  makeClientValidator: () => validator({ clientSchema, serviceSchema, requestSchema })
    .makeValidator(clientSchema),
  makeServiceValidator: () => validator({ clientSchema, serviceSchema, requestSchema })
    .makeValidator(serviceSchema),
  makeRequestValidator: () => validator({ clientSchema, serviceSchema, requestSchema })
    .makeValidator(requestSchema),
});

module.exports = validator;

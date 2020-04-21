module.exports = (container, asFunction) => ({
  inject: () => {
    container.register({
      validator: asFunction(require('../models/validator')),
      clientSchema: asFunction(require('../models/client/client-schema')),
      serviceSchema: asFunction(require('../models/service/service-schema')),
      requestSchema: asFunction(require('../models/request/request-schema')),
      errorHandler: asFunction(require('../error-handler')),
    });
  },
});

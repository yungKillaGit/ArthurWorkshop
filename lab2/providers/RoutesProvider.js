module.exports = (container, asFunction) => ({
  inject: () => {
    container.register({
      router: asFunction(require('../routes')),
      services: asFunction(require('../routes/services')),
      requests: asFunction(require('../routes/requests')),
      clients: asFunction(require('../routes/clients')),
    });
  },
});

module.exports = () => {
  const awilix = require('awilix');

  const { createContainer, asFunction, asValue } = awilix;
  const container = createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  });
  container.register({
    config: asFunction(require('../config')),
    app: asFunction(require('../app')),
  });

  const validationModulesProvider = require('./ValidationModulesProvider')(container, asFunction);
  const dbModulesProvider = require('./DbModulesProvider')(container, asFunction);
  const npmDependenciesProvider = require('./NpmDependenciesProvider')(container, asValue);
  const routesProvider = require('./RoutesProvider')(container, asFunction);

  validationModulesProvider.inject();
  dbModulesProvider.inject();
  npmDependenciesProvider.inject();
  routesProvider.inject();

  return container;
};

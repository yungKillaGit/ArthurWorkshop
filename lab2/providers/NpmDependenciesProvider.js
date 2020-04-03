module.exports = (container, asValue) => ({
  inject: () => {
    container.register({
      mongoose: asValue(require('mongoose')),
      express: asValue(require('express')),
      bodyParser: asValue(require('body-parser')),
      Joi: asValue(require('@hapi/joi')),
      joiObjectId: asValue(require('joi-objectid')),
    });
  },
});

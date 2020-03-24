const servicesDB = require('../data-access/services-db');
const serviceSeeder = require('../db/mongodb/seeds/services');

const services = {
  index: (req, res) => {
    servicesDB
      .getServices()
      .then((data) => {
        res.json(data);
      });
  },
  show: (req, res) => {
    servicesDB
      .getService('id', req.params.id)
      .then((data) => {
        res.json(data);
      });
  },
  delete: (req, res) => {
    servicesDB
      .deleteService(req.params.id)
      .then((data) => {
        res.json(data);
      });
  },
  create: (req, res, next) => {
    servicesDB
      .addService(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  },
  update: (req, res, next) => {
    servicesDB
      .updateService(req.params.id, req.body)
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  },
  seed: (req, res) => {
    serviceSeeder.seed();
    res.json('success');
  },
};

module.exports = services;

const servicesDB = require('../data-access/services-db');
const serviceSeeder = require('../db/mongodb/seeds/services');

const errors = [404, 422];

const services = {
  index: (req, res) => {
    servicesDB
      .getServices()
      .then((answer) => {
        res.status(answer.status).json(answer.data);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  },
  show: (req, res) => {
    servicesDB
      .getService('id', req.params.id)
      .then((answer) => {
        res.status(answer.status).json(answer.data);
      })
      .catch((error) => {
        if (errors.includes(error.code)) {
          res.status(error.code).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
      });
  },
  delete: (req, res) => {
    servicesDB
      .deleteService(req.params.id)
      .then((answer) => {
        res.status(answer.status).json({ deletedID: answer.data });
      })
      .catch((error) => {
        if (errors.includes(error.code)) {
          res.status(error.code).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
      });
  },
  create: (req, res) => {
    servicesDB
      .addService(req.body)
      .then((answer) => {
        res.status(answer.status).json(answer.data);
      })
      .catch((error) => {
        if (errors.includes(error.code)) {
          res.status(error.code).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
      });
  },
  update: (req, res) => {
    servicesDB
      .updateService(req.params.id, req.body)
      .then((answer) => {
        res.status(answer.status).json(answer.data);
      })
      .catch((error) => {
        if (errors.includes(error.code)) {
          res.status(error.code).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
      });
  },
  seed: (req, res) => {
    serviceSeeder.seed();
    res.status(200).json('successfully');
  },
};

module.exports = services;

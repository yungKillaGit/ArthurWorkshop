const clientsDB = require('../data-access/clients-db');
const clientSeeder = require('../db/mongodb/seeds/clients');

const clients = {
  index: (req, res) => {
    clientsDB
      .getClients()
      .then((data) => {
        res.json(data);
      });
  },
  show: (req, res) => {
    clientsDB
      .getClient('id', req.params.id)
      .then((data) => {
        res.json(data);
      });
  },
  delete: (req, res) => {
    clientsDB
      .deleteClient(req.params.id)
      .then((data) => {
        res.json(data);
      });
  },
  create: (req, res, next) => {
    clientsDB
      .addClient(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  },
  update: (req, res, next) => {
    clientsDB
      .updateClient(req.params.id, req.body)
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  },
  seed: (req, res) => {
    clientSeeder.seed();
    res.json('success');
  },
};

module.exports = clients;

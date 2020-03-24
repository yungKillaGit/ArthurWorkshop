const express = require('express');

const router = express.Router();

const clients = require('./clients');
const requests = require('./requests');
const services = require('./services');

router
  .get('/clients', clients.index)
  .get('/clients/:id', clients.show)
  .post('/clients', clients.create)
  .put('/clients/:id', clients.update)
  .post('/clients/seed', clients.seed)
  .delete('/clients/:id', clients.delete);

router
  .get('/services', services.index)
  .get('/services/:id', services.show)
  .post('/services', services.create)
  .put('/services/:id', services.update)
  .post('/services/seed', services.seed)
  .delete('/services/:id', services.delete);

router
  .get('/requests', requests.index)
  .get('/requests/:id', requests.show)
  .post('/requests', requests.create)
  .put('/requests/:id', requests.update)
  .delete('/requests/:id', requests.delete);


module.exports = router;

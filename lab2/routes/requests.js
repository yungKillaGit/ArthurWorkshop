const requestsDB = require('../data-access/requests-db');

const requests = {
  index: (req, res) => {
    requestsDB
      .getRequests()
      .then((data) => {
        res.json(data);
      });
  },
  show: (req, res) => {
    requestsDB
      .getRequest(req.params.id)
      .then((data) => {
        res.json(data);
      });
  },
  delete: (req, res) => {
    requestsDB
      .deleteRequest(req.params.id)
      .then((data) => {
        res.json(data);
      });
  },
  create: (req, res, next) => {
    requestsDB
      .addRequest(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  },
  update: (req, res, next) => {
    requestsDB
      .updateRequest(req.params.id, req.body)
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  },
};

module.exports = requests;

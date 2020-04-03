const errors = [404, 422];

const requests = ({ requestsDB }) => ({
  index: (req, res) => {
    requestsDB
      .getRequests()
      .then((answer) => {
        res.status(answer.status).json(answer.data);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  },
  show: (req, res) => {
    requestsDB
      .getRequest(req.params.id)
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
    requestsDB
      .deleteRequest(req.params.id)
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
    requestsDB
      .addRequest(req.body)
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
    requestsDB
      .updateRequest(req.params.id, req.body)
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
});

module.exports = requests;

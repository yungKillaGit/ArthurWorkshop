const errors = [404, 422];

const clients = ({ clientsDB, clientSeeder }) => ({
  index: (req, res) => {
    clientsDB
      .getClients()
      .then((answer) => {
        res.status(answer.status).json(answer.data);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  },
  show: (req, res) => {
    clientsDB
      .getClient('id', req.params.id)
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
    clientsDB
      .deleteClient(req.params.id)
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
    clientsDB
      .addClient(req.body)
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
    clientsDB
      .updateClient(req.params.id, req.body)
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
    clientSeeder.seed();
    res.status(200).json('successfully');
  },
});

module.exports = clients;

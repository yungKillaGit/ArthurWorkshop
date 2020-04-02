const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config')();
const routes = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.json({ error: err });
});
app.use(routes);

const server = app.listen(config.port, () => {
  console.log('*********************************');
  console.log(`* App listening on port ${server.address().port}`);
  console.log('*********************************');
});

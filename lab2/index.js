'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router')('./routes/');
const config = require('./config')();
const services = require('./serviceLayer')('./services/');

const app = express();
app.use(router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = app.listen(config.port, () => {
    services.logService.write('*********************************');
    services.logService.write(`* App listening on port ${server.address().port}`);
    services.logService.write('*********************************');
});
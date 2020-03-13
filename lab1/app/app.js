'use strict';
const express = require('express');
const services = require('./servicelayer')('./services');
const router = require('./router.js')('./routes/', services);
const app = express();
app.use(router);
const server = app.listen(services.configService.port, () => {
    services.logService.info('*********************************');
    services.logService.info(`* App listening on port ${server.address().port}`);
    services.logService.info('*********************************');
});
'use strict';
module.exports = (dir) => {
    const configService = require(`${dir}/configService`)();
    const logService = require(`${dir}/logService`)(configService);
    const equationService = require(`${dir}/equationService`)();
    const regionService = require(`${dir}/regionService`)();
    return {
        configService,
        logService,
        equationService,
        regionService,
    };
};
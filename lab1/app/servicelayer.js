'use strict';
module.exports = (dir) => {
    const configService = require(`${dir}/configService`)();
    const logService = require(`${dir}/logService`)(configService);
    const equationService = require(`${dir}/equationService`)();
    return {
        configService,
        logService,
        equationService,
    };
};
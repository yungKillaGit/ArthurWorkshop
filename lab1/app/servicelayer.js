'use strict';
module.exports = (dir) => {
    const configService = require(`${dir}/configService`)();
    const logService = require(`${dir}/logService`)(configService);
    const equationService = require(`${dir}/equationService`)();
    const regionService = require(`${dir}/regionService`)();
    const fibonacciNumberService = require(`${dir}/fibonacciNumberService`)();
    return {
        configService,
        logService,
        equationService,
        regionService,
        fibonacciNumberService,
    };
};
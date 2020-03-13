'use strict';
module.exports = (dir, services) => {
    const router = require('express').Router();

    const defaultRoute = require(`${dir}/defaultRoute.js`)();
    const solveEquationRoute = require(`${dir}/solveEquationRoute.js`)(services.equationService);
    const getRegionNameRoute = require(`${dir}/getRegionNameRoute.js`)(services.regionService);
    const getFibonacciNumberRoute = require(`${dir}/getFibonacciNumberRoute.js`)(services.fibonacciNumberService);
    const getDayRoute = require(`${dir}/getDayRoute.js`)(services.dateService);

    router.get('/', defaultRoute);
    router.get('/equation', solveEquationRoute);
    router.get('/region/:regionCode', getRegionNameRoute);
    router.get('/fibonacci/:n', getFibonacciNumberRoute);
    router.get('/day', getDayRoute);
    return router;
};
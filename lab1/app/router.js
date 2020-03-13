'use strict';
module.exports = (dir, services) => {
    const router = require('express').Router();
    const defaultRoute = require(`${dir}/defaultRoute.js`)();
    const solveEquationRoute = require(`${dir}/solveEquationRoute.js`)(services.equationService);
    const getRegionNameRoute = require(`${dir}/getRegionNameRoute.js`)(services.regionService);
    router.get('/', defaultRoute);
    router.get('/equation', solveEquationRoute);
    router.get('/region/:regionCode', getRegionNameRoute);
    return router;
};
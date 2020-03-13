'use strict';
module.exports = (dir, services) => {
    const router = require('express').Router();
    const defaultRoute = require(`${dir}/defaultRoute.js`)();
    const solveEquationRoute = require(`${dir}/solveEquationRoute.js`)(services.equationService);
    router.get('/', defaultRoute);
    router.get('/equation', solveEquationRoute);
    return router;
};
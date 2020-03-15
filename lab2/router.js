'use strict';
module.exports = (dir) => {
    const router = require('express').Router();
    const defaultRoute = require(`${dir}defaultRoute`)();
    router.get('/api', defaultRoute);
    return router;
};
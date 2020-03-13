'use strict';
module.exports = (dir, services) => {
    const router = require('express').Router();
    router.get('/', require(`${dir}/defaultRoute.js`)());
    return router;
};
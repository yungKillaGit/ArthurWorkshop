'use strict';
module.exports = (dir) => {
    const logService = require(`${dir}logService`)();
    return {
        logService,
    }
};
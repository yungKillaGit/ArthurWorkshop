'use strict';
module.exports = (dir) => {
    const config = require(`${dir}/configService`)();
    const log = require(`${dir}/logService`)(config);
    return {
        config,
        log,
    };
};
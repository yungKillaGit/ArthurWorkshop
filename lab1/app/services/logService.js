'use strict';
module.exports = (config) => {
    const LOG_LEVELS = {
        debug: 0,
        info: 1,
        error: 2
    };
    const LOG_LEVEL = LOG_LEVELS[config.logLevel];
    const write = (logLevel, msg) => {
        if (logLevel >= LOG_LEVEL) {
            console.log(`log service: ${msg}`);
        }
    };
    return {
        debug: (msg) => { write(LOG_LEVELS['debug'], msg) },  
        info: (msg) => { write(LOG_LEVELS['info'], msg) },  
        error: (msg) => { write(LOG_LEVELS['error'], msg) }  
    }
};
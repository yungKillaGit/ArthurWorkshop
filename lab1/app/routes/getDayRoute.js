'use strict';
module.exports = (dateService) => {
    return (req, res) => {
        res.json(dateService.getDay(req.query.date));
    }
};
'use strict';
module.exports = (equationService) => {
    return (req, res) => {
        const query = req.query;
        res.json(equationService.solveEquation(query.a, query.b, query.c));
    }
};
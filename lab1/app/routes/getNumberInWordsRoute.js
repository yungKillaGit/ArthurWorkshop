'use strict';
module.exports = (numberConverterService) => {
    return (req, res) => {
        res.json(numberConverterService.getNumberInWords(req.params.numberString));
    }
};
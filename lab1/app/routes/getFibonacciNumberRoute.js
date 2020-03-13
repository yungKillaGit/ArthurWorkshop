'use strict';
module.exports = (fibonacciNumberService) => {
  return (req, res) => {
      res.json(fibonacciNumberService.getFn(req.params.n));
  }
};
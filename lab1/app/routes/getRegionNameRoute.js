'use strict';
module.exports = (regionService) => {
  return (req, res) => {
      res.json(regionService.getRegionName(req.params.regionCode));
  }
};
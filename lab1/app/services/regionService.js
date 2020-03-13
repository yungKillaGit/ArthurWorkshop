'use strict';
module.exports = () => {
    return {
        getRegionName: (regionCode) => {
            regionCode = regionCode.length === 1 ? `0${regionCode}` : regionCode;
            const fs = require('fs');

            const rawData = fs.readFileSync('./json/russia.subjects.json').toString('utf8');
            const russiaSubjects = JSON.parse(rawData);
            const desiredRegion = russiaSubjects.data.find(x => x.regioncode === regionCode);
            return desiredRegion !== undefined ? desiredRegion.name : 'Данный регион не существует';
        }
    }
};
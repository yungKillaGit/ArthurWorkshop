'use strict';
module.exports = () => {
  return {
      getDay: (dateString) => {
          const dateParts = dateString.split('.');
          const date = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
          const days = [ 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ' ];
          return days[date.getDay()];
      }
  }
};
'use strict';
module.exports = () => {
  return {
      getFn: (n) => {
          n = parseInt(n);
          if (isNaN(n) || n < 0) {
              return 'Введите положительное натуральное число';
          }
          const numerator = Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n);
          return Math.floor(numerator / Math.sqrt(5));
      }
  }
};
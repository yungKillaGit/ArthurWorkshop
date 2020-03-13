'use strict';
module.exports = () => {
  return {
      solveEquation: (a, b, c) => {
          const discriminant = Math.pow(b, 2) - 4 * a * c;
          if (discriminant < 0) {
              return {
                  status: 'Дискриминант отрицательный. Корней не существует'
              }
          } else if (discriminant === 0) {
              return {
                  x1: (-b + Math.sqrt(discriminant)) / (2 * a),
              }
          }
          return {
              x1: (-b + Math.sqrt(discriminant)) / (2 * a),
              x2: (-b - Math.sqrt(discriminant)) / (2 * a),
          }
      }
  }
};
'use strict';
module.exports = () => {
  return {
      getNumberInWords: (numberString) => {
          let bitDivider = 1000;
          let numberDigits = Array(4).fill(0);
          let number = Number(numberString);
          numberDigits = numberDigits.map(x => {
              let remainder = Math.floor(number / bitDivider);
              number -= remainder * bitDivider;
              bitDivider /= 10;
              return remainder;
          });
          const words = [
              {
                  0: '',
                  1: 'одна тысяча ',
                  2: 'две тысячи ',
                  3: 'три тысячи ',
                  4: 'четыре тысячи ',
                  5: 'пять тысяч ',
                  6: 'шесть тысяч ',
                  7: 'семь тысяч ',
                  8: 'восемь тысяч ',
                  9: 'девять тысяч '
              },
              {
                  0: '',
                  1: 'сто ',
                  2: 'двести ',
                  3: 'триста ',
                  4: 'четыреста ',
                  5: 'пятьсот ',
                  6: 'шестьсот ',
                  7: 'семьсот ',
                  8: 'восемьсот ',
                  9: 'девятьсот '
              },
              {
                  0: '',
                  10: 'десять ',
                  11: 'одиннадцать ',
                  12: 'двенадцать ',
                  13: 'тринадцать ',
                  14: 'четырнадцать ',
                  15: 'пятнадцать ',
                  16: 'шестнадцать ',
                  17: 'семнадцать ',
                  18: 'восемнадцать ',
                  19: 'девятнадцать ',
                  2: 'двадцать ',
                  3: 'тридцать ',
                  4: 'сорок ',
                  5: 'пятьдесят ',
                  6: 'шестьдесяст ',
                  7: 'семьдесят ',
                  8: 'восемьдесят ',
                  9: 'девяносто '
              },
              {
                  0: '',
                  1: 'один ',
                  2: 'два ',
                  3: 'три ',
                  4: 'четыре ',
                  5: 'пять ',
                  6: 'шесть ',
                  7: 'семь ',
                  8: 'восемь ',
                  9: 'девять '
              },
          ];
          if (numberDigits[2] === 1) {
              numberDigits[2] = Number(`${numberDigits[2]}${numberDigits[3]}`);
              numberDigits = numberDigits.slice(0, 3);
          }
          let numberInWords = numberDigits.map((value, index) => words[index][value]).join('');
          return `${numberInWords[0].toUpperCase()}${numberInWords.slice(1)}`.trim();
      },
  }
};
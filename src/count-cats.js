const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;

  matrix.forEach(bush => bush.forEach( (ears) => {
    if(ears == '^^') cats++;
  }));
  
  return cats;
};

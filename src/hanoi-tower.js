const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  let result = {
    turns: Math.pow(2, disksNumber) - 1,
    seconds: 0
  }

  result.seconds = Math.floor(result.turns / (turnsSpeed / 3600));

  return result;
};

const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');

  if (typeof(sampleActivity) !== 'string') {
    return false;
  }

  // Transform string to Float
  sampleActivity = parseFloat(sampleActivity, 10);

  if(isNaN(sampleActivity)) {
    return false;
  } else if (sampleActivity > 15 || sampleActivity <= 0) {
    return false
  }

  let k = 0.693 / HALF_LIFE_PERIOD * 10000,
      N = Math.log(MODERN_ACTIVITY / sampleActivity),
      t = Math.ceil(N/k * 10000);

  return parseInt(t)
};

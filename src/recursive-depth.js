const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, counter = 1) {
    // throw new CustomError('Not implemented');

    for (let i = 0; i < arr.length; i++) {
      if (typeof(arr[i]) === 'object') {
        counter++;
        return this.calculateDepth(arr.flat(1),counter);
      }
    }

    return counter;
  }
};
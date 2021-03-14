const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  let newArray = [],
      testArray = [...arr];

  if (!Array.isArray(arr)) {
    throw new Error('Error')
  }

  for (let i = 0; i < testArray.length; i++) {
    switch (testArray[i]) {
      case '--discard-next':
        if (testArray[i+1] !== undefined) {
          testArray[i] = undefined;
          testArray[i+1] = undefined;
        } else {
          testArray[i] = undefined;
        }
        break;
      case '--discard-prev':
        if (testArray[i-1] !== undefined) {
          testArray[i] = undefined;
          testArray[i-1] = undefined;
        } else {
          testArray[i] = undefined;
        }
        break;
      case '--double-next':
        if (testArray[i+1] !== undefined) {
          testArray[i] = testArray[i+1];
        } else {
          testArray[i] = undefined;
        }
        break;
      case '--double-prev':
        if (testArray[i-1] !== undefined) {
          testArray[i] = testArray[i-1];
        } else {
          testArray[i] = undefined;
        }
        break;
      default:
        break;
    }
  }

  testArray.forEach(e => {
    if (e !== undefined) newArray.push(e);
  })

  return newArray; 
};


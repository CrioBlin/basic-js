const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  str = `${str}`;

  // Settingup options
  let cacheStr = [],
      cacheAddition = [],
      repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes,
      separator = options.separator === undefined ? '+' : options.separator,
      addition = options.addition === undefined ? '' : `${options.addition}`,
      addRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes,
      addSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  
  for (let i = 0; i < addRepeatTimes; i++) {
    cacheAddition.push(addition);
  }

  cacheAddition = cacheAddition.join(addSeparator);
  str = str.concat(cacheAddition);

  for (let i = 0; i < repeatTimes; i++) {
    cacheStr.push(str);
  }  
  
  return cacheStr = cacheStr.join(separator);
};
  
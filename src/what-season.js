const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  const SEASON = {
    1 : 'winter',
    2 : 'winter',
    3 : 'spring',
    4 : 'spring',
    5 : 'spring',
    6 : 'summer',
    7 : 'summer',
    8 : 'summer',
    9 : 'autumn',
    10 : 'autumn',
    11 : 'autumn',
    12 : 'winter'
  }

  try {
    
    if (date === undefined) {
      return 'Unable to determine the time of year!'
    } 

    if (Object.keys(date).length > 0) {
      throw Error('Unable to determine the time of year!');
    } 

    return SEASON[((date.getMonth() + 1))];  
  } catch {
    
    if (Object.keys(date).length > 0) {
      console.log(2)
      throw new Error('Unable to determine the time of year!')
    } 
    
    return 'Unable to determine the time of year!'
  }
};

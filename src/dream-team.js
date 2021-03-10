const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  /*
  * 1) Check if parameter 'member' is array
  * 2) Check if elements of 'member' is string
  * 3) Check if first "char" of element is not "whitespace"
  * 4) Transform first "char" to Upper case and add to new array
  * 5) Sort elements of new array and join to string
  * 6) Return string
  */
  let result = [];

  if(!Array.isArray(members)) {
    return false;
  } else {
    members.forEach(element => {
      if(typeof(element) == typeof('string')) {
        if(element[0] != ' ') {
          result.push(element[0].toUpperCase());
        } else {
          let counter = 0;
          while(element[counter] == ' ') {
            counter++;
          }
          result.push(element[counter].toUpperCase()); 
        }
      }
    })
  }
  
  return result.sort().join('');
};
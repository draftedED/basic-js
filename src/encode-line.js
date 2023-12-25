const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let letterCounter = 1;
    let result = '';
     
    for (let i = 0; i <= str.length - 1; i += 1) {
      if (str[i] === str[i + 1]) {
         letterCounter += 1
      } else {
         result += ((letterCounter > 1 ? letterCounter : ``) + str[i]);
         letterCounter = 1;
      }
      
    }
    return result;
}

module.exports = {
  encodeLine
};

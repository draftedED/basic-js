const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  array1 = s1.split('');
  array2 = s2.split('');
  
  for (i = 0; i < array2.length; i++) {

    if (array1.includes(array2[i])) {
      result += 1;
      array1.splice(array1.indexOf(array2[i]), 1);
    }

  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};

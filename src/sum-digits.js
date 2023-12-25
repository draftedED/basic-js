const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let transform = n.toString();
   while(transform.length > 1) {
      transform = transform.toString()
      .split('')
      .map((item) => parseFloat(item))
      .reduce((accum, item) => accum + item , 0)
      .toString();
   }

   return parseFloat(transform);
}

module.exports = {
  getSumOfDigits
};

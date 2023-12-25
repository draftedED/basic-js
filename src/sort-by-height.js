const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let positive = arr.filter((item) => item > 0).sort((a, b) => a - b);
  const negative = arr.map((item, index) => item === -1 ? index : '').filter((item) => item !== '');

  for (let i = 0; i <= negative.length - 1; i += 1) {
    positive.splice(negative[i], 0, -1)
  }

  return positive;
}

module.exports = {
  sortByHeight
};

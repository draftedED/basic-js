const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!(date instanceof Date)) throw new Error (`Invalid date!`);
  if (!date) return `Invalid date!`;
  if (Object.getOwnPropertyNames(date).length !== 0) {
    throw new Error('Invalid date!');
  } 
  const getMonth = date.getMonth();
  if (getMonth >= 8 && getMonth <= 10) return `autumn`;
  if (getMonth >= 11 && getMonth <= 1) return `winter`;
  if (getMonth >= 2 && getMonth <= 4) return `spring`;
  return `summer`;
}

module.exports = {
  getSeason
};

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
   if (!date) return `Unable to determine the time of year!`;
   
   if (!(date instanceof Date)) throw new Error (`Invalid date!`);

   if (Object.getOwnPropertyNames(date).length !== 0) {
     throw new Error('Invalid date!');
   } 

   const getMonth = date.getMonth() + 1;

   if (getMonth === 9 || getMonth === 10 || getMonth === 11) return `autumn`;
   if (getMonth === 12 || getMonth === 1 || getMonth === 2) return `winter`;
   if (getMonth === 3 || getMonth === 4 || getMonth === 5) return `spring`;
   return `summer`;
}

module.exports = {
  getSeason
};

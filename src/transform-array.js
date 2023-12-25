const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  /* const discard = () => {
    let array = arr;
    const item = array.filter((item) => typeof item === 'string').join('');

    if (array.indexOf(item) === 0 && item.includes('prev') || array.indexOf(item) === array.length - 1 && item.includes('next')) {

       return array;
    }

    item.includes('next') 
       ? array.splice(array.indexOf(item), 2)
       : array.splice(array.indexOf(item) - 1, 2);
    
    return array;
 }

 const double = () => {
    let array = arr;
    const item = array.filter((item) => typeof item === 'string').join('');

    if (array.indexOf(item) === 0 && item.includes('prev') || array.indexOf(item) === array.length - 1 && item.includes('next')) {

        return array;
    }

    item.includes('next') 
       ? array.splice(array.indexOf(item), 1, array.indexOf(item) + 1)
       : array.splice(array.indexOf(item), 1, array.indexOf(item));
    
    return array;
 }

 const checkArr = () => {
    if (Array.isArray(arr) && arr.length === 0) return [];
    if (!Array.isArray(arr)) return `'arr' parameter must be an instance of the Array!`;
    if (arr.filter((item) => typeof item === 'string').length === 0) return arr;

    return arr.filter((item) => typeof item === 'string')
    .join('')
    .includes('double') 
       ? double()
       : discard();
 }

 return checkArr(); */
}

module.exports = {
  transform
};

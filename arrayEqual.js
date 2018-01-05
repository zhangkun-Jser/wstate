/**
 * @desc 判断数组是否相等
 * @param {arr1,arr2}
 * @return {Boolean}
 */
var arrayEqual = function arrayEqual(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

module.exports = arrayEqual;
/**
 * @desc 返回数组交叉项
 * @param {arr1,arr2}
 * @return {Array}
 */

const intersection = (arr1, arr2) =>  {
  var ai = 0
    , bi = 0
    , result = new Array();
  while (ai < arr1.length && bi < arr2.length) {
    if (arr1[ai] < arr2[bi]) {
      ai++;
    }
    else if (arr1[ai] > arr2[bi]) {
      bi++;
    }
    else {
      result.push(arr1[ai]);
      ai++;
      bi++;
    }
  }
  return result
}

module.exports = intersection
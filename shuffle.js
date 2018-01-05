/**
 * @desc 随机乱序
 * @param {Array} arr
 * @return {Array} res
 */
var getRandom = require('../random/getRandom');
var shuffle = function shuffle(arr) {
  var _arr = arr.slice();
  for (var i = 0, len = _arr.length; i < len; i++) {
    var j = getRandom(0, i);
    var t = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = t;
  }
  return _arr;
};

module.exports = shuffle;
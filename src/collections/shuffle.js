/**
 * @desc 随机乱序
 * @param {Array} arr
 * @return {Array} res
 */
const getRandom = require('../random/getRandom')
const shuffle = (arr) => {
  let _arr = arr.slice()
  for (let i = 0, len = _arr.length; i < len; i++) {
    let j = getRandom(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
};

module.exports = shuffle
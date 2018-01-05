/**
 * @desc 防抖函数
 * @param {Function} callBack
 * @return {Function} fn
 */
const debounce = function (fn, delay = 500) {
  let timer
  return function (...args) {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this,args)
    },delay)
  }
};

module.exports = debounce
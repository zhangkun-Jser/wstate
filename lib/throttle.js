/**
 * @desc 节流函数
 * @param {Function} callBack
 * @return {Function} fn
 */
const throttle = function (fn, delay = 500) {
  let _self = fn, //需要被延迟执行的函数引用
    timer,
    firstTime = true; //是否第一次调用

  return function () {
    let args = arguments;
    if (firstTime) { //第一次调用不用延迟
      _self.apply(this, args);
      firstTime = false;
    }

    if (timer) { //timer还在没结束前一次
      return false;
    }

    timer = setTimeout(() => { //延迟执行
      clearTimeout(timer);
      timer = null; //手动释放timer
      _self.apply(this, args);
    }, delay);
  }
};

module.exports = throttle
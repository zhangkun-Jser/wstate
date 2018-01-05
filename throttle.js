/**
 * @desc 节流函数
 * @param {Function} callBack
 * @return {Function} fn
 */
var throttle = function throttle(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  var _self = fn,
      //需要被延迟执行的函数引用
  timer = void 0,
      firstTime = true; //是否第一次调用

  return function () {
    var _this = this;

    var args = arguments;
    if (firstTime) {
      //第一次调用不用延迟
      _self.apply(this, args);
      firstTime = false;
    }

    if (timer) {
      //timer还在没结束前一次
      return false;
    }

    timer = setTimeout(function () {
      //延迟执行
      clearTimeout(timer);
      timer = null; //手动释放timer
      _self.apply(_this, args);
    }, delay);
  };
};

module.exports = throttle;
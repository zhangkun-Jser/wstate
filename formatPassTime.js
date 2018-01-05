/**
 * @desc   格式化时间戳为时分秒
 * @param  {Date} t
 * @return {String}
 */
var formatPassTime = function formatPassTime(t) {
  var remainTime = void 0;
  var d = parseInt(t / 86400000) < 10 ? '0' + parseInt(t / 86400000) : '' + parseInt(t / 86400000);
  remainTime = t - d * 86400000;
  var h = parseInt(remainTime / 3600000) < 10 ? '0' + parseInt(remainTime / 3600000) : '' + parseInt(remainTime / 3600000);
  remainTime = remainTime - h * 3600000;
  var m = parseInt(remainTime / 60000) < 10 ? '0' + parseInt(remainTime / 60000) : '' + parseInt(remainTime / 60000);
  remainTime = remainTime - m * 60000;
  var s = parseInt(remainTime / 1000) < 10 ? '0' + parseInt(remainTime / 1000) : '' + parseInt(remainTime / 1000);
  return [d, h, m, s];
};

module.exports = formatPassTime;
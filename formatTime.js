/**
 * @desc   格式化时间戳为年月日时分秒
 * @param  {Date} t
 * @param  {String} leftBreak
 * @param  {String} rightBreak
 * @return {String}
 */
var formatTime = function formatTime(t) {
  var leftBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
  var rightBreak = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ':';

  if (!t) {
    return '----';
  }
  var date = new Date(t);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var i = date.getMinutes();
  var s = date.getSeconds();
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  h = h < 10 ? '0' + h : h;
  i = i < 10 ? '0' + i : i;
  s = s < 10 ? '0' + s : s;
  return '' + y + leftBreak + m + leftBreak + d + ' ' + h + rightBreak + i + rightBreak + s;
};

module.exports = formatTime;
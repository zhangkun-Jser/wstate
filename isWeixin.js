/**
 * @desc 是否微信内置浏览器
 * @return {Boolean}
 */
var isWeixin = function isWeixin() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
};

module.exports = isWeixin;
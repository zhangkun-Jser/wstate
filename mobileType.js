/**
 * @desc 获取操作系统类型
 * @return {String}
 */
var mobileType = function mobileType() {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    return 'android';
  } else if (isiOS) {
    return 'iphone';
  }
};

module.exports = mobileType;
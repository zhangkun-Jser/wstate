/**
 * @desc   千位分割方法
 * @param  {String}  num
 * @param  {String}  gap
 * @return {String}
 */

var priceSubstr = function priceSubstr() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
  var gap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

  return num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + gap);
};

module.exports = priceSubstr;
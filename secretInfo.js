/**
 * @desc   给隐私信息标记号加密
 * @param  {String} personInfo
 * @param  {Number} left
 * @param  {Number} right
 * @param  {String} replace
 */
var typeOf = require('../type/typeOf');

var secretInfo = function secretInfo(personInfo) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var replace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '*';

  if (typeOf(personInfo) === 'Number') {
    personInfo = '' + personInfo;
  }
  if (typeOf(personInfo) !== 'String') {
    throw new Error('参数类型错误');
  }
  if (personInfo.length < 7) {
    throw new Error('参数长度需要大于7');
  }
  var reg = new RegExp('^([a-zA-Z\\d]{' + left + '})([a-zA-Z\\d]+)([a-zA-Z\\d]{' + right + '})$');
  return personInfo.replace(reg, function (x, y, z, p) {
    var i = '';
    while (i.length < z.length) {
      i += replace;
    }
    return y + i + p;
  });
};

module.exports = secretInfo;
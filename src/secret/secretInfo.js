/**
 * @desc   给隐私信息标记号加密
 * @param  {String} personInfo
 * @param  {Number} left
 * @param  {Number} right
 * @param  {String} replace
 */
const typeOf = require('../type/typeOf')

const secretInfo = (personInfo, left = 3, right = 3, replace = '*') => {
  if (typeOf(personInfo) === 'Number') {
    personInfo = '' + personInfo
  }
  if (typeOf(personInfo) !== 'String') {
    throw new Error('参数类型错误')
  }
  if (personInfo.length < 7) {
    throw new Error('参数长度需要大于7')
  }
  let reg = new RegExp('^([a-zA-Z\\d]{' + left + '})([a-zA-Z\\d]+)([a-zA-Z\\d]{' + right + '})$')
  return personInfo.replace(reg, function (x, y, z, p) {
    let i = ''
    while (i.length < z.length) {
      i += replace
    }
    return y + i + p
  })
}

module.exports = secretInfo
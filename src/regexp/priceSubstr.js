/**
 * @desc   千位分割方法
 * @param  {String}  num
 * @param  {String}  gap
 * @return {String}
 */

const priceSubstr = (num = '0', gap = ',') => {
  return num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, `$1${gap}`)
}

module.exports = priceSubstr
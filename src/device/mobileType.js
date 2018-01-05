/**
 * @desc 获取操作系统类型
 * @return {String}
 */
const mobileType = () => {
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1  //android终端
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)  //ios终端
  if (isAndroid) {
    return 'android'
  } else if (isiOS) {
    return 'iphone'
  }
}

module.exports = mobileType;
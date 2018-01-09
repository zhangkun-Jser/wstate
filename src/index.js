/**
 * @desc webpack打包入口
 */

const addClass = require('./class/addClass')
const hasClass = require('./class/hasClass')
const removeClass = require('./class/removeClass')
const toggleClass = require('./class/toggleClass')

const copyObj = require('./object/copyObj')

const isEmail = require('./regexp/isEmail')
const isIdCard = require('./regexp/isIdCard')
const isPhoneNum = require('./regexp/isPhoneNum')
const isUrl = require('./regexp/isUrl')
const priceSubstr = require('./regexp/priceSubstr')

const cookieApi = require('./cookie/cookie')
const scrollApi = require('./dom/scrollApi')

const localStorageApi = require('./stroge/localStorage')

const formatPassTime = require('./time/formatPassTime')
const formatTime = require('./time/formatTime')

const throttle = require('./function/throttle')
const debounce = require('./function/debounce')

const isWeixin = require('./device/isWeixin')
const mobileType = require('./device/mobileType')
const getOs = require('./device/getOs')

const typeOf = require('./type/typeOf')
const secretInfo = require('./secret/secretInfo')

const getUrlParams = require('./url/getUrlParams')
const stringfyQs = require('./url/stringfyQs')
const getRandom = require('./random/getRandom')
const shuffle = require('./array/shuffle')
const arrayEqual = require('./array/arrayEqual')
const intersection = require('./array/intersection')
const animationFrame = require('./animationFrame/animationFrame')
const download = require('./download/download')


module.exports = {
  addClass,
  hasClass,
  removeClass,
  toggleClass,
  copyObj,
  isEmail,
  isIdCard,
  isPhoneNum,
  isUrl,
  priceSubstr,
  cookieApi,
  scrollApi,
  getOs,
  localStorageApi,
  formatPassTime,
  formatTime,
  throttle,
  debounce,
  isWeixin,
  mobileType,
  typeOf,
  secretInfo,
  getUrlParams,
  stringfyQs,
  getRandom,
  shuffle,
  arrayEqual,
  intersection,
  animationFrame,
  download
}
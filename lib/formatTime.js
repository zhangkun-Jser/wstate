/**
 * @desc   格式化时间戳为年月日时分秒
 * @param  {Date} t
 * @param  {String} leftBreak
 * @param  {String} rightBreak
 * @return {String}
 */
const formatTime = (t, leftBreak = '-', rightBreak = ':') => {
  if (!t) {
    return '----'
  }
  let date = new Date(t)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let h = date.getHours()
  let i = date.getMinutes()
  let s = date.getSeconds()
  m = m < 10 ? '0' + m : m
  d = d < 10 ? '0' + d : d
  h = h < 10 ? '0' + h : h
  i = i < 10 ? '0' + i : i
  s = s < 10 ? '0' + s : s
  return `${y}${leftBreak}${m}${leftBreak}${d} ${h}${rightBreak}${i}${rightBreak}${s}`
}

module.exports = formatTime

/**
 * @desc 是否包含class
 */

const hasClass = (el, cls) => {
  return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(el.className)
}

module.exports = hasClass
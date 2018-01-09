/**
 * @desc 添加class
 */

const addClass = (el, cls) => {
  if (!this.hasClass(el, cls)) {
    el.className += ' ' + cls
  }
}

module.exports = addClass
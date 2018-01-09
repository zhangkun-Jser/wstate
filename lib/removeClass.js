/**
 * @desc 移除class
 */

const removeClass = (el, cls) => {
  if (this.hasClass(el, cls)) {
    let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    el.className = el.className.replace(reg, ' ')
  }
}

module.exports = removeClass
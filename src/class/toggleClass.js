/**
 * @desc 切换class
 */

const toggleClass = (el, cls) => {
  if (this.hasClass(el, cls)) {
    let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    el.className = el.className.replace(reg, ' ')
  }else {
    el.className += ' ' + cls
  }
}

module.exports = toggleClass
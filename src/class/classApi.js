/**
 * @desc   classApi
 |*|  * classApi.isElement(el)
 |*|  * classApi.hasClass(el,cls)
 |*|  * classApi.addClass(el,cls)
 |*|  * classApi.removeClass(el,cls)
 |*|  * classApi.toggleClass(el,cls)
 */

const classApi = {
  isElement: function (el) {
    return el && el.nodeType === Node.ELEMENT_NODE
  },
  hasClass: function (el, cls) {
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(el.className)
  },
  addClass: function (el, cls) {
    if (!this.hasClass(el, cls)) {
      el.className += ' ' + cls
    }
  },
  removeClass: function (el, cls) {
    if (this.hasClass(el, cls)) {
      let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
      el.className = el.className.replace(reg, ' ')
    }
  },
  toggleClass: function (el, cls) {
    if (this.hasClass(el, cls)) {
      let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
      el.className = el.className.replace(reg, ' ')
    }else {
      el.className += ' ' + cls
    }
  }
}

module.exports = classApi
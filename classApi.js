/**
 * @desc   classApi
 |*|  * classApi.isElement(el)
 |*|  * classApi.hasClass(el,cls)
 |*|  * classApi.addClass(el,cls)
 |*|  * classApi.removeClass(el,cls)
 |*|  * classApi.toggleClass(el,cls)
 */

var classApi = {
  isElement: function isElement(el) {
    return el && el.nodeType === Node.ELEMENT_NODE;
  },
  hasClass: function hasClass(el, cls) {
    return new RegExp('(\\s|^)' + cls + '(\\s|$)').test(el.className);
  },
  addClass: function addClass(el, cls) {
    if (!this.hasClass(el, cls)) {
      el.className += ' ' + cls;
    }
  },
  removeClass: function removeClass(el, cls) {
    if (this.hasClass(el, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  },
  toggleClass: function toggleClass(el, cls) {
    if (this.hasClass(el, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    } else {
      el.className += ' ' + cls;
    }
  }
};

module.exports = classApi;
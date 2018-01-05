/**
 * @desc  scroll滚动方法
 |*|  * scrollApi.getScrollTop()
 |*|  * scrollApi.setScrollTop(h)
 |*|  * scrollApi.scrollTo(to,duration)
 */
var requestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

var scrollApi = {
  getScrollTop: function getScrollTop() {
    return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
  },
  setScrollTop: function setScrollTop(h) {
    h && window.scrollTo(0, h);
  },
  scrollTo: function scrollTo(to) {
    var _this = this;

    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var diff = to - this.getScrollTop();
    if (diff === 0) return;
    if (duration <= 0) {
      this.setScrollTop(to);
      return;
    }
    var step = diff / duration * 10;
    requestAnimationFrame(function () {
      if (Math.abs(step) > Math.abs(diff)) {
        _this.setScrollTop(_this.getScrollTop() + diff);
        return;
      }
      _this.setScrollTop(_this.getScrollTop() + step);
      if (diff > 0 && _this.getScrollTop() >= to || diff < 0 && _this.getScrollTop() <= to) return;
      _this.scrollTo(to, duration - 16);
    });
  }
};

module.exports = scrollApi;
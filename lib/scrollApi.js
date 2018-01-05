/**
 * @desc  scroll滚动方法
 |*|  * scrollApi.getScrollTop()
 |*|  * scrollApi.setScrollTop(h)
 |*|  * scrollApi.scrollTo(to,duration)
 */
var requestAnimationFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

const scrollApi = {
  getScrollTop: function () {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
  },
  setScrollTop: function (h) {
    h && window.scrollTo(0, h)
  },
  scrollTo: function (to, duration = 0) {
    let diff = to - this.getScrollTop()
    if (diff === 0) return
    if (duration <= 0) {
      this.setScrollTop(to)
      return
    }
    let step = diff / duration * 10
    requestAnimationFrame(
      () => {
        if (Math.abs(step) > Math.abs(diff)) {
          this.setScrollTop(this.getScrollTop() + diff)
          return;
        }
        this.setScrollTop(this.getScrollTop() + step)
        if (diff > 0 && this.getScrollTop() >= to || diff < 0 && this.getScrollTop() <= to) return
        this.scrollTo(to, duration - 16)
      })
  }
}

module.exports = scrollApi
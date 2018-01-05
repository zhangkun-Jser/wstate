/**
 * @desc AnimationFrame简单兼容hack
 */
var animationFrame = function animationFrame() {
  window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();
  window.cancelAnimationFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (id) {
      clearTimeout(id);
    };
  }();
};

module.exports = animationFrame;
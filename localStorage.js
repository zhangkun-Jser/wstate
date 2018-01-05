/**
 * @desc   localStroge/sessionStroge缓存
 * @param  {String} key 键名
 * @param  {String} val 键值
 * @param  {Date} time 过期时间
 */

var localStorageApi = {
  // time有效期 默认是半小时传入ms
  set: function set(key, val) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : +new Date() + 0.5 * 3600 * 1000;

    var cacheVal = {
      val: val,
      exp: time
    };
    localStorage.setItem(key, JSON.stringify(cacheVal));
  },
  get: function get(key) {
    var cacheVal = localStorage.getItem(key);
    if (!cacheVal) return '';
    var result = JSON.parse(cacheVal);
    if (+new Date() > result.exp) {
      //缓存过期
      this.remove(key);
      return '';
    }
    return result.val;
  },
  remove: function remove(key) {
    localStorage.removeItem(key);
  },
  clear: function clear() {
    localStorage.clear();
  }
};

module.exports = localStorageApi;
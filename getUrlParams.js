/**
 * @desc   获取url参数
 * @param  {String} prop
 * @return {Object}
 */

var getUrlParams = function getUrlParams(prop) {
  var params = {},
      query = location.search.substring(1),
      arr = query.split('&'),
      rt = void 0;
  for (var i = 0, len = arr.length; i < len; i++) {
    var item = arr[i],
        tmp = item.split('='),
        key = tmp[0],
        val = tmp[1];
    if (typeof params[key] == 'undefined') {
      params[key] = val;
    } else if (typeof params[key] == 'string') {
      params[key] = [params[key], val];
    } else {
      params[key].push(val);
    }
  }
  rt = prop ? params[prop] : params;
  return rt;
};

module.exports = getUrlParams;
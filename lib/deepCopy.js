/**
 * @desc 对象合并/深拷贝
 */
function deepCopy(p, c) {
  　　　　var c = c || {};
  　　　　for (var i in p) {
  　　　　　　if (typeof p[i] === 'object') {
  　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
  　　　　　　　　deepCopy(p[i], c[i]);
  　　　　　　} else {
  　　　　　　　　　c[i] = p[i];
  　　　　　　}
  　　　　}
  　　　　return c;
  　　}

module.exports = deepCopy
/**
 * @desc   生成下载
 * @param  {href,title} 
 */
const download = (href, title) => {
  //火狐专用
  if (navigator.userAgent.indexOf("Firefox") > 0) {
    window.location = href
    return
  }
  var a = document.createElement('a');
  a.setAttribute('href', href);
  a.setAttribute('download', title);
  a.click();
}

module.exports = download
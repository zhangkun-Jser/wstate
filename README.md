# autils &emsp;[![GitHub forks](https://img.shields.io/github/forks/zhangkun-Jser/autils.svg?style=social&label=Fork)](https://www.npmjs.com/package/autils)[![GitHub stars](https://img.shields.io/github/stars/zhangkun-Jser/autils.svg?style=social&label=Stars)](https://www.npmjs.com/package/autils)
[![npm](https://img.shields.io/npm/dw/autils.svg)](https://www.npmjs.com/package/autils)
[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/autils) ![](https://img.shields.io/npm/v/autils.svg)

 
前端常用函数库  

> 目的：封装前端代码经常使用的函数，提高开发效率。如果你也有常用的代码，欢迎为本项目提交PR。

## 安装使用

1. 直接下载`bulid`目录下的[autils.min.js](https://github.com/zhangkun-Jser/autils/blob/master/build/autils.min.js)使用，支持UMD通用模块规范  

``` html
  <script src="autils.min.js"></script>
  <script>
      var copyObj = autils.copyObj(obj1,obj2)
  </script>
```

2. 使用npm安装
``` bash
$ npm install -D autils
```

**推荐使用方法**  

不需要完整引入所有函数，只引入需要使用的方法即可
``` javascript
// 只引入部分方法('autils/lib/<方法名>')
const copyObj = require('autils/lib/copyObj')
const object = copyObj(obj1,obj2)
```

## API文档
### Class
#### &emsp;&emsp;[elApi][elApi]&emsp;&emsp;element的操作api
##### &emsp;&emsp;&emsp;&emsp;elApi.isElement(el) //是否是该元素节点
##### &emsp;&emsp;&emsp;&emsp;elApi.hasClass(el,cls)
##### &emsp;&emsp;&emsp;&emsp;elApi.addClass(el,cls)
##### &emsp;&emsp;&emsp;&emsp;elApi.removeClass(el,cls)
##### &emsp;&emsp;&emsp;&emsp;elApi.toggleClass(el,cls)

### Object  
#### &emsp;&emsp;[copyObj][copyObj]&emsp;&emsp;对象合并/深浅拷贝

### Regexp  
#### &emsp;&emsp;[isEmail][isEmail]&emsp;&emsp;判断是否为邮箱地址 
#### &emsp;&emsp;[isIdCard][isIdCard]&emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp;[isPhoneNum][isPhoneNum]&emsp;&emsp;判断是否为手机号  
#### &emsp;&emsp;[isUrl][isUrl]&emsp;&emsp;判断是否为URL地址
#### &emsp;&emsp;[priceSubstr][priceSubstr]&emsp;&emsp;千位分割方法

### Secret
#### &emsp;&emsp;[secretInfo][secretInfo]&emsp;&emsp;给隐私信息标记号加密

### Time  
#### &emsp;&emsp;[formatPassTime][formatPassTime]&emsp;&emsp;格式化时间戳为天时分秒[d,h,m,s]
#### &emsp;&emsp;[formatTime][formatTime]&emsp;&emsp;格式化时间戳为年月日时分秒[y-m-d h:m:s]

### device  
#### &emsp;&emsp;[isWeixin][isWeixin]&emsp;&emsp;是否是微信浏览器
#### &emsp;&emsp;[mobileType][mobileType]&emsp;&emsp;设备类型iphone or android
#### &emsp;&emsp;[getOs][getOs]&emsp;&emsp;是否是手机mobile or web

### function  
#### &emsp;&emsp;[throttle][throttle]&emsp;&emsp;节流函数
#### &emsp;&emsp;[debounce][debounce]&emsp;&emsp;防抖函数

### dom
#### &emsp;&emsp;[scrollApi][scrollApi]&emsp;&emsp;scrollApi方法
##### &emsp;&emsp;&emsp;&emsp;scrollApi.getScrollTop()
##### &emsp;&emsp;&emsp;&emsp;scrollApi.setScrollTop(h)
##### &emsp;&emsp;&emsp;&emsp;scrollApi.scrollTo(to,duration)
#### &emsp;&emsp;[softKeyCal][softKeyCal]&emsp;&emsp;移动端端软键盘呼出和消失的事件回调

### localStorage
#### &emsp;&emsp;[localStorageApi][localStorageApi]&emsp;&emsp;本地持久化存储
##### &emsp;&emsp;&emsp;&emsp;localStorageApi.set(name)
##### &emsp;&emsp;&emsp;&emsp;localStorageApi.get(name)
##### &emsp;&emsp;&emsp;&emsp;localStorageApi.remove(name)
##### &emsp;&emsp;&emsp;&emsp;localStorageApi.clear(name)

### cookie
#### &emsp;&emsp;[cookieApi][cookieApi]&emsp;&emsp;cookie存储(适用和服务端交互)
##### &emsp;&emsp;&emsp;&emsp;cookieApi.set(name, value[, end[, path[, domain[, secure]]]])
##### &emsp;&emsp;&emsp;&emsp;cookieApi.get(name)
##### &emsp;&emsp;&emsp;&emsp;cookieApi.has(name)
##### &emsp;&emsp;&emsp;&emsp;cookieApi.remove(name)
##### &emsp;&emsp;&emsp;&emsp;cookieApi.keys()

### Type
#### &emsp;&emsp;[typeOf][typeOf]&emsp;&emsp;判断类型

### Url
#### &emsp;&emsp;[getUrlParams][getUrlParams]&emsp;&emsp;url参数转对象
#### &emsp;&emsp;[stringfyQs][stringfyQs]&emsp;&emsp;对象序列化

### random 
#### &emsp;&emsp;[getRandom][getRandom]&emsp;&emsp;返回选定返回的随机整数

### collections 
#### &emsp;&emsp;[shuffle][shuffle]&emsp;&emsp;数组打乱随机乱序

### array 
#### &emsp;&emsp;[arrayEqual][arrayEqual]&emsp;&emsp;判断数组是否相等
#### &emsp;&emsp;[intersection][intersection]&emsp;&emsp;输出2数组的交叉项

### animationFrame 
#### &emsp;&emsp;[animationFrame][animationFrame]&emsp;&emsp;AnimationFrame简单兼容hack

### download 
#### &emsp;&emsp;[download][download]&emsp;&emsp;根据链接生成下载


## License
autils is open source and released under the [MIT License](LICENSE).

[arrayEqual]:https://github.com/zhangkun-Jser/autils/blob/master/src/arrayEqual.js
[animationFrame]:https://github.com/zhangkun-Jser/autils/blob/master/src/animationFrame/animationFrame.js
[getRandom]:https://github.com/zhangkun-Jser/autils/blob/master/src/random/getRandom.js
[shuffle]:https://github.com/zhangkun-Jser/autils/blob/master/src/collections/shuffle.js
[throttle]:https://github.com/zhangkun-Jser/autils/blob/master/src/function/throttle.js
[debounce]:https://github.com/zhangkun-Jser/autils/blob/master/src/function/debounce.js
[scrollApi]:https://github.com/zhangkun-Jser/autils/blob/master/src/dom/scrollApi.js
[softKeyCal]:https://github.com/zhangkun-Jser/autils/blob/master/src/dom/softKeyCal.js
[isWeixin]:https://github.com/zhangkun-Jser/autils/blob/master/src/device/isWeixin.js
[mobileType]:https://github.com/zhangkun-Jser/autils/blob/master/src/device/mobileType.js
[getOs]:https://github.com/zhangkun-Jser/autils/blob/master/src/device/getOs.js
[secretInfo]:https://github.com/zhangkun-Jser/autils/blob/master/src/secret/secretInfo.js
[typeOf]:https://github.com/zhangkun-Jser/autils/blob/master/src/type/typeOf.js
[elApi]:https://github.com/zhangkun-Jser/autils/blob/master/src/element/elApi.js
[copyObj]:https://github.com/zhangkun-Jser/autils/blob/master/src/object/copyObj.js
[isEmail]:https://github.com/zhangkun-Jser/autils/blob/master/src/regexp/isEmail.js
[isIdCard]:https://github.com/zhangkun-Jser/autils/blob/master/src/regexp/isIdCard.js
[isPhoneNum]:https://github.com/zhangkun-Jser/autils/blob/master/src/regexp/isPhoneNum.js
[isUrl]:https://github.com/zhangkun-Jser/autils/blob/master/src/regexp/isUrl.js
[priceSubstr]:https://github.com/zhangkun-Jser/autils/blob/master/src/regexp/priceSubstr.js
[formatPassTime]:https://github.com/zhangkun-Jser/autils/blob/master/src/time/formatPassTime.js
[formatTime]:https://github.com/zhangkun-Jser/autils/blob/master/src/time/formatTime.js
[getUrlParams]:https://github.com/zhangkun-Jser/autils/blob/master/src/url/getUrlParams.js
[stringfyQs]:https://github.com/zhangkun-Jser/autils/blob/master/src/url/stringfyQs.js
[localStorageApi]:https://github.com/zhangkun-Jser/autils/blob/master/src/stroge/localStorage.js
[cookieApi]:https://github.com/zhangkun-Jser/autils/blob/master/src/cookie/cookie.js
[intersection]:https://github.com/zhangkun-Jser/autils/blob/master/src/array/intersection.js
[download]:https://github.com/zhangkun-Jser/autils/blob/master/src/download/download.js

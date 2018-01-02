
// The file is a light javascript library .
// Version: 1.0.0
// Email: zhangkun0303@qq.com


/*****************************************************************************
	00. ajax 
			· get : 使用Get方法获取数据, 
				Z.ajax.get('2.xml',function(e){
					console.log(e.getElementsByTagName('success')[0].firstChild.nodeValue)	
				},'xml');
			· post : 使用Post方法传递数据,
				Z.ajax.post('ajax.txt',data,function(v){
					console.log(e.getElementsByTagName('success')[0].firstChild.nodeValue)	
				},'xml');			
	01. array 
			· concat : 合并数组
			· contains : 检查数组中是否含有某元素
			· descendingSort : 将数组进行递减排序
			· empty : 清空数组
			· increasingSort : 将数组进行递增排序
			· index : 获取元素在数组中的序号
			· intersection : 输出两个数组中的相同的数
			· lastIndexOf : 从后开始查找
			· max : 输出数组中的最大项
			· min : 输出数组中的最小项
			· random : 随机产生数组
			· remove : 移除元素
			· removeAt : 移除指定位置的项
			· shuffle : 打乱数组
			· unique : 去除重复数据
	02. browser 
			· addFavorite : 将当前页加入到收藏夹 
				Z.browser.addFavorite('http://www.starwebdesign.com.cn','星秀网页设计','加入收藏失败，有劳您手动添加。')
			. chrome : 输出chrome信息
			· core : 输出浏览器内核信息
			. firefox : 输出ff信息
			. IE : 输出ie信息
			. IE6 : 是否为ie6
			. isGecko : 是否为Gecko内核
			. isWebkit : 是否为Webkit内核
			. opera : 输出opera信息
			. safari : 输出safari信息
			· version : 输出浏览器版本信息
	03. cookie 
			· del : 销毁cookie
			· get : 获取cookie
			· set : 设置cookie
	04. date 
			· add : 计算日期, Z.date.add(day,20)
			· getCNDay : 显示周或星期, Z.date.getCNDay(day,Z)
			· toString : 格式化日期, Z.date.toString(day,'yyyy-mm-dd')
			
	05. dom 
			· 通过id获取,该元素是唯一的 
				Z.dom('#id') 
			 
			· 通过className获取 
				Z.dom('.cls') 获取文档中所有className为cls的元素 
				Z.dom('span.cls') 获取文档中所有className为cls的span元素
				Z.dom('#abc .cls') 获取文档中所有#abc下的className为cls的元素
				Z.dom('#abc span.cls') 获取文档中所有#abc下的className为cls的span元素
			
			· 通过tagName获取 
				Z.dom('span') 获取文档中所有的span元素
				Z.dom('#abc span') 获取#abc中所有的span元素
	
			· addClass : 增加类 Z.dom("#abc").addClass("s")
			· after : 在每个匹配的元素之后插入内容
			· append : 元素内部追加内容
			· attr : 增加属性
			· before : 在每个匹配的元素之前插入内容
			· css : 添加样式
			· each : 遍历节点
			· empty : 清空元素
			· eq : 获取第几个元素
			· even : 获取偶数个元素
			· fadeIn ： 淡入
			· fadeOut ： 淡出
			· fadeTo ： 变换到指定透明度
			· first : 获取第一个元素
			· getCss : 新增css
			· getScript : 新增js
			· gt : 匹配所有大于给定索引值的元素
			· hasClass : 检查是否含有某样式
			· hide : 隐藏
			· html : 创建html
			· last : 获取最后一个元素
			· lt : 匹配所有小于给定索引值的元素
			· next : 获取后一个元素
			· odd ： 获取奇数个元素
			· offset 获取匹配元素在当前视口的相对偏移
			· on ： 绑定事件
			· parent  : 选择父级元素
			· prepend : 元素内部前置内容
			· prev : 选择前一个元素
			· remove : 移除
			· removeAttr : 移除属性
			· removeClass : 移除样式 
			· replace : 置换元素
			· show : 显示
			· sibilings : 获取兄弟元素
			· size : 返回元素数量
			· slice : 选取一个匹配的子集
			· text : 创建文本
			· toggle : 如果元素是可见的，切换为隐藏的；如果元素是隐藏的，切换为可见的
			
	06. eventUtil
			· addHandler : 添加事件监听 Z.eventUtil.addHandler(elem,'click',function(e){ alert("123") });
			· getEvent : 获取参数
			· getTarget : 获取目标
			· preventDefault : 阻止浏览器默认事件
			· removeHandler : 移除事件监听
			· stopPropagation : 阻止冒泡事件 
	07. img 
			· isComplete : 判断图片是否已经加载完成
			· preload : 预加载图片 Z.img.preload('1.jpg','2.jpg','3.jpg')
	08. math 
			· randomColor : 随机颜色 
			· randomNum : 随机数 Z.math.randomNum(50,100)
			· sum : 求和
	09. page
			· getHeight : 获取页面高度
			· getScrollLeft : 获取横向滚动量
			· getScrollTop : 获取纵向滚动量
			· getViewHeight : 获取页面视觉区域高度
			· getViewWidth : 获取页面视觉区域宽度
			· getWidth : 获取页面宽度
			· rollTo : 页面滚动至
			· rollToBottom : 页面滚动至底部
			· rollToTop ： 页面滚动至顶部
	10. platform
			· isAndroid : 是否为安卓系统
			· isBlackBerry : 是否为黑莓
			· isIpad : 是否为iPad
			· isIphone : 是否为iPhone
			· isMacintosh : 是否为Mac
			· isMobile : 是否为移动设备
			· isWindows : 是否为Windows
			· isX11 : 是否为X11
	11. query
			· 通过id获取,该元素是唯一的 
				Z.query('#id') 
			 
			· 通过className获取 
				Z.query('.cls') 获取文档中所有className为cls的元素 
				Z.query('span.cls') 获取文档中所有className为cls的span元素
				Z.query('#abc .cls') 获取文档中所有#abc下的className为cls的元素
				Z.query('#abc span.cls') 获取文档中所有#abc下的className为cls的span元素
			
			· 通过tagName获取 
				Z.query('span') 获取文档中所有的span元素
				Z.query('#abc span') 获取#abc中所有的span元素
	12. regExp
			· isAdult : 判断是否已成年 
			· isChinese : 判断是否为中文
			· isDate : 判断是否为正确日期格式
			· isEmail : 判断是否为Email地址
			· isIdcard : 判断是否为身份证号
			· isMobile : 判断是否为手机号
			· isQQ : 判断是否为QQ号
			· isTel : 判断是否为固定电话号
			· isURL : 判断是否为链接地址
	13. string
			· encrypt : 加密
			· filterText : 屏蔽词
			· isNotaNumber : 判断是否为数字 
			· md5: md5加密
			· noNumbers : 判断是否存在数字
			· onlyNumbers :  判断是否为仅有数字
			· removeWhitespace : 移除字符串两边空白  
			· toArray : 转换为数组
			· unEncrypt : 解密
			
	14. url
			· getQueryVariable :  获取url参数的键值对
			· getQueryString : 获取url参数的值
			· getUrlParm : 获取url参数

*****************************************************************************/	



if (typeof Z !=='object'){
	var Z = {}
}
/*--------------8<--------------8<-------AJAX Begin-------8<--------------8<-------------*/
if (typeof Z.ajax !== 'object'){
	Z.ajax = {
		_xmlHttp : function(){ 
			return new (window.ActiveXObject||window.XMLHttpRequest)("Microsoft.XMLHTTP");
		},
		_AddEventToXHP : function(xhp,fun,format){
			xhp.onreadystatechange=function(){
				if(xhp.readyState == 4 && xhp.status == 200){
					var tmp = "" ;
					if(format){
						switch (format){
							case 'text':
								tmp = xhp.responseText;
								break;
							case 'json':
								tmp = eval('(' + xhp.responseText + ')');
								break;
							case 'xml':
								tmp = xhp.responseXML;
								break;
						}
					}else{
						tmp = eval('(' + xhp.responseText + ')');	
					}
					fun(tmp);
				}
			}	
		},
		get : function(url,fun,format,bool){
			var _xhp = Z.ajax._xmlHttp();	
			Z.ajax._AddEventToXHP(_xhp, fun || function(){}, format);
			_xhp.open("GET",url,bool);
			_xhp.send(null);	
		},
		post : function(url,data,fun,format,bool){	
			var _xhp = Z.ajax._xmlHttp();	
			Z.ajax._AddEventToXHP(_xhp, fun || function(){}, format);
			_xhp.open("POST",url,bool);
			_xhp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			_xhp.send(data);
		}
	}
}
/*--------------8<--------------8<-------AJAX End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------Array Begin-------8<--------------8<-------------*/
if (typeof Z.array !== 'object'){
	Z.array = window.Z.array = function (Arr) {
		return new Z.array.fn.init(Arr) ;
	}
	
	Z.array.fn = Z.array.prototype = {                                                        
		init : function (Arr) {
			if(typeof Arr === "object"){	
				this[0] = Arr;	
			}
		},
		concat : function(arr2){
			var arr = this[0];
			return arr.concat(arr2);
		},
		contains : function(needle){
			var arr = this[0];
			for (i in arr) {
				if (arr[i] == needle){
					return true;
				}
			}
			return false;
		},
		descendingSort : function(){
			var arr = this[0];
			arr.sort(new Function("a","b","return b-a;"));
			var sortedArr = [];
			for (var i = 0; i < arr.length; i++) {
				sortedArr.push(arr[i])
			}
			return sortedArr	
		},
		empty : function() {
			var arr = this[0];
   			arr.length = 0;
		},
		increasingSort : function(){
			var arr = this[0];
			arr.sort(new Function("a","b","return a-b;"));
			var sortedArr = [];
			for (var i = 0; i < arr.length; i++) {
				sortedArr.push(arr[i])
			}
			return sortedArr
		},
		index: function(value) {
			var arr = this[0];
			for (var i=0, il = arr.length; i < il; i++) {
				if (arr[i] == value){
					return i;
				}
			}
			return -1;
		},
		intersection : function(arr2){
			var arr = this[0]
			 ,	ai = 0
			 ,  bi = 0
			 ,  result = new Array();
			while( ai < arr.length && bi < arr2.length ){
				if(arr[ai] < arr2[bi] ){ 
					ai++; 
				}
				else if (arr[ai] > arr2[bi] ){
					 bi++; 
				}
				else{
					result.push(arr[ai]);
					ai++;
					bi++;
				}
			}
			return result	
		},
		lastIndexOf : function (value) {
			var arr = this[0];
			for (var i=0, il = arr.length; i < il; i++) {
				if (arr[i] == value) {
					return Math.abs(i - arr.length);
				}
			}
			return -1;
		},
		max : function(){
			var arr = this[0],
				maxNum = Math.max.apply(null, arr);
			return maxNum; 	
		},
		min : function(){
			var arr = this[0],
				minNum = Math.min.apply(null, arr);
			return minNum;
		},
		random : function(quantity,begin,end){
			var ar = [];
			for (var i = 0; i < quantity; i ++) {
				var x = Z.math.randomNum(begin,end)
				ar.push(x);
			}
			return ar
		},
		remove : function (match) {
			var arr = this[0],
				len = arr.length;	
			while (len--) {
				if (len in arr && arr[len] === match) {
					arr.splice(len, 1);
				}
			}
			return arr;
		},
		removeAt : function (index) {
			var arr = this[0];
   			return arr.splice(index, 1)[0];
		},
		shuffle : function() {
			var arr = this[0];
			for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
			return arr;
		},
		unique : function(){
			var arr = this[0],
				newArr = [],
				origLen = arr.length,
				found,
				x, y;
			for ( x = 0; x < origLen; x++ ) {
				found = undefined;
				for ( y = 0; y < newArr.length; y++ ) {
					if ( arr[x] === newArr[y] ) { 
					  found = true;
					  break;
					}
				}
				if ( !found) newArr.push( arr[x] );    
			}
			return newArr;	
		}
	}
	Z.array.fn.init.prototype = Z.array.prototype;
}
/*--------------8<--------------8<-------Array End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------Browser Begin-------8<--------------8<-------------*/
if (typeof Z.browser !== 'object'){
	Z.browser = {
		addFavorite : function(sURL,sTitle,notice){
			try{
				window.external.addFavorite(sURL, sTitle);
			}
			catch (e){
				try{
					window.sidebar.addPanel(sTitle, sURL, "");
				}
				catch (e){
					return notice;
				}
			}
		},
		chrome : /chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? + RegExp['\x241'] : undefined,
		core : function(){
			var type = (
				/*@cc_on!@*/ 0 ? 'msie' :
				window.chrome ? 'chrome' :
				window.opera ? 'opera' :
				window.MouseScrollEvent ? 'gecko' :
				window.WheelEvent ? 'safari' :
				'unknown'
			);
			return type
		},
		firefox : /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? + RegExp['\x241'] : undefined,
		ie : /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || + RegExp['\x241']) : undefined,
		isGecko : /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent),
		isWebkit : /webkit/i.test(navigator.userAgent),
		opera : /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ?  + ( RegExp["\x246"] || RegExp["\x242"] ) : undefined,
		safari : /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) ? + (RegExp['\x241'] || RegExp['\x242']) : undefined,
		version : function(){
			var Sys = {}
			 ,  ua = navigator.userAgent.toLowerCase()
			 ,  s 
			 ,  result;
			(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
			(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
			(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
			(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
			(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
			if (Sys.ie) {
				result = 'ie ' + Sys.ie ;
			}else if (Sys.firefox){
				result ='firfox ' + Sys.firefox ;
			}else if (Sys.chrome){ 
				result = 'chrome ' + Sys.chrome ;
			}else if (Sys.opera){ 
				result ='opera ' + Sys.opera ;
			}else if (Sys.safari){ 
				result = 'safari ' + Sys.safari ;
			}else{
				result = 'other browser' ;
			}
			return result	
		}
	}
}
/*--------------8<--------------8<-------Browser End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------Cookie Begin-------8<--------------8<-------------*/
if (typeof Z.cookie !== 'object'){
	Z.cookie = {
		del: function(name, path, domain){
			document.cookie = name + "=" +
				((path) ? "; path=" + path : "") +
				((domain) ? "; domain=" + domain : "") +
				"; expires=Thu, 01-Jan-70 00:00:01 GMT";
		},
		get: function(name){
			var v = document.cookie.match('(?:^|;)\\s*' + name + '=([^;]*)');
			return v ? decodeURIComponent(v[1]) : null;
		},
		set: function(name, value ,expires, path, domain){
			var str = name + "=" + encodeURIComponent(value);
			if (expires != null || expires != '') {
				if (expires == 0) {expires = 100*365*24*60;}
				var exp = new Date();
				exp.setTime(exp.getTime() + expires*60*1000);
				str += "; expires=" + exp.toGMTString();
			}
			if (path) {str += "; path=" + path;}
			if (domain) {str += "; domain=" + domain;}
			document.cookie = str;
		}
	};
}
/*--------------8<--------------8<-------Cookie End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------Date Begin-------8<--------------8<-------------*/
if (typeof Z.date !== 'object'){
	Z.date = {
		add : function(day,num){
			var val = day.valueOf();
			val = val + num*24*60*60*1000;
			return new Date(val)
		},
		getCNDay : function(day,Z_XQ){
			var cnDay = ['周日','周一','周二','周三','周四','周五','周六'],
				cnDay1 = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
			if(typeof Z_XQ == 'undefined' || Z_XQ == 'Z'){
				return cnDay[day.getDay()];
			}else{
				return cnDay1[day.getDay()];
			}
		},
		toString : function(day,format){
			if(typeof format == 'undefined'){
				format='yyyy-mm-dd';
			}
			var year = day.getFullYear();
			var month = day.getMonth()+1;
			var date = day.getDate();
		
			format = format.replace('yyyy',year);
			format = format.replace('mm',month);
			format = format.replace('dd',date);
			return format;
		}
			
	}
}
/*--------------8<--------------8<-------Date End-------8<--------------8<-------------*/	

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/	

/*--------------8<--------------8<-------DOM Begin-------8<--------------8<-------------*/
if (typeof Z.dom !== 'object'){

	var undefined = undefined;
	
	Z.dom = window.Z.dom = Z.$ = function (selector, context) {
		return new Z.dom.fn.init(selector,context) ;
	},

	
	Z.dom.fn = Z.dom.prototype = {                       
		length : 0 ,                                  
		init : function (selector) {
			selector = selector || document;
			var idExpr = /^#([\w-]+)$/,
				clsExpr = /^([\w\-]+)?\.([\w\-]+)/,
				tagExpr = /^([\w\*]+)$/,
				attrExpr = /^([\w\-]+)?\[([\w]+)(=(\w+))?\]/;
			
			var idTagExpr = /^#([\w-]+)\s([\w\*]+)$/,
				idClsExpr = /^#([\w-]+)\s([\w\-]+)?\.([\w\-]+)$/,
				tagClsExpr = /^([\w\*]+)\s([\w\-]+)?\.([\w\-]+)$/,
				clsTagExpr = /^([\w\-]+)?\.([\w\-]+)\s([\w\*]+)$/;
			
			
			function one(els){
				return els.length==1 ? els[0] : els;
			}
			function filter(all,attr,val){
				var reg = RegExp('(?:^|\\s+)' + val + '(?:\\s+|$)');
				function test(node){
					var v = attr == 'className' ? node.className : node.getAttribute(attr);
					if(v){
						if(val){
							if(reg.test(v)) return true;
						}else{
							return true;
						}
					}
					return false;
				}
				var i = -1, el, r = -1, res = [];
				while( (el = all[++i]) ){
					if(test(el)) {
						res[++r] = el;
					}
				}
				return res;			
			}
			if (typeof selector === "string") {
				var	ele,
					father = selector.split(" ")[0].slice(1),
					child = selector.split(" ")[1] ;
					
				if(idExpr.test(selector)){
					ele = document.getElementById(selector.substr(1,selector.length));
					if (ele) {
						this.length = 1;
						this[0] = ele;
					}
				}else if(idTagExpr.test(selector)){
					this.length = document.getElementById(father).getElementsByTagName(child).length;
					ele = document.getElementById(father).getElementsByTagName(child);
					
					for(var j=0;j<this.length;j++){
						this[j] = ele[j]	
					}
				}else if(idClsExpr.test(selector)){
					var ary = child.split('.'),
						tag = ary[0],
						cls = ary[1],
						len,
						all,
						els = [];
						
						if(document.getElementById(father).getElementsByClassName){	
							var res = document.getElementById(father).getElementsByClassName(cls);
							if(tag){
								for(var i=0,len=res.length; i<len; i++){
									res[i].tagName.toLowerCase()==tag && els.push(res[i]);
								}
								ele = els ;
								this.length = els.length;								
							}else{
								ele = res ;
								this.length = res.length;
							}
						}else{
							all = document.getElementById(father).getElementsByTagName(tag || '*');
							ele = filter(all, 'className', cls) ;
							this.length = filter(all, 'className', cls).length;	
						}

						for(var j=0;j<ele.length;j++){
							this[j] = ele[j] ;
						}
				
				}
				else if(clsExpr.test(selector)){
					var ary = selector.split('.'),
						tag = ary[0],
						cls = ary[1],
						len,
						all,
						els = [];
						
						if(document.getElementsByClassName){	
							var res = document.getElementsByClassName(cls);
							if(tag){
								for(var i=0,len=res.length; i<len; i++){
									res[i].tagName.toLowerCase()==tag && els.push(res[i]);
								}
								ele = els ;
								this.length = els.length;								
							}else{
								ele = res ;
								this.length = res.length;
							}
						}else{
							all = document.getElementsByTagName(tag || '*');
							ele = filter(all, 'className', cls) ;
							this.length = filter(all, 'className', cls).length;	
						}

						for(var j=0;j<ele.length;j++){
							this[j] = ele[j] ;
						}
				
				}else if(tagExpr.test(selector)){
					this.length = document.getElementsByTagName(selector).length;
					ele = document.getElementsByTagName(selector);
					
					for(var j=0;j<this.length;j++){
						this[j] = ele[j];
					}
				}
		
				this.context = document;
				this.selector = selector;			
				return this;
			
				}else if(typeof selector === "object"){	
					if (selector.length){
						this.length = selector.length;
						for(var j=0;j < this.length;j++){
							this[j] = selector[j] ;
						}
					}else{
						this.length = 1 ;
						this[0] = selector;			
					}
				}
		},
		addClass : function(cls){
			var me = this ;
			this.each(function() {
				if (! me.hasClass(cls)){
					this.className += " " + cls;
				}
			},arguments);
		},
		after : function(node){
			this.each(function() {
				this.parentNode.insertBefore(node,null)
			});
		},
		append : function(node){
			this.each(function() {
				this.insertBefore(node,null)
			});
		},
		attr : function(name,value){
			if(value){
				this.each(function() {
					this.setAttribute(name,value) ;
				});
			}else{
				this.each(function() {
					this.getAttribute(name) ;
				});
			}
		},
		before : function(node){
			this.each(function() {
				this.parentNode.insertBefore(node,this)
			});
		},
		clone : function(boo){
			var cloneElement = [];
			this.each(function() {
				cloneElement.push(this.cloneNode(boo))		
			});
			return Z.dom(cloneElement)
		},
		css : function (name, value) {
			this.each(function (name, value) {
				this.style[name] = value;
			},arguments);
		},
		data : function(name,value){
			if(value){
				this.each(function() {
					this.setAttribute("data-" + name,value) ;
				});
			}else{
				this.each(function() {
					this.getAttribute("data-" + name) ;
				});
			}
		},
		each : function (callback, args) { 
			return Z.dom.each(this, callback, args);
		},
		empty : function() {
			this.each(function() {
				this.innerHTML = "" ;
			})
		},
		eq : function(n){
			return Z.dom(this[n]);	
		},
		even : function(){
			var evenElement = [];
			for(var i=0;i<this.length;i+=2){
				evenElement.push(this[i])
			}
			return Z.dom(evenElement);		
		},
		fadeIn : function(speed){
			this.each(function () {
				Z.dom(this).fadeTo(1,speed)	
			})
		},
		fadeOut : function(speed){
			this.each(function () {
				Z.dom(this).fadeTo(0,speed)	
			})
		},
		fadeTo : function(toAlpha,speed){
			speed > 100 ? speed = 100 : speed = speed;
			this.each(function () {
				var me = this ,
					nowAlpha = 1;
				if(me.style.display == "none"){
					nowAlpha = 0;
				}
				var getOpacity = function(){
					if(Z.browser.ie){
						if(me.style.filter){
							nowAlpha = (me.style.filter).slice(14,-1)/ 100 ;
						}
					}else{
						if(me.style.opacity){
							nowAlpha = me.style.opacity;					
						}
					}
				}
				getOpacity();
				
				var setOpacity = function(transforAlpha){
					getOpacity();
					if(nowAlpha != toAlpha){
						if(Z.browser.ie){
							me.style.filter = "alpha(opacity=" +  transforAlpha * 100 + ")";
						}else{
							me.style.opacity = transforAlpha;	
						}
					}
				}
				var	timer = setInterval (function(){
					if(toAlpha == 1){
						Z.dom(me).show();
					}
					if ( nowAlpha < toAlpha){
						nowAlpha = nowAlpha - 0 + speed/1000;
						setOpacity(nowAlpha);
					}else if(nowAlpha > toAlpha){
						nowAlpha = nowAlpha - speed/1000;
						setOpacity(nowAlpha);
					}else{
						if(toAlpha == 0){
							Z.dom(me).hide();
						}
						clearInterval(timer);
					}
				},13);			
			})
		},
		first : function(){
			return Z.dom(this[0]);
		},
		getCss : function(address){
			this.each(function() {
				var css = document.createElement('link'); 
				css.type = 'text/css'; 
				css.rel = 'stylesheet';
				css.href = address;
				this.appendChild(css); 		
			});
		},
		getScript : function(address){
			this.each(function() {
				var script = document.createElement('script'); 
				script.type = 'text/javascript'; 
				script.src = address; 
				this.appendChild(script); 	
			});
		},
		gt : function(num){
			var gtElement = [];
			for(var i=num+1;i<this.length;i++){
				gtElement.push(this[i])
			}
			return Z.dom(gtElement);
		},
		hasClass : function(cls){
			var l = false;
			this.each(function() {
				if (this.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'))){
					l = true ;
				}else{
					l = false ;
				}
			},arguments)
			return l
		},
		hide : function(){
			this.each(function() {
				this.style.display = "none"; 
			})
		},
		html : function(str){
			this.each(function() {
				this.innerHTML = str; 
			})
		},
		last : function(){
			return Z.dom(this[this.length-1]);
		},
		lt : function(num){
			var ltElement = [];
			for(var i=num-1;i>=0;i--){
				ltElement.push(this[i])
			}
			return Z.dom(ltElement);
		},
		next : function(){
			var nextElement = [];
			var getNextElement = function(n){  
				var x=n.nextSibling;  
				if(x == null) return null;  
				while (x && x.nodeType!=1){  
					x=x.nextSibling;  
				}  
				return x ; 
			}
			this.each(function() {
				nextElement.push(getNextElement(this))		
			});
			return Z.dom(nextElement)
		},
		odd : function(){
			var oddElement = [];
			for(var i=1;i<this.length;i+=2){
				oddElement.push(this[i])
			}
			return Z.dom(oddElement);	
		},
		offset : function(direction){
			var num = [];
			this.each(function() {
				if(direction == "top"){
					num.push(this.offsetTop)
				}else if (direction == "left"){
					num.push(this.offsetLeft)	
				} 
			});
			return num
		},
		on : function(name, fun){
			var me = this ;
			this.each(function(i){
				Z.eventUtil.addHandler(me[i], name, fun);
        	});
        	return this;
    	},
		parent : function(){
			var parentElement = [];
			this.each(function() {
				parentElement.push(this.parentNode);
			});
			return Z.dom(parentElement);
		},
		prepend : function(node){
			this.each(function() {
				this.insertBefore(node,this.firstChild);
			});
		},
		prev : function(){
			var prevElement = [];
			var getPrevElement = function(n){  
				var x=n.previousSibling;  
				if(x == null) return null;  
				while (x && x.nodeType!=1){  
					x=x.previousSibling;  
				}  
				return x ; 
			} 
			this.each(function() {
				prevElement.push(getPrevElement(this))		
			});
			return Z.dom(prevElement)
		},
		remove : function() {
			this.each(function() {
				this.parentNode.removeChild(this);
			})
		},
		removeAttr : function(name){
			this.each(function() {
				this.removeAttribute(name) ;
			});
		},
		removeClass : function(cls){
			var me = this ;
			this.each(function() {
				if (me.hasClass(cls)){
					var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
					this.className = this.className.replace(reg,' ');
				}
			},arguments);
		},
		replace : function(node){
			this.each(function() {
				this.parentNode.replaceChild(node,this)
			});
		},
		show : function(){
			this.each(function() {
				this.style.display = "block"; 
			})
		},
		sibilings : function(tagName){
			var sibilingsElement = [],
				tagName = tagName || "*";
			this.each(function() {
				var thisSibilings = this.parentNode.getElementsByTagName(tagName);
				for(var n=0;n<thisSibilings.length;n++){
					if(thisSibilings[n] !== this){
						sibilingsElement.push(thisSibilings[n]);
					}
				}
			});			
			return Z.dom(sibilingsElement);
		},
		size: function () { 
			return this.length;
		}, 
		slice : function(start,end){
			var sliceElement = [];
			for(var i=start ;i<end;i++){
				sliceElement.push(this[i])
			}
			return Z.dom(sliceElement);
		},
		text: function (val) {
			if (val) {
				this.each(function () {
					if (typeof(this.innerText) != 'undefined'){
						this.innerText = val
					} else{
						this.textContent = val		
					}
				})
			}
			return this;
		},
		toggle : function(){
			this.each(function() {
				if (this.style.display == "none"){
					this.style.display = "block" ;
				}else{
					this.style.display = "none" ;	
				}
			})
		}
	}
	
	Z.dom.fn.init.prototype = Z.dom.prototype;	
	Z.dom.each = function (object, callback, args) {
		var i = 0, length = object.length;
		if (args === undefined) {
			for (var value = object[0];i < length && callback.call(value, i, value) !== false;value = object[++i]){}
		}else{
			for (; i < length; ) {
				if (callback.apply(object[i++], args) === false) {
					break;
				}
			}
		}
	}
}

/*--------------8<--------------8<-------DOM End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/	

/*--------------8<--------------8<-------EventUtil Begin-------8<--------------8<-------------*/
if (typeof Z.eventUtil !== 'object'){
	Z.eventUtil = {
		addHandler: function(elem,type,handler){
			if (elem.addEventListener) {
				elem.addEventListener(type, handler, false);
			}else if(elem.attachEvent){
				elem.attachEvent('on' + type, handler);
			}else{
				elem["on"+ type ] = handler;
			}
		},
		getEvent: function(event){
			return event ? event : window.event;
		},
		getTarget: function(event){
			return event.target || event.srcElement;
		},
		preventDefault: function(){
			if(event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue = false;
			}
		},
		removeHandler: function(elem,type,handler){
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handler, false);
			}else if(elem.detachEvent){
				elem.detachEvent('on'+ type,handler);
			}else{
				elem["on"+type] = handler;
			}
		},
		stopPropagation: function(event){
			if(event.stopProgation){
				event.stopProgation();
			}else{
				event.cancalBubble = true;
			}
		}
	}
}
/*--------------8<--------------8<-------EventUtil End-------8<--------------8<-------------*/	

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/	

/*--------------8<--------------8<-------Img Begin-------8<--------------8<-------------*/
if (typeof Z.img !== 'object'){
	Z.img = {
		isComplete : function(img){
			if (!img.complete) {
				return false;
			}
			if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
				return false;
			}
			return true
		},
		preload : function(argument){
			var imageArray = new Array(argument.length);
			for(var i=0; i < argument.length; i++){
				imageArray[i] = new Image;
				imageArray[i].src = argument[i];
			}
		}
	}
}
/*--------------8<--------------8<-------Img End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------Math Begin-------8<--------------8<-------------*/		
if (typeof Z.math !== 'object'){
	Z.math = {
		randomColor : function(){
			var color = Math.random(0, 0xFFFFFF);
			return '#' + ('000000' + color.toString(16)).slice(-6);
		},
		randomNum : function(begin,end){
			var c = end - begin + 1;	
			return Math.floor(Math.random() * c + begin);
		},
		sum : function(){
			var result = 0;
			for(var i=0;i<arguments.length;i++){
				result +=arguments[i]	
			}
			return result
		}
	}
}
/*--------------8<--------------8<-------Math End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/	

/*--------------8<--------------8<-------page Begin-------8<--------------8<-------------*/
if (typeof Z.page !== 'object'){
	Z.page = {
		getHeight : function () {
			var doc = document,
			body = doc.body,
			html = doc.documentElement,
			client = doc.compatMode == 'BackCompat' ? body : doc.documentElement;
			return Math.max(html.scrollHeight, body.scrollHeight, client.clientHeight);
		},
		getScrollLeft : function () {
			var d = document;
			return window.pageXOffset || d.documentElement.scrollLeft || d.body.scrollLeft;
		},		
		getScrollTop : function () {
			var d = document;
			return window.pageYOffset || d.documentElement.scrollTop || d.body.scrollTop ;
		},
		getViewHeight : function () {
			var doc = document,
			client = doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;
			return client.clientHeight;
		},
		getViewWidth : function () {
			var doc = document,
			client = doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;
			return client.clientWidth;
		},
		getWidth : function () {
			var doc = document,
			body = doc.body,
			html = doc.documentElement,
			client = doc.compatMode == 'BackCompat' ? body : doc.documentElement;
			return Math.max(html.scrollWidth, body.scrollWidth, client.clientWidth);
		},
		rollTo : function(endPointElement,speed){
			var nowScrollY = window.scrollY,
				endPoint = document.getElementById(endPointElement.substr(1)).offsetTop;
			if(nowScrollY != endPoint){
				speed ? speed : 50 ;
				for(var i = 1; i < speed; i*=10){
					if (speed/i < 10 ) {
						break
					}
				}	
				if(endPoint > speed){
					var	timer = setInterval (function(){
						if ( nowScrollY < endPoint - i || nowScrollY > endPoint + i){
							if(nowScrollY < endPoint){
								nowScrollY = nowScrollY + speed ;
							}else if(nowScrollY > endPoint){
								nowScrollY = nowScrollY - speed ;
							}
							window.scroll(0, nowScrollY);
						}else{
							clearInterval(timer);
						}
					},13);	
				}else{
					window.scroll(0, endPoint);	
				}
			}
		},
		rollToBottom : function(speed){
			var nowScrollY = window.scrollY,
				pageHeight = document.body.scrollHeight,
				timer = setInterval (function(){
					if ( nowScrollY <= pageHeight ){
						nowScrollY = nowScrollY + ( speed ? speed : 50 );
						window.scroll(0, nowScrollY);
					}else{
						clearInterval(timer);	
					}
				},13);
		},
		rollToTop : function(speed){
			var nowScrollY = window.scrollY;
			if(nowScrollY > 0 ){
				var	timer = setInterval (function(){
					if ( nowScrollY >=0 ){
						nowScrollY = nowScrollY - ( speed ? speed : 50 )  ;
						window.scroll(0, nowScrollY);
					}else{
						clearInterval(timer);
					}
				},13);
			}
		}
	}
}

/*--------------8<--------------8<-------page End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------platform Begin-------8<--------------8<-------------*/
if (typeof Z.platform !== 'object'){
	Z.platform = {
		isAndroid : /android/i.test(navigator.userAgent),
		isBlackBerry : /BlackBerry/i.test(navigator.userAgent),
		isIpad : /ipad/i.test(navigator.userAgent),
		isIphone : /iphone/i.test(navigator.userAgent),
		isMacintosh : /macintosh/i.test(navigator.userAgent),
		isMobile : !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/) || !!navigator.userAgent.match(/AppleWebKit/),
		isWindows : /windows/i.test(navigator.userAgent),
		isX11 : /x11/i.test(navigator.userAgent)
	}
}
/*--------------8<--------------8<-------platform End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/	

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------query Begin-------8<--------------8<-------------*/
if (typeof Z.query !== 'object'){
	Z.query = function(selector){
		if(document.querySelectorAll){
			return document.querySelectorAll(selector)	
		}
		var idExpr = /^#([\w-]+)$/,
			tagExpr = /^([\w\*]+)$/,
			idTagExpr = /^#([\w-]+)\s([\w\*]+)$/,
			clsExpr = /^([\w\-]+)?\.([\w\-]+)/,
			idClsExpr = /^#([\w-]+)\s([\w\-]+)?\.([\w\-]+)$/,
			clsTagExpr = /^([\w\-]+)?\.([\w\-]+)\s([\w\*]+)$/;
			
		var	ele,
			father = selector.split(" ")[0].slice(1),
			child = selector.split(" ")[1] ;
		
		if(idExpr.test(selector)){
			return document.getElementById(selector.slice(1))
		}else if(tagExpr.test(selector)){
			return document.getElementsByTagName(selector)
		}else if(idTagExpr.test(selector)){
			return document.getElementById(father).getElementsByTagName(child)
		}else if(clsExpr.test(selector)){
			var ary = selector.split('.'),
				tag = ary[0],
				cls = ary[1],
				len,
				all,
				els = [];
			if(document.getElementsByClassName){	
				var res = document.getElementsByClassName(cls);
				if(tag){
					for(var i=0,len=res.length; i<len; i++){
						res[i].tagName.toLowerCase()==tag && els.push(res[i]);
					}
					ele = els ;							
				}else{
					ele = res ;
				}
			}else{
				all = document.getElementsByTagName(tag || '*');
				ele = filter(all, 'className', cls) ;
			}	
			return ele
		
		}else if(idClsExpr.test(selector)){
			var ary = child.split('.'),
				tag = ary[0],
				cls = ary[1],
				len,
				all,
				els = [];
				
				if(document.getElementById(father).getElementsByClassName){	
					var res = document.getElementById(father).getElementsByClassName(cls);
					if(tag){
						for(var i=0,len=res.length; i<len; i++){
							res[i].tagName.toLowerCase()==tag && els.push(res[i]);
						}
						ele = els ;							
					}else{
						ele = res ;
					}
				}else{
					all = document.getElementById(father).getElementsByTagName(tag || '*');
					ele = filter(all, 'className', cls) ;
				}
				return ele	
		
		
		
		}
		function filter(all,attr,val){
			var reg = RegExp('(?:^|\\s+)' + val + '(?:\\s+|$)');
			function test(node){
				var v = attr == 'className' ? node.className : node.getAttribute(attr);
				if(v){
					if(val){
						if(reg.test(v)) return true;
					}else{
						return true;
					}
				}
				return false;
			}
			var i = -1, el, r = -1, res = [];
			while( (el = all[++i]) ){
				if(test(el)) {
					res[++r] = el;
				}
			}
			return res;			
		}	
	}
}
/*--------------8<--------------8<-------query End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------regExp Begin-------8<--------------8<-------------*/
if (typeof Z.regExp !== 'object'){
	Z.regExp = {
		isAdult : function(str){
			var s = str;
			if( Z.regExp.isIdcard(s)){
				var birthday = (new Date(s.slice(6,10),s.slice(10,12)-1,s.slice(12,14)))
				 ,  today = (new Date()) ;
				 return ( today - birthday > 18 * 365 * 24 * 60 * 60 * 1000 )
			}else{
				return false	
			}		
		},
		isChinese : function(str){
			var reg = /^[\u4E00-\u9FFF]+$/ ;
			return reg.test(str);
		},
		isDate : function(str){
			var reg = /^\d{4}-\d{1,2}-\d{1,2}$/;
			return reg.test(str);
		},
		isEmail : function(str){
			var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
			return reg.test(str);
		},
		isIdcard : function(str){
			var reg = /^(\d{14}|\d{17})(\d|[xX])$/;
			return reg.test(str);
		},
		isMobile : function(str){
			var reg = /^0*(13|14|15|18)\d{9}$/;
			return reg.test(str);
		},
		isQQ : function(str){
			var reg = /^[1-9][0-9]{4,}$/;
			return reg.test(str);
		},
		isTel : function(str){
			var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/ ;
			return reg.test(str);	
		},
		isURL : function(str){
    			var reg = /http:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/ ;
			return reg.test(str);
		}
	}
}
/*--------------8<--------------8<-------regExp End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------String Begin-------8<--------------8<-------------*/
if (typeof Z.string !== 'object'){
	Z.string = window.Z.string = function (str) {
		return new Z.string.fn.init(str) ;
	}
	Z.string.fn = Z.string.prototype = {                                                   
		init : function (str) {
			if(typeof str === "string"){	
				this[0] = str;	
			}
		},
		encrypt : function(num){
			var str = this[0],
				p = num || 0,
				idea = 0,
				output = '',
				i = 0,
				alterText = [],
				varCost = [],
				TextSize = str.length;	
			p = p + 1 ;
			for (i = 0; i < TextSize; i++) {
				idea = Math.round(Math.random() * 111) + 77;
				alterText[i] = str.charCodeAt(i) + idea;
				varCost[i] = idea;
			}
			for (i = 0; i < TextSize; i++) {
				output += String.fromCharCode(alterText[i], varCost[i]);
			}
			return output;
		},
		filterText : function(badWords) {
			var str = this[0],
				re = new RegExp(badWords,"g");  
			result = str.replace(re,"****"); 
			return(result);
		},
		isNotaNumber : function(){
			var str = this[0];
			return isNaN(str);
		},
		md5 : function(){
		 	var str = this[0];
			function RotateLeft(lValue, iShiftBits) {
				return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
			}
			function AddUnsigned(lX,lY) {
				var lX4,lY4,lX8,lY8,lResult;
				lX8 = (lX & 0x80000000);
				lY8 = (lY & 0x80000000);
				lX4 = (lX & 0x40000000);
				lY4 = (lY & 0x40000000);
				lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
				if (lX4 & lY4) {
					return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
				}
				if (lX4 | lY4) {
					if (lResult & 0x40000000) {
						return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
					} else {
						return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
					}
				} else {
					return (lResult ^ lX8 ^ lY8);
				}
			}
			function F(x,y,z) { return (x & y) | ((~x) & z); }
			function G(x,y,z) { return (x & z) | (y & (~z)); }
			function H(x,y,z) { return (x ^ y ^ z); }
			function I(x,y,z) { return (y ^ (x | (~z))); }
			function FF(a,b,c,d,x,s,ac) {
				a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
				return AddUnsigned(RotateLeft(a, s), b);
			};
		 
			function GG(a,b,c,d,x,s,ac) {
				a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
				return AddUnsigned(RotateLeft(a, s), b);
			};
			function HH(a,b,c,d,x,s,ac) {
				a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
				return AddUnsigned(RotateLeft(a, s), b);
			};
		 
			function II(a,b,c,d,x,s,ac) {
				a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
				return AddUnsigned(RotateLeft(a, s), b);
			};
			function ConvertToWordArray(string) {
				var lWordCount;
				var lMessageLength = string.length;
				var lNumberOfWords_temp1=lMessageLength + 8;
				var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
				var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
				var lWordArray=Array(lNumberOfWords-1);
				var lBytePosition = 0;
				var lByteCount = 0;
				while ( lByteCount < lMessageLength ) {
					lWordCount = (lByteCount-(lByteCount % 4))/4;
					lBytePosition = (lByteCount % 4)*8;
					lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
					lByteCount++;
				}
				lWordCount = (lByteCount-(lByteCount % 4))/4;
				lBytePosition = (lByteCount % 4)*8;
				lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
				lWordArray[lNumberOfWords-2] = lMessageLength<<3;
				lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
				return lWordArray;
			};
			function WordToHex(lValue) {
				var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
				for (lCount = 0;lCount<=3;lCount++) {
					lByte = (lValue>>>(lCount*8)) & 255;
					WordToHexValue_temp = "0" + lByte.toString(16);
					WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
				}
				return WordToHexValue;
			};
			function Utf8Encode(string) {
				string = string.replace(/\r\n/g,"\n");
				var utftext = "";
				for (var n = 0; n < string.length; n++) {
					var c = string.charCodeAt(n);
					if (c < 128) {
						utftext += String.fromCharCode(c);
					}
					else if((c > 127) && (c < 2048)) {
						utftext += String.fromCharCode((c >> 6) | 192);
						utftext += String.fromCharCode((c & 63) | 128);
					}
					else {
						utftext += String.fromCharCode((c >> 12) | 224);
						utftext += String.fromCharCode(((c >> 6) & 63) | 128);
						utftext += String.fromCharCode((c & 63) | 128);
					}
				}
				return utftext;
			};
			var x=Array();
			var k,AA,BB,CC,DD,a,b,c,d;
			var S11=7, S12=12, S13=17, S14=22;
			var S21=5, S22=9 , S23=14, S24=20;
			var S31=4, S32=11, S33=16, S34=23;
			var S41=6, S42=10, S43=15, S44=21;
			str = Utf8Encode(str);
			x = ConvertToWordArray(str);
			a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
			for (k=0;k<x.length;k+=16) {
				AA=a; BB=b; CC=c; DD=d;
				a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
				d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
				c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
				b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
				a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
				d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
				c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
				b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
				a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
				d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
				c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
				b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
				a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
				d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
				c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
				b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
				a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
				d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
				c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
				b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
				a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
				d=GG(d,a,b,c,x[k+10],S22,0x2441453);
				c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
				b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
				a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
				d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
				c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
				b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
				a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
				d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
				c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
				b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
				a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
				d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
				c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
				b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
				a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
				d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
				c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
				b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
				a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
				d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
				c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
				b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
				a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
				d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
				c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
				b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
				a=II(a,b,c,d,x[k+0], S41,0xF4292244);
				d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
				c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
				b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
				a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
				d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
				c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
				b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
				a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
				d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
				c=II(c,d,a,b,x[k+6], S43,0xA3014314);
				b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
				a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
				d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
				c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
				b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
				a=AddUnsigned(a,AA);
				b=AddUnsigned(b,BB);
				c=AddUnsigned(c,CC);
				d=AddUnsigned(d,DD);
			}
			var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
			return temp.toLowerCase();
		},
		noNumbers : function (){
			var str = this[0],
				searchForNumbers = /\d/;
			return (searchForNumbers.test(str) == false);
		}, 
		onlyNumbers: function(){
			var str = this[0],
				searchForNonNumbers = /\D+/;
			return (searchForNonNumbers.test(str) == false);
		},
		removeWhitespace: function() {
			var str = this[0],
				firstNonWhite = str.search(/\S/);
			if (firstNonWhite != -1){
				for (var i=str.length-1; i >= 0; i--){
					if (str.charAt(i).search(/\S/) != -1){
						str = str.substring(firstNonWhite, i+1);
						break;
					}
				}
			}
			return str;
		},
		toArray : function(){
			var str = this[0],
				args = [];
			
			for(var i=0; i<str.length; i++) {
				args.push(str[i]);
			}
			return args
		},
		unEncrypt : function(num){
			var str = this[0],
				p = num || 1;
			if (p > 0){
				p = p - 1;
				var	idea = 0,
					output = '',
					i = 0,
					alterText = [],
					varCost = [],
					TextSize = str.length;
				
				for (i = 0; i < TextSize; i++) {
					alterText[i] = str.charCodeAt(i);
					varCost[i] = str.charCodeAt(i + 1);
				}
				for (i = 0; i < TextSize; i = i+2) {
					output += String.fromCharCode(alterText[i] - varCost[i]);
				}
				return output;
			}		
		}
	}
	Z.string.fn.init.prototype = Z.string.prototype;
}
/*--------------8<--------------8<-------String End-------8<--------------8<-------------*/

/*--------------8<--------------8<-------------8<--------------8<-------------8<--------------8<-------------*/

/*--------------8<--------------8<-------URL Begin-------8<--------------8<-------------*/

if (typeof Z.url !== 'object'){
	Z.url = {
		getQueryString : function(){
			var result = [], queryString = location.search.substring(1)
			,	re = /([^&=]+)=([^&]*)/g, m;
			while (m = re.exec(queryString)) {
				result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
			}
			return result;
		},
		getUrlParm : function(name){
			var regexS = "[\\?&]"+name+"=([^&#]*)"
			, regex = new RegExp( regexS ) 
			, tmpURL = window.location.href 
			, results = regex.exec( tmpURL ) ;
			if( results == null ){
				return "" ;
			}else{
				return results[1]
			}
		},
		getUrlVars : function (){
			var vars = []
			  , hash
			  , hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			for(var i = 0; i < hashes.length; i++){
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			return vars;
		}
	}
}
/*--------------8<--------------8<-------URL End-------8<--------------8<-------------*/




/*--------------8<--------------8<-------The End-------8<--------------8<-------------*/


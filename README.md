  一个轻量级的js库，封装的常用的方法，就像一把实用的小扳手。
   
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

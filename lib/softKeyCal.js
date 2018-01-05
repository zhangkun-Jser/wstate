/**
 * @desc H5页面软键盘缩回/弹起回调
 * 监听window.innerHeight变化
 * @param {Function} downCb 当软键盘弹起后，缩回的回调
 * @param {Function} upCb 当软键盘弹起的回调
 */

const typeOf = require('../type/typeOf')
const softKeyCal = (downCb, upCb) => {
	let clientHeight = window.innerHeight
	downCb = typeOf(downCb) === 'Function' ? downCb : function () {}
	upCb = typeOf(upCb) === 'Function' ? upCb : function () {}
	window.addEventListener('resize', () => {
		let height = window.innerHeight
		if (height === clientHeight) {
			downCb()
		}
		if (height < clientHeight) {
			upCb()
		}
	})
}

module.exports = softKeyCal
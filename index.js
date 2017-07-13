/**
 * @file 将函数转化为异步函数
 * @author Y3G
 */

/**
 * 将函数转化为异步函数
 * @param  {Function} fn 输入函数
 * @return {Function} 输出函数
 * @export
 */
module.exports = function asyncCast (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('fn is NOT a function.')
  }

  function asyncFn () {
    var args = Array.prototype.slice.call(arguments)
    var self = this

    setTimeout(function () {
      fn.apply(self, args)
    }, 0)
  }

  // for debug
  asyncFn.originalFunction = fn

  return asyncFn
}

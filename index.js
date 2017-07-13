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
export default function asyncCast (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('fn is NOT a function.')
  }

  function asyncFn () {
    const args = Array.prototype.slice.call(arguments)
    setTimeout(() => fn.apply(this, args), 0)
  }

  // for debug
  asyncFn.originalFunction = fn

  return asyncFn
}

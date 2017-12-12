/**
 * 将函数转化为异步函数
 *
 * @author Y3G
 */

var task = require('./task')

/**
 * 将函数转化为异步函数
 *
 * @param {Function} fn 输入函数
 * @param {boolean} useMicroTask 是否使用MicroTask方式
 * @return {Function} 输出函数
 */
module.exports = function asynchronize (fn, useMicroTask) {
  if (typeof fn !== 'function') {
    throw new TypeError('fn is NOT a function.')
  }

  var ret = useMicroTask ? task.microTask(fn) : task.macroTask(fn)

  // for debug
  ret.originalFunction = fn

  return ret
}

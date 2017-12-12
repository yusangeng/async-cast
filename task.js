/**
 * 异步任务
 *
 * @author Y3G
 */

// FIXME: 会污染全局环境
require('setimmediate')

var g = typeof self === 'undefined' ? (typeof global === 'undefined' ? this : global) : self
var doc = g.document

function canUsePostMessage () {
  if (g.postMessage && !g.importScripts) {
    var postMessageIsAsynchronous = true
    var oldOnMessage = g.onmessage

    g.onmessage = function () {
      postMessageIsAsynchronous = false
    }

    g.postMessage('', '*')
    g.onmessage = oldOnMessage

    return postMessageIsAsynchronous
  }
}

var usingSetTimeout = true

// 以下判断方法和setimmediate.js相同, 目的是判断setImmediate是否为使用setTimout模拟
if ({}.toString.call(global.process) === '[object process]' ||
  canUsePostMessage() || g.MessageChannel ||
  (doc && 'onreadystatechange' in doc.createElement('script'))) {
  usingSetTimeout = false
}

function toAsync (fn, asyncFunction) {
  return function () {
    var args = [].slice.call(arguments)
    var self = this

    asyncFunction(function () {
      fn.apply(self, args)
    }, 0)
  }
}

function microTask (fn) {
  return toAsync(fn, setImmediate)
}

function macroTask (fn) {
  if (usingSetTimeout) {
    // setImmediate可能是用setTimeout模拟的, 这里做两次setTimeout, 可以保证次序
    return toAsync(function () {
      var args = [].slice.call(arguments)
      var self = this

      toAsync(fn, setTimeout).apply(self, args)
    }, setTimeout)
  }

  return toAsync(fn, setTimeout)
}

module.export = {
  microTask: microTask,
  macroTask: macroTask
}

# async-cast

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Npm Info](https://nodei.co/npm/async-cast.png?compact=true)](https://www.npmjs.com/package/async-cast)

将js函数转换为异步函数.

### 安装

```
npm install async-cast --save
```

### 使用

``` js
var asynchronize = require('async-cast')

function syncFn() {
  console.log('bar')
}

var asyncFn = asynchronize(syncFn)

asyncFn()
oonsole.log('foo')

// Micro Task 模式

var asyncFn = asynchronize(syncFn, true)

asyncFn()
oonsole.log('foo')

```
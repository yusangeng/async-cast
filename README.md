# async-cast

将js函数转换为异步函数.

### 安装

```
npm install async-cast --save
```

### 使用

``` js
var asyncCast = require('async-cast')

function syncFn() {
  console.log('bar')
}

asyncFn = asyncCast(syncFn)

asyncFn()
oonsole.log('foo')
```
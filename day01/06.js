'use strict'

function $require(id) {
    // 先找到文件，如果文件不存在，就报错
    // 读取文件
    const fs = require('fs')

    const path = require('path')
    const filename = path.join(__dirname, id)
    $require.cache = $require.cache || {}
    if ($require.cache[filename]) {
        return $require.cache[filename].exports
    }
    const dirname = path.dirname(filename)
    let code = fs.readFileSync(filename, 'utf8'); // 同步操作
    let module = {
        id: filename,
        exports: {}
    }
    let exports = module.exports
    // 执行代码,且必须放在一个私有空间里面
    code = `(function($require, module, exports, __dirname, __filename){
      ${code}  
    })($require, module, exports, dirname, filename)`

    eval(code)
    // 缓冲
    $require.cache[filename] = module
    // 返回值
    return module.exports
}

var module1 = $require('./module.js')

module1.say()
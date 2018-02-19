var fs = require('fs')
var path = require('path')

// 创建读取流
console.time('start');
var readIn = fs.createReadStream('D:\\web\\node\\day04\\markdown.css');
console.timeEnd('start');


readIn.on('data',(chuck)=>{
    // chuck是一个buffer字节数组
    console.log('读了一点');
})
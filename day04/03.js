// 拷贝大文件

var fs = require('fs')
var path = require('path')

// 创建读取流
console.time('start');
var readIn = fs.createReadStream('D:\\web\\node\\day04\\markdown.css');
// 创建一个写入流
var writeIn = fs.createWriteStream('D:\\web\\node\\day04\\2.css');
console.timeEnd('start');


readIn.on('data', (chuck) => {
    // chuck是一个buffer字节数组
    writeIn.write(chuck, (err) => {
        console.log('写了一点');
    })

})
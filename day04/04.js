// 拷贝大文件

var fs = require('fs')
var path = require('path')

// 创建读取流
var readIn = fs.createReadStream('D:\\web\\node\\day04\\markdown.css');
// 创建一个写入流
var writeIn = fs.createWriteStream('D:\\web\\node\\day04\\2.css');
var writeIn1 = fs.createWriteStream('D:\\web\\node\\day04\\3.css');

readIn.pipe(writeIn);// 通过pipe管道法就可以便捷的实现拷贝

readIn.pipe(writeIn1);
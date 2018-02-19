// 利用文件监视实现markdown转换

const fs = require('fs')
const path = require('path')
const marked = require('marked')
// require the module as normal
var browserSync = require("browser-sync");


// 获取目标文件
const target = path.join(__dirname, process.argv[2] || '../README.md')
var filename = target.replace(path.extname(target), '.html');
var indexpath = path.basename(filename);
// 开启一个服务
browserSync({
    server: path.dirname(target),
    index: indexpath
});
// 监视一下
fs.watchFile(target, {
    interval: 200 
}, (curr, prev) => {
    // 判断文件到底有没有变（修改事件)
    if (curr.mtime === prev.mtime) {
        return false;
    }
    // 读取文件转换为新的html
    fs.readFile(target, 'utf8', (err, content) => {
        if (err) {
            throw err;
        }
        var html = marked(content);
        // 注入CSS样式
        fs.readFile(path.join(__dirname, 'markdown.css'), 'utf8', (err, css) => {
            html = template.replace('{{{content}}}', html).replace('{{{styles}}}', css);
            // 这里的HTML就已经有内容 有样式

            fs.writeFile(filename, html, 'utf8', (err) => {
                // 通过browserSync发送一个消息给浏览器，流量器刷新
                browserSync.reload(indexpath);
                console.log('updated@' + new Date);
            });
        });
    })
})

var template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>{{{styles}}}</style>
</head>
<body>
  <div class="vs">
    {{{content}}}
  </div>
</body>
</html>
`;
const fs = require('fs');
const path = require('path')

function mkdirs (pathname, callback) {
    var root = path.dirname(module.parent.filename);
    // 判断是否是绝对路径
    pathname = path.isAbsolute(pathname) ? pathname : path.join(root , pathname);
    
    // 获取要创建的部分
    // pathname = pathname.replace(root , '');
    // \demo2\demo3
    // \demo2\demo3
    pathname = path.relative(root, pathname);
    // demo2\demo3
    // demo2\demo3
    console.log(pathname);
    var folders = pathname.split(path.sep);
    console.log(folders);

    try {
        var pre = '';
        folders.forEach((folder)=>{
            
            try {
                // 判断文件夹是否存在
                fs.statSync(path.join(root, pre, folder));
            } catch (error) {
                // 如果不存在就创建
                fs.mkdirSync(path.join(root, pre, folder));
            }
            pre = path.join(pre, folder);
        })
        callback && callback(null)
    } catch (error) {
        callback && callback(error)
    }
    
}

module.exports = mkdirs;
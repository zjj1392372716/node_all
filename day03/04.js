// 递归目录树

const fs = require('fs')
const path = require('path')

var target = path.join(__dirname, process.argv[2] || './')

function load(target, depth) {
    // depth  0 = ''
    // depth  1 = '│ '
    // depth  2 = '│ │ ' 
    var prefix = new Array(depth + 1).join('│ ');
    var dirinfos = fs.readdirSync(target);

    var dirs = [];
    var fils = [];

    dirinfos.forEach((info) => {
        var stats = fs.statSync(path.join(target, info));
        if (stats.isFile()) {
            fils.push(info);
        } else {
            dirs.push(info);
        }
    })
    dirs.forEach((dir) => {
        console.log(`${prefix}├─${dir}`);
        load(path.join(target, dir), depth + 1);
    })

    var count = fils.length - 1;
    fils.forEach(file => {
        var temp = count-- ? '├' : '└';
        console.log(`${prefix}${temp}─${file}`);
    });

}

load(target, 0);
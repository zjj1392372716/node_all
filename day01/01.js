var arr = [];
arr[arr.length] = `
╭~~~╮
(o^.^o)    
`;

arr[arr.length] = `
╭~~~╮
(o@.@o)    
`;

arr[arr.length] = `
╭~~~╮
(o~.~o)    
`;

arr[arr.length] = `
╭ ﹌╮
(o'.'o)    
`;

var current = 0;

var render = () => {
    // 清空
    process.stdout.write('\033[0f');
    process.stdout.write('\033[2J');
    //输出新的内容
    if(current === arr.length){
        current = 0;
    }
    process.stdout.write(arr[current++])
}
// 帧率为60
var fps = 10;

setInterval(render , 1000 / fps);
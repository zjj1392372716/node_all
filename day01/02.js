/**
 * 必须连续按两下 ctrl+c 退出
 * 
 */


// 无限循环

setInterval(function () {
    console.log(1);
}, 1000)

var flag = false;
// 检测按键

process.on('SIGINT', () => {
    if (flag) {
        console.log('退出');
        process.exit();
    } else {
        console.log('您按下了一次ctrl+c');
        flag = true;
        setTimeout(() => {
            flag = false;
        }, 1000)
    }

})
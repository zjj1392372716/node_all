console.log('开始');
process.nextTick(function() {
    console.log('nextTick 回调');
});
setTimeout(function(){
    console.log('新的EventLoop!')
    }, 2000);
console.log('当前EventLoop');
// 输出:
// 开始
// 当前EventLoop
// nextTick 回调
// 新的EventLoop!
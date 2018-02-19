var question = '请输入用户名';

var users = {
    'admin': 'admin',
    'user1': '11111',
    'user2': '22222'
};
var username = null;
var flag = false; //默认是用户名不正确
// 打印提示内容
process.stdout.write(question + '\n');

// 当有输入流的时候
process.stdin.on('data', (input) => {
    // input是对象类型，转为字符串后，必须要去掉回车回车换行的影响
    input = input.toString().trim(); // 处理输入
    if (!flag) {
        // 判断输入
        if (Object.keys(users).indexOf(input) === -1) {
            // 不存在
            process.stdout.write('用户名不存在' + '\n');
            process.stdout.write(question + '\n');
            flag = false;
        } else {
            username = input;
            process.stdout.write('请输入密码' + '\n');
            flag = true;
        }
    } else {
        //这里判断密码 
        if (users[username] === input) {
            process.stdout.write('登录成功' + '\n');
        } else {
            process.stdout.write('请输入密码' + '\n');
        }
    }

})
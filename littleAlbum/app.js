var express = require('express')
var app = express();
var router = require('./controller');

app.set("view engine", "ejs"); // 设置模板引擎

// 路由中间件

// 静态呈递
app.use(express.static("./public"));  //http://127.0.0.1:3000/static/1.txt这样可以读取到静态文件
app.use(express.static("./uploads"));

// 默认路由 
app.get('/', router.showIndex);
app.get('/:albumName', router.showAlbum);
app.get('/up', router.showUp);
app.post('/up',router.doPost);
// 最后的路由就是404了
app.use(function(req,res){
    res.render('err');
})


app.listen('3000',"127.0.0.1");
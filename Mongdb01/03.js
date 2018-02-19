var express = require('express');
var app = express();
var db = require('./modle/db.js');
var formidable = require('formidable');
var ObjectId = require('mongodb').ObjectID;

app.use(express.static('./public'));
app.set("view engine", "ejs");

// 默认显示留言列表
app.get('/',function(req,res,next){
    db.__getAllCount("liuyanben",function(count){
        res.render("index",{
            "pageamount" : Math.ceil(count / 4)
        });
    });
})

app.get('/du',function(req,res,next){
    var page = parseInt(req.query.page);

    db.__findByPage("liuyanben",{},{"sort":{"time": -1},"pageamount":4,"page":page},function(err,result){
        res.json({"result":result});
    });
})
// 发布留言
app.post('/submit',function(req,res,next)  {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields) {
        // 写入数据库
        db.__insertOne("liuyanben", {
            "name" : fields.name,
            "liuyan" : fields.liuyan,
            "time" : new Date()
        }, function (err, result) {
            if(err){
                res.send({"result":-1}); //-1是给Ajax看的
                return;
            }
            res.json({"result":1});
        });
    });
})

//删除
app.get("/shanchu",function(req,res,next){
    //得到参数
    var id = req.query.id;
    db.__DeleteMany("liuyanben",{"_id":ObjectId(id)},function(err,result){

        res.redirect("/");
    });
})

app.listen('3002');

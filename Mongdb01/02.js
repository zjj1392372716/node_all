// 测试modle中的db.jd

var express = require("express");
var app = express();
var db = require('./modle/db.js');


app.get('/', function (req, res) {
    // 使用
    db.__insertOne('student', {
        "name": "我是新数据",
        "sex": "不男不女"
    }, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(1);
    })
})

app.get('/read', function (req, res) {
    // 使用
    db.__find('student', {}, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result.length);
    })
});

app.get('/readbypage', function (req, res) {
    var page = parseInt(req.query.page);
    // 使用
    db.__findByPage('student', {}, {
        "pageamount": 2,
        "page": page
    }, function (err, result) {
        if (err) {
            throw err;
        }
        res.send(result);
        console.log(result.length);
    })
});

//删除
app.get("/shan", function (req, res) {
    // var borough = req.query.borough;
    db.__DeleteMany("student", {
        "name": "我是新数据"
    }, function (err, result) {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

// 修改
app.get("/xiugai",function(req,res){
    db.__UpdateMany(
        "student",              // 集合名字
        {
            "name":"zjj"       //  改什么
        },
        {
            $set: { name: "zmf" }     //  怎么改
        },
        function(err,result){   //  改完之后做什么
            if(err){
                console.log(err);
            }
            res.send(result);
        }
    );
});


app.listen(3003);
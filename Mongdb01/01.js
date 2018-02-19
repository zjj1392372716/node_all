/**
 * Created by Danny on 2015/9/25 9:16.
 */
var express = require("express");
var app = express();
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/myfirstdb';

//定义函数表达式，用于操作数据库并返回结果  
var insertData = function (db, callback) {
    //获得指定的集合   
    var collection = db.collection('student');
    //插入数据  
    var data = [{
        _id: 7,
        "name": 'rose',
        "age": 21
    }, {
        _id: 8,
        "name": 'mark',
        "age": 22
    }];
    collection.insert(data, function (err, result) {
        //如果存在错误  
        if (err) {
            console.log('Error:' + err);
            return;
        }
        //调用传入的回调方法，将操作结果返回  
        callback(result);
    });
};
app.get("/",function(req,res){
    res.send('success');
    MongoClient.connect(url, function (err, db) {
        console.log("连接成功！");
        //执行插入数据操作，调用自定义方法  
        insertData(db, function (result) {
            //显示结果  
            console.log(result);
            console.log(1);
            //关闭数据库  
            // db.close();
        });
    });
});

app.listen(3000);
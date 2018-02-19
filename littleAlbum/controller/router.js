var file = require('../models/file.js')
var formidable = require('formidable')
var path = require('path')
var fs = require('fs')
var sd = require('silly-datetime')


function showIndex(req, res, next) {
    file.getAllAlbum(function (err, AllAlbums) {
        if (err) {
            next(); //交给下面的中间件
            return;
        }
        res.render('index', {
            "album": AllAlbums
        });
    })
}

function showAlbum(req, res, next) {
    var albumName = req.params.albumName;
    file.getAllImages(albumName, function (err, imgArray) {
        if (err) {
            next(); //交给下面的中间件
            return;
        }
        res.render('album', {
            "albumname": albumName,
            "images": imgArray
        })
    })

}

function showUp(req, res, next) {
    file.getAllAlbum(function (err, AllAlbums) {
        if (err) {
            next();
            return;
        }
        console.log(AllAlbums)
        res.render("up", {
            "AllAlbums": AllAlbums
        });
    })

}

function doPost(req, res, next) {

    var form = new formidable.IncomingForm();

    form.uploadDir = path.normalize(__dirname + "/../tempup");
    form.parse(req, function (err, fields, files,next) {
        if (err) {
            next();
            return;
        }

        // 判断尺寸

        if (parseInt(files.files.size) >= 14) {
            res.send('图片尺寸过大');
            // 删除文件
            fs.unlink(files.files.path);
        }
        var time = sd.format(new Date(), 'YYYYMMDDHHmmss');
        var ran = parseInt(Math.random() * 8999 + 10000);
        var extname = path.extname(files.files.name);
        var oldpath = files.files.path;
        var newpath = path.normalize(form.uploadDir + '/../uploads/' + fields.select + '/' + time + ran + extname);
        // 改名
        fs.rename(oldpath, newpath, function (err) {
            if (err) {
                res.send('改名失败');
                return;
            }
            res.send('success');
        })

    });
    return;
}
module.exports = {
    showIndex,
    showAlbum,
    showUp,
    doPost
};
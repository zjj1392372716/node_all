const fs = require('fs')
const path = require('path')

var mkdirs = require('./mkdirs')

mkdirs('demo2/demo3');
mkdirs(path.join(__dirname , 'demo2/demo3'));
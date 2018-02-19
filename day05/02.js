var http = require('http')

http.get('http://www.baidu.com', (res) => {
    var total = '';
    res.on('data', (chunk) => {
        total += chunk.toString();
    });

    res.on('end', () => {
        console.log(total);
    })

})
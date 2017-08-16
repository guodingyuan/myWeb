// 引入hello模块:
var greet = require('./nodeStudy');

var s = 'Michael';
var a =  'Mike';

greet.hello(s); // Hello, Michael!
greet.good(a);  //Good morning, Mike!

//异步读文件
var fs = require('fs');

fs.readFile('mydata.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

//异步读图片
fs.readFile('banner1.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);//Buffer 
		//data.toString('utf-8')    Buffer -> String
        console.log(data.length + ' bytes');
    }
});


//写文件
var data = 'Hello, Node.js\n山无棱，天地合，乃敢与君绝！';
fs.writeFile('mydata.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Ok!');
    }
});


//获取文件的相关信息
fs.stat('mydata.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
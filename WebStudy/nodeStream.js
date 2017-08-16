//从文件流读取文本内容
var fs = require('fs');

// 打开一个流:
var rs = fs.createReadStream('myData.txt', 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

//以流的形式写入文件
var ws = fs.createWriteStream('myData2.txt', 'utf-8');
ws.write('仰天大笑出门去，我辈岂是蓬蒿人。\n');
ws.write('时人不识凌云木，直待凌云始道高。\n')
ws.write('END.');
ws.end();

var rs2=fs.createReadStream('myData2.txt', 'utf-8');
var ws2 = fs.createWriteStream('myData3.txt', 'utf-8');
//将两个输入流拼接输到一个输出流中
rs.pipe(ws2, { end: false });//默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入第二个参数
rs2.pipe(ws2);
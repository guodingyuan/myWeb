var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x + y;
}); // 25

var arr = [1, 3, 5, 7, 9];
function add(x,y,...rest){
    var sum=x+y;
    for(var a of rest)
       sum+=a
    return sum;
}
add.apply(null,arr);





var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x * 10 + y;
}); // 13579

var arr = [1, 3, 5, 7, 9];
arr.join().replace(/,/g,"");



function string2int(s) {
  var arr=[];  
  for(var i in s)
      arr.push(s[i])
  arr=arr.map(function(x){
      x-=0;
      x*=1;
      return x;
  })
  return arr.reduce(function(x,y){
      return x*10+y;
  })
}
// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        alert('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        alert('请勿使用Number()!');
    } else {
        alert('测试通过!');
    }
}
else {
    alert('测试失败!');
}





/*
说明：由于map()接收的回调函数可以有3个参数：callback(currentValue, index, array)，通常我们仅需要第一个参数，而忽略了传入的后面两个参数。不幸的是，parseInt(string, radix)没有忽略第二个参数，导致实际执行的函数分别是：
parseInt('0', 0); // 0, 按十进制转换
parseInt('1', 1); // NaN, 没有一进制
parseInt('2', 2); // NaN, 按二进制转换不允许出现2
可以改为r = arr.map(Number);，因为Number(value)函数仅接收一个参数。
*/
var arr = ['1', '2', '3'];
var r;
//---------------------------------------------
r = arr.map(parseInt);//结果是：[1, NaN, NaN]
//---------------------------------------------
var old=parseInt;
window.parseInt=function(str,radix){
   return old(str,0);
}
r = arr.map(parseInt);//结果是：[1, 2, 3]
//---------------------------------------------
r = arr.map(function(x){return parseInt(x);});//结果是：[1, 2, 3]
//---------------------------------------------
r = arr.map(Number);//结果是：[1, 2, 3]
//---------------------------------------------
alert('[' + r[0] + ', ' + r[1] + ', ' + r[2] + ']');







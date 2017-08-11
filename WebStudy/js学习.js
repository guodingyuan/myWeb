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
// ����:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        alert('����ʹ��parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        alert('����ʹ��Number()!');
    } else {
        alert('����ͨ��!');
    }
}
else {
    alert('����ʧ��!');
}





/*
˵��������map()���յĻص�����������3��������callback(currentValue, index, array)��ͨ�����ǽ���Ҫ��һ���������������˴���ĺ����������������ҵ��ǣ�parseInt(string, radix)û�к��Եڶ�������������ʵ��ִ�еĺ����ֱ��ǣ�
parseInt('0', 0); // 0, ��ʮ����ת��
parseInt('1', 1); // NaN, û��һ����
parseInt('2', 2); // NaN, ��������ת�����������2
���Ը�Ϊr = arr.map(Number);����ΪNumber(value)����������һ��������
*/
var arr = ['1', '2', '3'];
var r;
//---------------------------------------------
r = arr.map(parseInt);//����ǣ�[1, NaN, NaN]
//---------------------------------------------
var old=parseInt;
window.parseInt=function(str,radix){
   return old(str,0);
}
r = arr.map(parseInt);//����ǣ�[1, 2, 3]
//---------------------------------------------
r = arr.map(function(x){return parseInt(x);});//����ǣ�[1, 2, 3]
//---------------------------------------------
r = arr.map(Number);//����ǣ�[1, 2, 3]
//---------------------------------------------
alert('[' + r[0] + ', ' + r[1] + ', ' + r[2] + ']');







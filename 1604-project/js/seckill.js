// 切换模块
var seckills = document.querySelectorAll(".seckill");
var box = document.querySelectorAll(".seckill_box")
for (var i = 0; i < seckills.length; i++) {
  seckills[i].onclick = changeTab;
  seckills[i].setAttribute('index', i)
}
function changeTab() {
  for (var i = 0; i < seckills.length; i++) {
    seckills[i].className = '';
    box[i].className = '';
  }
  this.className = "current";
  var index = this.getAttribute('index');
  box[index].className = 'selected'
}

// 倒计时1
var h = document.getElementById('hour');
var m = document.getElementById('minute');
var s = document.getElementById('second');
count();
setInterval(count, 1000);
function count(){
  var date = +new Date();
  var target = +new Date('2111-6-18 00:00:00');
  var time = target - date;//毫秒 
  time /= 1000;
  var hour = Math.floor(time / 60 / 60 % 24);
  var minute = Math.floor(time / 60 % 60);
  var second = Math.floor(time % 60);
  h.innerText = hour;
  m.innerText = minute;
  s.innerText = second;
}
// 倒计时2
var h2 = document.getElementById('hour2');
var m2 = document.getElementById('minute2');
var s2 = document.getElementById('second2');
count2();
setInterval(count2, 1000);
function count2(){
  var date = +new Date();
  var target = +new Date('2111-6-18 04:00:00');
  var time = target - date;//毫秒 
  time /= 1000;
  var hour = Math.floor(time / 60 / 60 % 24);
  var minute = Math.floor(time / 60 % 60);
  var second = Math.floor(time % 60);
  h2.innerText = hour;
  m2.innerText = minute;
  s2.innerText = second;
}
// 倒计时3
var h3 = document.getElementById('hour3');
var m3 = document.getElementById('minute3');
var s3 = document.getElementById('second3');
count3();
setInterval(count3, 1000);
function count3(){
  var date = +new Date();
  var target = +new Date('2111-6-18 10:00:00');
  var time = target - date;//毫秒 
  time /= 1000;
  var hour = Math.floor(time / 60 / 60 % 24);
  var minute = Math.floor(time / 60 % 60);
  var second = Math.floor(time % 60);
  h3.innerText = hour;
  m3.innerText = minute;
  s3.innerText = second;
}

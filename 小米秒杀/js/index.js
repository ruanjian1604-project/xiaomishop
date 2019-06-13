// 切换模块
var seckills=document.querySelectorAll(".seckill");
var box=document.querySelectorAll(".seckill_box")
for(var i=0;i<seckills.length;i++){
  seckills[i].onclick=changeTab;
  seckills[i].setAttribute('index', i)
}
function changeTab() {
  for (var i = 0; i < seckills.length; i++) {
    seckills[i].className = '';
    box[i].className='';
  }
  this.className = "current";
  var index = this.getAttribute('index');
  box[index].className = 'selected'
}

// 倒计时
var h = document.getElementById('hour');
var m = document.getElementById('minute');
var s = document.getElementById('second');
count();
setInterval(count, 1000);
function count() {
  var date = +new Date();
  var target = +new Date('2019-6-13 00:00:00');
  var time = target - date;//毫秒 
  time /= 1000;
  var hour = Math.floor(time / 60 / 60 % 24);
  var minute = Math.floor(time / 60 % 60);
  var second = Math.floor(time % 60);
  h.innerText = hour;
  m.innerText = minute;
  s.innerText = second;
}
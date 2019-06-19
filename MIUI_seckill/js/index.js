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

// 倒计时
var h = document.getElementsByClassName('hour');
var m = document.getElementsByClassName('minute');
var s = document.getElementsByClassName('second');
count();
setInterval(count, 1000);
function count() {
  var date = +new Date();
  var target = new Array(+new Date('2019-6-20 11:30:00'), +new Date('2019-6-20 12:00:00'), +new Date('2019-6-20 16:00:00'));
  var time = new Array();
  for (var i = 0; i < target.length; i++) {
    time[i]=(target[i]-date)/1000;
    h[i].innerText = Math.floor(time[i] / 60 / 60);
    m[i].innerText = Math.floor(time[i] / 60 % 60);
    s[i].innerText = Math.floor(time[i] % 60);
  }
}

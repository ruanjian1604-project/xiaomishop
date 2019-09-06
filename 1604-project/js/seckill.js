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
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var strDate = date.getDate();
var h = document.getElementsByClassName('hour');
var m = document.getElementsByClassName('minute');
var s = document.getElementsByClassName('second');
var now = `${year}-${month}-${strDate}`;

count();
setInterval(count, 1000);
function count() {
  var date = +new Date();
  var target = new Array(+new Date(now + ' 11:30:00'), +new Date(now + ' 12:00:00'), +new Date(now + ' 16:00:00'));
  var time = new Array();
  for (var i = 0; i < target.length; i++) {
    time[i] = (target[i] - date) / 1000;
    if(time[i]>0){
      h[i].innerText = Math.floor(time[i] / 60 / 60);
      m[i].innerText = Math.floor(time[i] / 60 % 60);
      s[i].innerText = Math.floor(time[i] % 60);      
    }else{
      h[i].innerText ="00";
      m[i].innerText ="00";
      s[i].innerText ="00";     
    }
  }
}

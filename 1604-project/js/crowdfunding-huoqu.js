(function() {
    var html = document.documentElement;
    var hWidth = html.getBoundingClientRect().width;
    html.style.fontSize = hWidth / 15 + "px";
    console.log(hWidth);
})()
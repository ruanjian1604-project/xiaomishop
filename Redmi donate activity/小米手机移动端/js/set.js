function changeTab(num1) {
    var items = document.getElementsByClassName("items");
    var div = document.getElementsByClassName("clearfix");
    for (var i = 0; i < 4; i++) {
        div[i].style.display = "none";
        items[i].style.color = "black";

    }
    div[num1].style.display = "block";
    items[num1].style.color = "red";
}
window.onload = function() {

    var prev = document.querySelector(".left");
    var next = document.querySelector(".right");
    var oDiv = document.querySelector("#container");

    var aImg = document.querySelectorAll("img");
    var aList = document.querySelectorAll("ol li");
    var zIndex = 1; //记录层级
    var nowPic = 0; //记录当前图片下标
    var timer = null;

    oDiv.onmouseenter = function() { //鼠标移入，显示左右按钮
        sport(prev, { opacity: 100 });
        sport(next, { opacity: 100 });
        clearInterval(timer);
    }
    oDiv.onmouseleave = function() { //鼠标移除，显示左右按钮
        sport(prev, { opacity: 0 });
        sport(next, { opacity: 0 });
        auto();
    }

    //点击左右按钮切换图片
    next.onclick = function() {
        nowPic++;
        if (nowPic > aImg.length - 1) {
            nowPic = 0;
        }
        now();
    }

    prev.onclick = function() {
        nowPic--;
        if (nowPic < 0) {
            nowPic = aImg.length - 1;
        }
        now();
    }

    //小图标添加点击事件
    for (var i = 0; i < aList.length; i++) {
        aList[i].index = i;
        aList[i].onclick = function() {
            nowPic = this.index;
            now();
        }
    }

    //当前状态
    function now() {
        aImg[nowPic].style.zIndex = ++zIndex;
        for (var i = 0; i < aList.length; i++) {
            aList[i].style.color = "black";
            aList[i].style.backgroundColor = "rgba(255,255,255,0.5)";
        }
        aList[nowPic].style.color = "white";
        aList[nowPic].style.backgroundColor = "rgba(255,0,0,0.5)";
    }

    //自动轮播
    function auto() {
        timer = setInterval(function() {
            nowPic++;
            if (nowPic > aImg.length - 1) {
                nowPic = 0;
            }
            now();

        }, 2000);
    }

    auto();
}
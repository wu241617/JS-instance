//js中运动函数的封装
function getStyle(obj, attr) { //获取css的样式值
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

function sport(obj, json, fn) {
    //清除上一次定时器，开启新的计时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var stop = true; //json中每个元素都达到目标值的变量
        for (var attr in json) {
            //1,获取初值
            var cur = 0; //当前值
            if (attr == "opacity") {
                cur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                cur = parseInt(getStyle(obj, attr)); //转成数字，去掉单位
            }
            //设置速度
            var speed = (json[attr] - cur) / 8; //目标值减去初始值
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //检测停止
            if (json[attr] != cur) {
                stop = false;
            }
            //运动
            if (attr == "opacity") {
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
            } else {
                obj.style[attr] = cur + speed + "px";
            }
        }
        if (stop) {
            clearInterval(obj.timer);
            fn && fn();
        }

    }, 100);
}
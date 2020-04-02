window.onload = function() {
	var wrap = document.getElementById("wrap");
	pic = document.getElementById("pic");//获取图片列表
	list = document.getElementById("list").getElementsByTagName("li");//获取小图标列表
	index = 0;//标注起始图片位置
	timer = null;

	if (timer) {//验证是否有定时器开启，有的话清空
		clearInterval(timer);//清空定时器
		timer = null;
	}
	timer = setInterval(autoplay, 1000);//设置一个定时器

	function autoplay() {//定时器实现函数
		index++;
		if (index >= list.length) {//如果到达最后一张图片，切换到第一张
			index = 0;
		}
		changeoptions(index);//改变图片位置的函数
	}

	wrap.onmouseover = function() {//鼠标移上事件
		clearInterval(timer);//关闭定时器
	}

	wrap.onmouseout = function() {//鼠标移去事件
		timer = setInterval(autoplay, 2000);//开启定时器
	}
	for (var i = 0; i < list.length; i++) {//小图标的事件
		list[i].id = i;
		list[i].onmouseover = function() {
			clearInterval(timer);
			changeoptions(this.id);
		}
	}

	function changeoptions(curindex) {//改变图片位置，参数为标记的第几张图片
		for (var j = 0; j < list.length; j++) {
			list[j].className = "";
			pic.style.top = 0;
		}
		list[curindex].className = "active";
		pic.style.top = -curindex * 400 + "px";
		index = curindex;
	}
}

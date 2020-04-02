function ajax(url,fn){
	//初始化一个XMLHttpRqyest 请求对象
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	
	xhr.onreadystatechange = function(){//请求状态
		if(xhr.readyState == 4 && xhr.status == 200){
			fn && fn(xhr.responseText);//回调函数
		}
	} 
	 
	 //连接请求
	xhr.open("GET",url,true);
	
	//发送请求
	xhr.send();
}
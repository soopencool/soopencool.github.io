
function startMove(obj, json, func) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var isStop = true;
		//     		遍历json中的数据
		for(var attr in json) {
			var icur = 0;
			if(attr === "opacity") {
				icur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				icur = parseInt(getStyle(obj, attr));
			}

			//设置速度
			var speed = (json[attr] - icur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//      运动跟停止分开
			//   检测终止,如果没达到就isStop = false
			if(icur != json[attr]) {
				isStop = false;
			}

			if(attr === "opacity") {
				obj.style[attr] = (icur + speed) / 100;
			} else {
				obj.style[attr] = parseInt(getStyle(obj, attr)) + speed + "px";
			}

		}

		//     	等所有属性到遍历完之后关闭定时器	
		if(isStop) {
			clearInterval(obj.timer);
			//      	 上一个操作完成立即执行下一个操作
			if(func) { //外界有传函数就执行,没有就不执行
				func();
			}
		}

	},30);
}

function getStyle(obj, attr) {
	//第一个参数:具体的元素
	//	 第二个参数:具体属性 ,例如width等
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}	

//导航
var navLis = document.querySelectorAll(".header .nav li");
var navH2 = document.querySelectorAll(".header .nav li h2");
var navRun = navLis[6];
var nav = document.getElementsByClassName("nav")[0];

for(var i = 0;i < navLis.length-1;i++){
	navLis[i].onmouseover =navH2[i].onmouseover = function(){
		moveNav(navRun,this.offsetLeft);
		this.style.color = "gray";
	}
	navH2[i].onmouseout = function(){
		this.style.color = "black";
	}	
}
	nav.onmouseover = function(){
		navRun.style.display = "block";			
}
	nav.onmouseout = function(){
//		navRun.style.display = "none";		
}
//导航样的滚动红条设置弹性运动
var navSpeed = 0;
var navTime = 0;
function moveNav(obj,target){
	clearInterval(navTime);
	navTime = setInterval(function(){
		navSpeed += (target-obj.offsetLeft)/8;
		navSpeed *= 0.7;
		if(Math.abs(navSpeed)<1&&Math.abs(obj.offsetLeft-target)<1){
			clearInterval(navTime);
			obj.style.left = target + "px";
		}else{
			obj.style.left = obj.offsetLeft + navSpeed + "px";;
		}	
	},30);	
}

//回到顶部
function backTop(){
	var timeTop = null;
	//获取点击的图片
	var btnImg = document.getElementsByClassName("back_top")[0];
	btnImg.onclick = function(){
		timeTop = setInterval(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var speed = Math.floor(scrollTop/6);
		if(scrollTop < 10){
			clearInterval(timeTop);
		}else{
			document.documentElement.scrollTop = document.body.scrollTop = scrollTop - speed;
		}
		
	},50);
		
	}
}

//字体调整
//window.onresize = function(){
// var winW = document.documentElement.clientWidth || document.body.clientWidth;
// var bodySize = document.getElementsByTagName("body")[0]; //1618-1890正常 
// console.log(winW);
// if(winW <=1618 ){
// 	 bodySize.style.fontSize = 10 + "px";
// }
//  if(winW <=1418 && winW>1218){
// 	 bodySize.style.fontSize = 13 + "px";
// }
// if(winW <=1218 && winW>1018){
// 	 bodySize.style.fontSize = 12 + "px";
// }	
// if(winW <=1018){
// 	 bodySize.style.fontSize = 10 + "px";
// }	
//};

	
	

	



	
	
	
	















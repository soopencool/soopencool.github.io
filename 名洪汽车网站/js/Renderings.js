window.onload = function() {
	//轮播图
	var moveImg = document.querySelectorAll(".content .big_img01")[0];
	var bigImgs = document.querySelectorAll(".content .big_img01 img");
	var lis = document.querySelectorAll(".big_img ul li");

	var bigX = bigImgs[0].offsetWidth;

		setInterval(function() {
			var moveX = moveImg.offsetLeft;
			if(Math.abs(moveX) >= (bigImgs.length - 1) * Math.abs(bigX)) {
				bigX *= -1;	
			}
			if(moveX >= 0) {
				bigX *= -1;   
			}
			
			startMove(moveImg, {left: (moveX + bigX)});
			movePoint();
			function movePoint(){
				for(var i = 0;i < lis.length;i++){
		        if (Math.abs(moveX+bigX) == i*(bigImgs[0].offsetWidth)) {
			        lis[i].style.background = "yellow";
		        } else{
			        lis[i].style.background = "gray";
		        }	
	        }
				
			}
			
		}, 3000);
         
	
	
	//瀑布流
	var small = document.getElementsByClassName("small")[0];
	function createDiv(n){
		for(var i = 0;i < n;i++){
			var vesselDiv = document.createElement("div");//容器装图片
			vesselDiv.className = "vessel_div";
			
			var markDiv = document.createElement("div");//蒙板
			markDiv.innerHTML = "图片标题";//蒙板图片标题
			markDiv.className = "mark_div";
			
			var waterfallImg = document.createElement("img");//图片
		    waterfallImg.src = "img/Renderings/drawing-small"+(i+1)+".jpg";//图片地址
		    waterfallImg.className = "waterfall_img";
		    
			var enlarge = document.createElement("img");//放大图标
			enlarge.src = "img/Renderings/magnifier.png";//放大图标地址
			enlarge.className = "enlarge";
			
		    vesselDiv.style.height = randomH(220,300) + "px";//随机产生一个高度
		    
		    markDiv.appendChild(enlarge);
		    vesselDiv.appendChild(markDiv);
		    vesselDiv.appendChild(waterfallImg);
		    small.appendChild(vesselDiv);
		}

	}
	createDiv(9);
	
	function randomH(min,max){
		return Math.round(Math.random()*(max-min)+min)
	}
	
	var arrH = [];
	changeDiv();
	function changeDiv(){
		var smallW = small.clientWidth;
		var divs = document.querySelectorAll(".content .small .vessel_div");
		var num = Math.floor(smallW/(divs[0].offsetWidth +20));
		var center = (smallW-(num*(divs[0].offsetWidth+20)-20))/2
		var markDivs = document.querySelectorAll(".small .vessel_div .mark_div");
		for(var i = 0;i < divs.length;i++){
			if(i<num){
				divs[i].style.left = center + i*(divs[0].offsetWidth+20) +"px";
				divs[i].style.top = 0;
				arrH[i] = divs[i].offsetHeight + 20;
			}else{
				var min = findMinH(arrH);
				divs[i].style.left = center + min*(divs[0].offsetWidth+20) +"px";
				divs[i].style.top = arrH[min] + "px";
				arrH[min] += divs[i].offsetHeight + 20;
				small.style.height = arrH[min] +"px";
			}
			//鼠标移入显示蒙板	    
		    markDivs[i].onmouseover = function(){
			    startMove(this,{opacity:60});
		    }
		    //鼠标移出蒙板消失
		    markDivs[i].onmouseout = function(){
			    startMove(this,{opacity:0});
		    }
			
		}	
	}
	
	function findMinH(arrH){
        var index = 0;
        index = arrH.indexOf(Math.min.apply(null,arrH));
        return index;
    }
	
	window.onresize = function(){
		changeDiv();
		
		
	};	
	
//	window.onresizeend=function(){
//		var k=moveImg.offsetLeft/bigX;
//		moveImg.style.left=k*bigImgs[0].clientWidth;
//	}

	window.onscroll = function(){
		var sTop = document.documentElement.scrollTop || document.body.scrollTop;
		var winH = document.documentElement.clientHeight;
		if(sTop+winH+20 >= arrH[0]+1040+480){
            	createDiv(9);
            	changeDiv();
        }
		
		
	};
	
	//回到顶部
	backTop();
	

};
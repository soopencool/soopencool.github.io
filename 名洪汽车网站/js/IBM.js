window.onload = function(){
	var buildings = document.querySelectorAll(".buildings");
//	var h3 = document.querySelectorAll(".buildings h3");
//	var p = document.querySelectorAll(".buildings p");
	var smallImg = document.querySelectorAll(".buildings>div");
	
	window.onscroll =function(){
		var sTop = document.body.scrollTop || document.documentElement.scrollTop;
		var winH = document.documentElement.clientHeight;
				if(navigator.userAgent.indexOf("Firefox")>-1){
					window.addEventListener("DOMMouseScroll",wheelFunc);
				}else{
					window.onmousewheel = wheelFunc;
				}
				
		function wheelFunc(e){
				for(var i = 0;i < buildings.length;i++){
				 	var ev = e || event;
				 	var  dir  =ev.wheelDelta||ev.detail;
				 	if(dir < 0){
					if(sTop+68>=buildings[i].offsetTop&&sTop<=buildings[i].offsetTop+buildings[i].offsetHeight){
				        startMove(buildings[i],{opacity:80});
			            startMove(smallImg[i],{opacity:100});
//			            startMove(p[i],{opacity:100});	
			        }else{
				        startMove(buildings[i],{opacity:30});
			            startMove(smallImg[i],{opacity:0});
//			            startMove(p[i],{opacity:0});
			        }
			        
				}else{
					if(sTop<=buildings[i].offsetTop&&sTop>=buildings[i].offsetTop-buildings[i].offsetHeight){
				 
				        startMove(buildings[i],{opacity:80});
			            startMove(smallImg[i],{opacity:100});
//			            startMove(p[i],{opacity:100});	
			        }else{
				        startMove(buildings[i],{opacity:30});
			            startMove(smallImg[i],{opacity:0});
//			            startMove(p[i],{opacity:0});
			        }
			        if(sTop==0){
			        	    startMove(buildings[i],{opacity:30});
			            startMove(smallImg[i],{opacity:0});
//			            startMove(p[i],{opacity:0});
			        }
					
				}	
		    }	
	    }

	}
	//回到顶部
	backTop();
		
	
};

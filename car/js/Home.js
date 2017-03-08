window.onload = function(){
	var imgs = document.querySelectorAll(".service .gray01");
	var fonts = document.querySelectorAll(".service div div");
	var secondH = document.querySelector(".service_two");
	var secondImgH = document.querySelector(".color_img02");
	var secondText = document.querySelector(".second_text");
    change();
	function change(){
		if(secondImgH.offsetHeight>secondText.offsetHeight){
			secondH.style.height = secondImgH.offsetHeight + "px";
		}else{
			secondH.style.height = secondText.offsetHeight + "px" ;
		}
	}
	window.onresize = function(){
		change();
	}
	
	//图片的颜色
	var icur = 0;
	for(var i = 0;i < imgs.length;i++){

		imgs[i].index = i;
		fonts[i].index = i;
		imgs[i].onmouseover = fonts[i].onmouseover = function(){
			icur = this.index;
			startMove(imgs[icur],{opacity:0});
			startMove(fonts[icur],{opacity:100});
		};
		imgs[i].onmouseout = fonts[i].onmouseout = function(){
			startMove(imgs[icur],{opacity:100});
			startMove(fonts[icur],{opacity:30});
		};
	}
	
}

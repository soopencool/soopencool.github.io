window.onload = function(){
	//大播放视频
	var myBigVideo = document.querySelector(".big_audio .myBigVideo");
	var bigPlay = document.querySelector(".big_audio .big_play");
	myBigVideo.onmouseover = bigPlay.onmouseover = function(){
		startMove(bigPlay,{opacity:100});
	}
	myBigVideo.onmouseout = bigPlay.onmouseout = function(){
		startMove(bigPlay,{opacity:0});
	}
	bigPlay.onclick = function(){
		if(myBigVideo.paused){
			myBigVideo.play();
		}else{
			myBigVideo.pause();
		}
	}
	
	//小播放5个视频
	var mySmallVideo = document.querySelectorAll(".small_audio .mySmallVideo");
	var smallPlay = document.querySelectorAll(".small_audio .small_play01");
	var shadow = document.querySelectorAll(".small_audio>div");
	var icur = 0;
	for(var i = 0;i < mySmallVideo.length;i++){
		smallPlay[i].index = i;
		mySmallVideo[i].index = i;
		shadow[i].index = i;
		//显示播放按钮
		mySmallVideo[i].onmouseover = smallPlay[i].onmouseover = shadow[i].onmouseover = function(){
			icur = this.index;
		    startMove(smallPlay[icur],{opacity:100});
		    shadow[icur].style.boxShadow = "1px 1px 20px 0 black";
	    }
		//隐藏播放按钮
	    mySmallVideo[i].onmouseout = smallPlay[i].onmouseout = shadow[i].onmouseout = function(){
	       	icur = this.index;
		    startMove(smallPlay[icur],{opacity:0});
		    shadow[icur].style.boxShadow = "";
	    }
		//点击播放
		smallPlay[i].onclick = function(){
			icur = this.index;
			if(mySmallVideo[icur].paused){
			    mySmallVideo[icur].play();
		    }else{
			    mySmallVideo[icur].pause();
		}
		};
		
		
	}
	
	//回到顶部
	backTop();	
};

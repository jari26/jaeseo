// JavaScript Documents

/* main effect */
window.onmouseover=function(e){
	if(e.target.id.toLowerCase()=="code"){
		e.target.style.color="white";
		e.target.style.textDecoration="underline lawngreen 1.5%";
		document.getElementById("think").style.opacity=0.2;
		document.getElementById("about").style.opacity=0.2;
		$('body').css({"background":"linear-gradient(336deg,rgba(255,0,0,.8), rgba(255,0,0,0) 100%), linear-gradient(217deg,rgba(0,255,0,.8), rgba(0,255,0,0) 100%), linear-gradient(127deg,rgba(0,0,255,.8), rgba(0,0,255,0) 100%)","background-color":"violet", "display":"none"});
		$(document).ready(function(){
			$('body').fadeIn(700);
		});
		$('.invisible').css({"visibility":"hidden"});
	}
	else if(e.target.id.toLowerCase()=="think"){
		e.target.style.color="white";
		e.target.style.textDecoration="underline lawngreen 1.5%";
		document.getElementById("code").style.opacity=0.2;
		document.getElementById("about").style.opacity=0.2;
		$('body').css({"background":"linear-gradient(127deg, rgba(255,0,0,.8), rgba(255,0,0,0) 100%),linear-gradient(217deg, rgba(0,255,0,.8), rgba(0,255,0,0) 100%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 100%)","background-color":"rgba(55,215,242,1.00)", "display":"none"});
		$(document).ready(function(){
			$('body').fadeIn(700);
		});
		$('.invisible').css({"visibility":"hidden"});
	}
	else if(e.target.id.toLowerCase()=="about"){
		e.target.style.color="white";
		e.target.style.textDecoration="underline lawngreen 1.5%";
		document.getElementById("code").style.opacity=0.2;
		document.getElementById("think").style.opacity=0.2;
		$('body').css({"background":"linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 100%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 100%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 100%)","background-color":"royalblue", "display":"none"});
		$(document).ready(function(){
			$('body').fadeIn(700);
		});
		$('.invisible').css({"visibility":"hidden"});
	}
	else
		return;
}
window.onmouseout=function(e){
	if(e.target.id.toLowerCase()=="code"){
		e.target.style.color="black";
		document.getElementById("think").style.opacity=1.0;
		document.getElementById("about").style.opacity=1.0;
		document.getElementById("code").style.textDecoration="none";
		$('body').css({"background":"aliceblue", "display":"none"});
		$(document).ready(function(){
			$('body').fadeIn(0);
		});
		$('.invisible').css({"visibility":"visible"});
	}
	else if(e.target.id.toLowerCase()=="think"){
		e.target.style.color="black";
		document.getElementById("code").style.opacity=1.0;
		document.getElementById("about").style.opacity=1.0;
		document.getElementById("think").style.textDecoration="none";
		$('body').css({"background":"aliceblue", "display":"none"});
		$(document).ready(function(){
			$('body').fadeIn(0);
		});
		$('.invisible').css({"visibility":"visible"});
	}
	else if(e.target.id.toLowerCase()=="about"){
		e.target.style.color="black";
		document.getElementById("code").style.opacity=1.0;
		document.getElementById("think").style.opacity=1.0;
		document.getElementById("about").style.textDecoration="none";
		$('body').css({"background":"aliceblue", "display":"none"});
		$(document).ready(function(){
			$('body').fadeIn(0);
		});
		$('.invisible').css({"visibility":"visible"});
	}
	else
		return;
}
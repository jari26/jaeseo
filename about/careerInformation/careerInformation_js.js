// JavaScript Document
$(document).ready(function(){
	window.onload=function(){
		$('.navigation').css({"transform":"translateX(0px)"});
		$('.mainImage').css({"transform":"translateX(8px)"});
	}
		$('main, footer').css({"display":"block"});
});

window.onmouseover=function(e){
	if(e.target.id.toLowerCase()=="minority"){
		e.target.style.display="none";
		$('#minority').fadeIn(300);
	}
	if(e.target.id.toLowerCase()=="web"){
		e.target.style.display="none";
			$('#web').fadeIn(300);
	}
	if(e.target.id.toLowerCase()=="deliberate"){
		e.target.style.display="none";
			$('#deliberate').fadeIn(300);
	}
	if(e.target.id.toLowerCase()=="peace"){
		e.target.style.display="none";
			$('#peace').fadeIn(300);
	}
	else
		return;
}

$(window).scroll(function(){
	if($(this).scrollTop() >= Math.ceil($('#minority_text').offset().top)){
		$('#minority_image1').css({"transform":"translateX(0px)"});
		$('#minority_image2').css({"transform":"translateX(0px)"});
	}
	if($(this).scrollTop() >= Math.ceil($('#web_text').offset().top)){
		$('#symbol').css({"transform":"translateY(0px)"});
	}
	if($(this).scrollTop() >= Math.ceil($('#subImage2').offset().top)){
		$('#interview').css({"transform":"translateX(-100%)"});
	}
	if($(this).scrollTop() >= Math.ceil($('#peace_text').offset().top)){
		$('#activity1').css({"transform":"translateX(0px)"});
		$('#activity2').css({"transform":"translateX(0px)"});
	}
	if($(this).scrollTop() < Math.ceil($('#minority_text').offset().top)){
		$('#minority_image1').css({"transform":"translateX(-700px)"});
		$('#minority_image2').css({"transform":"translateX(1000px)"});
	}
	if($(this).scrollTop() < Math.ceil($('#web_text').offset().top)){
		$('#symbol').css({"transform":"translateY(400px)"});
	}
	if($(this).scrollTop() < Math.ceil($('#subImage2').offset().top)){
	//무한루프 걸어주는 것 해결 요망
	for ( var i=0; i++; ){
	$('#interview').css({"transform":"transitionX(0px)"});
	$('#interview').css({"transform":"transitionX(2000px)"});
	}
	}
	if($(this).scrollTop() < Math.ceil($('#peace_text').offset().top)){
		$('#activity1').css({"transform":"translateX(-700px)"});
		$('#activity2').css({"transform":"translateX(1000px)"});
	}
});
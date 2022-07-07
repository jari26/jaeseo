// JavaScript Document

window.onmouseover=function(e){
	if(e.target.id.toLowerCase()=="first"){
		e.target.style.display="none";
		e.target.style.background="linear-gradient(to top, aqua 50%, transparent 50%)";
		$(document).ready(function(){
			$('#first').fadeIn(400);
		});
	}
	else if(e.target.id.toLowerCase()=="second"){
		e.target.style.display="none";
		e.target.style.background="linear-gradient(to top, #FFE400 50%, transparent 50%)";
		$(document).ready(function(){
			$('#second').fadeIn(400);
		});
	}
	else if(e.target.id.toLowerCase()=="third"){
		e.target.style.display="none";
		e.target.style.background="linear-gradient(to top, violet 50%, transparent 50%)";
		$(document).ready(function(){
			$('#third').fadeIn(400);
		});
	}
	else
		return;
}

window.onmouseout=function(e){
	if(e.target.id.toLowerCase()=="first"){
		e.target.style.display="none";
		e.target.style.background="none";
		$(document).ready(function(){
			$('#first').show();
		});
	}
	else if(e.target.id.toLowerCase()=="second"){
		e.target.style.display="none";
		e.target.style.background="none";
		$(document).ready(function(){
			$('#second').show();
		});
	}
	else if(e.target.id.toLowerCase()=="third"){
		e.target.style.display="none";
		e.target.style.background="none";
		$(document).ready(function(){
			$('#third').show();
		});
	}
	else
		return;
}
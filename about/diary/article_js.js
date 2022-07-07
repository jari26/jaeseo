// JavaScript Document

window.onclick=first();
function first() {
	$('#second_article').css({"display":"none"});
	$('#third_article').css({"display":"none"});
	$('#fourth_article').css({"display":"none"});
	$('#first_article').fadeToggle('slow');
	$('body').css({"backgroundColor":"#161630"});
}
window.onclick=second();
function second() {
	$('#first_article').css({"display":"none"});
	$('#third_article').css({"display":"none"});
	$('#fourth_article').css({"display":"none"});
	$('#second_article').fadeToggle('slow');
	$('body').css({"backgroundColor":"#101E0F"});
}
window.onclick=third();
function third() {
	$('#first_article').css({"display":"none"});
	$('#second_article').css({"display":"none"});
	$('#fourth_article').css({"display":"none"});
	$('#third_article').fadeToggle('slow');
	$('body').css({"backgroundColor":"#220E20"});
}
window.onclick=fourth();
function fourth() {
	$('#first_article').css({"display":"none"});
	$('#second_article').css({"display":"none"});
	$('#third_article').css({"display":"none"});
	$('#fourth_article').fadeToggle('slow');
	$('body').css({"backgroundColor":"#20180A"});
}

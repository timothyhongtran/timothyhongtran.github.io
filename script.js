$(document).ready(function(){
	
	$('.button').mouseenter(function(){
		$(this).fadeTo(100, 0.5);
	});

	$('.button').mouseleave(function(){
		$(this).fadeTo(100, 1);
	});


});
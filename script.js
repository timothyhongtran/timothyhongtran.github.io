$(document).ready(function(){
	
	$('#goto1').click(function(){
		$('html, body').animate({
			scrollTop: $("#aboutme").offset().top
		}, 1000);
	});

	$('#goto2').click(function(){
		$('html, body').animate({
			scrollTop: $("#experience").offset().top
		}, 1000);
	});

	$('#goto3').click(function(){
		$('html, body').animate({
			scrollTop: $("#projects").offset().top
		}, 1000);
	});

	$('#goto4').click(function(){
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
	});


	$('.button').mouseenter(function(){
		$(this).fadeTo(100, 0.5);
		$(this).css('cursor', 'pointer');
	});

	$('.button').mouseleave(function(){
		$(this).fadeTo(100, 1);
	});


});
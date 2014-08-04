$(document).ready(function(){
	$('.button').click(function(){
		// $(this).fadeTo();
	})
	$('.button').mouseenter(function(){
		$(this).fadeTo(100, 0.5);
	});

	$('.button').mouseleave(function(){
		$(this).fadeTo(100, 1);
	});
});
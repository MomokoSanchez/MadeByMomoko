//Momoko Theme JavaScript

$(function() {

	$('.portfolioImg').click( function(){

		$('#portfolio'+$(this).attr('id')).removeClass('hidden');

		$('body').children().each(function() { 
			$(this).addClass('blur');
		});
	});

	$('.close').click( function(){
		$('.portfolioPage').addClass('hidden');

		$('body').children().each(function() { 
			$(this).removeClass('blur');
		});
	});



});
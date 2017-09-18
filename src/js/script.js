//Momoko Theme JavaScript

$(function() {

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


    //hover portfolio items
    $('.portfolioImg').hover(function(){
    	$(this).toggleClass('col-4');
    });


	//open up & close portfolio subpage and blur background
	$('.portfolioImg').click( function(){

		$('#portfolio'+$(this).attr('id')).delay(500).fadeIn(500);

		$('body').children().each(function() { 
			$(this).addClass('blur');
		});
	});

	$('.close').click( function(){
		$('.portfolioPage').fadeOut(400);

		$('body').children().each(function() { 
			$(this).removeClass('blur');
		});
	});

});
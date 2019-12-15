//Momoko Theme JavaScript

//change parallax images on scroll
function updateParallaxImg(){
	var scrollPosition = $(document).scrollTop();
	var offsetSeedling = $('#isearchImg').offset(); //use offset.top
	var offsetSeedlingBottom = ( offsetSeedling.top - ( $(window).height() * 1.5 ));
	var offsetMail = $('#contactImg').offset(); //use offset.top
	var offsetMailBottom = ( offsetMail.top - ( $(window).height() * 1.5 ));

	if(scrollPosition < offsetSeedlingBottom){
		$('#stars').addClass('toFront');
		$('#stars').css('z-index','1100');
		$('#isearchImg').removeClass('toFront');
		$('#contactImg').removeClass('toFront');
	}	
	else if(scrollPosition < offsetMailBottom && scrollPosition >= offsetSeedlingBottom){
		$('#stars').removeClass('toFront');
		$('#stars').css('z-index','-1');
		$('#isearchImg').addClass('toFront');
		$('#contactImg').removeClass('toFront');
	}
	else{
		$('#stars').removeClass('toFront');
		$('#stars').css('z-index','-1');
		$('#isearchImg').removeClass('toFront');
		$('#contactImg').addClass('toFront');
	}	
}


//animation on page load
$(document).ready( function(){

	//lazy loading of portfolio detail images, thanks https://davidwalsh.name/lazyload-image-fade
	[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
		img.setAttribute('src', img.getAttribute('data-src'));
		img.onload = function() {
			img.removeAttribute('data-src');
		};
	});

	//update parallax images depending on scroll position
	updateParallaxImg();

	//add text fade library on scroll - requires ScorllReveal
	window.sr = ScrollReveal();
	sr.reveal('.reveal', { origin: 'bottom', duration: 1000, delay: 250, });

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
    	if (window.matchMedia("(min-width: 768px)").matches){
    		$(this).toggleClass('col-4');
    	}
    });

	//open portfolio subpage and blur background
	$('.portfolioImg').click( function(){
		$('#portfolio'+$(this).attr('id')).delay(300).fadeIn(700);
		$('body').addClass('blur');
	});

	//open impressum and blur background
	$('.impressumLink').click( function(){
		$('#impressumPage').delay(500).fadeIn(500);
		$('body').addClass('blur');
	});

	//close portfolio page or impressum
	$('.close').click( function(){
		$('.portfolioPage').fadeOut(400);
		$('body').removeClass('blur');
		$('.multipleImg').removeClass('itemImageSmall itemImageLarge');
	});

	//hover multiple portfolio detail pages
	$('.rightImg').hover(function(){
		$(this).addClass('itemImageLarge');
		$(this).removeClass('itemImageSmall');
		$('.leftImg').removeClass('itemImageLarge');
		$('.leftImg').addClass('itemImageSmall');
	})
	$('.leftImg').hover(function(){
		if($(this).hasClass('itemImageSmall')){
			$(this).addClass('itemImageLarge');
			$(this).removeClass('itemImageSmall');
			$('.rightImg').removeClass('itemImageLarge');
			$('.rightImg').addClass('itemImageSmall');		
		}
	})  

	//sorry, internet explorer
	if (navigator.appName == 'Microsoft Internet Explorer' 
			||  !!(navigator.userAgent.match(/Trident/) 
			|| navigator.userAgent.match(/rv:11/)) 
			|| (typeof $.browser !== "undefined" && $.browser.msie == 1)
		){
	  alert("I noticed, you're using the Internet Explorer. \nUnfortunately this page only looks nice on modern browsers. \nWhat about trying Edge? Or Chrome? The possibilites are endless!");
	}
});

//change Sky on mouse movement
$(document).mousemove( function(event){
	if(animationFinished){
		simulateTheSun( event.clientY ); 
	}
}); 

//change parallax images on scroll
$(window).scroll(function(){
	updateParallaxImg();
});


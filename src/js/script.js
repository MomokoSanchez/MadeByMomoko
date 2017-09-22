//Momoko Theme JavaScript

$(function() {

	//Sky animation
	//update on resize
	var screenHeight = $(window).height();
	var heroHeight = screenHeight * 0.7;

	//change background radients
	function setBgColors($c1, $c2, $c3, $c4, $c5){
		
		$color1 = "rgb(" + $c1[0] + "," + $c1[1] + "," + $c1[2] + ") " + $c1[3] + "%";
		$color2 = "rgb(" + $c2[0] + "," + $c2[1] + "," + $c2[2] + ") " + $c2[3] + "%";
		$color3 = "rgb(" + $c3[0] + "," + $c3[1] + "," + $c3[2] + ") " + $c3[3] + "%";
		$color4 = "rgb(" + $c4[0] + "," + $c4[1] + "," + $c4[2] + ") " + $c4[3] + "%";
		$color5 = "rgb(" + $c5[0] + "," + $c5[1] + "," + $c5[2] + ") " + $c5[3] + "%";
		$('header').css({
			background: "rgb(" + $c1[0] + "," + $c1[1] + "," + $c1[2] + ")",
			background: "-moz-linear-gradient(top, "+$color1+", "+$color2+", "+$color3+", "+$color4+", "+$color5+")",
			background: "-webkit-linear-gradient(top, "+$color1+", "+$color2+", "+$color3+", "+$color4+", "+$color5+")",
			background: "-o-linear-gradient(top, "+$color1+", "+$color2+", "+$color3+", "+$color4+", "+$color5+")",
			background: "-ms-linear-gradient(top, "+$color1+", "+$color2+", "+$color3+", "+$color4+", "+$color5+")",
			background: "linear-gradient(to bottom, "+$color1+", "+$color2+", "+$color3+", "+$color4+", "+$color5+")",
			"-webkit-transition": "background .5s",
		    "-moz-transition": "background .5s",
		    "-ms-transition": "background .5s",
		    "-o-transition": "background .5s",
		    transition: "background .5s",
		    "background-attachment": "fixed"
		});	
	}

	document.onmousemove = handleMouseMove;

    function handleMouseMove(event) {
		var mouseHeight = event.clientY;

		$c1 = [123,157,194,0];
		$c2 = [144,170,193,8];
		$c3 = [220,214,190,49];
		$c4 = [254,231,163,66];
		$c5 = [249,161,139,75];

		//change colors and percentage
		if(mouseHeight < heroHeight){

			//day
			if(mouseHeight <= (heroHeight * 0.65) ){
				$c1[0] = Math.round( 25 + (123 - 25) * (  mouseHeight / (heroHeight*0.65) ) );
				$c1[1] = Math.round( 69 + (157 - 69) * (  mouseHeight / (heroHeight*0.65) ) );
				$c1[2] = Math.round( 130 + (194 - 130) * (  mouseHeight / (heroHeight*0.65) ) );
				$c1[3] =  0;

				$c2[0] = Math.round( 39 + (144 - 39) * (  mouseHeight / (heroHeight*0.65) ) );
				$c2[1] = Math.round( 89 + (170 - 89) * (  mouseHeight / (heroHeight*0.65) ) );
				$c2[2] = Math.round( 150 + (194 - 150) * (  mouseHeight / (heroHeight*0.65) ) );
				$c2[3] = 8 

				$c3[0] = Math.round( 71 + (220 - 71) * (  mouseHeight / (heroHeight*0.65) ) );
				$c3[1] = Math.round( 129 + (214 - 129) * (  mouseHeight / (heroHeight*0.65) ) );
				$c3[2] = Math.round( 179 + (190 - 179) * (  mouseHeight / (heroHeight*0.65) ) );
				$c3[3] = 49

				$c4[0] = Math.round( 142 + (254 - 142) * (  mouseHeight / (heroHeight*0.65) ) );
				$c4[1] = Math.round( 194 + (231 - 194) * (  mouseHeight / (heroHeight*0.65) ) );
				$c4[2] = Math.round( 251 + (163 - 251) * (  mouseHeight / (heroHeight*0.65) ) );
				$c4[3] = Math.round( 70 + (63 - 70) * (  mouseHeight / (heroHeight*0.65) ) ); 

				$c5[0] = Math.round( 193 + (249 - 193) * (  mouseHeight / (heroHeight*0.65) ) );
				$c5[1] = Math.round( 219 + (161 - 219) * (  mouseHeight / (heroHeight*0.65) ) );
				$c5[2] = Math.round( 251 + (139 - 251) * (  mouseHeight / (heroHeight*0.65) ) );
				$c5[3] = Math.round( 85 + (75 - 85) * (  mouseHeight / (heroHeight*0.65) ) ); 

				setBgColors($c1, $c2, $c3, $c4, $c5);	

				$('#stars').css({
					opacity: 0
				})		
			}

			//sunrise
			if(mouseHeight > ( heroHeight * 0.65 ) ){
				$c1 = [123,157,194,0];
				$c2 = [144,170,193,8];
				$c3 = [220,214,190,49];
				$c4 = [254,231,163,63];
				$c5 = [249,161,139,75];

				setBgColors($c1, $c2, $c3, $c4, $c5);

				$('#stars').css({
					opacity: 0
				})
			}

			//night
			if(mouseHeight > (heroHeight * 0.75)){
				$c1[0] = Math.round( 123 + (9 - 123) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c1[1] = Math.round( 157 + (0 - 157) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c1[2] = Math.round( 194 + (55 - 194) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c1[3] = Math.round( 15 + (0 - 15) * (  mouseHeight / (heroHeight*0.65) ) ); 

				$c2[0] = Math.round( 144 + (47 - 144) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c2[1] = Math.round( 170 + (41 - 170) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c2[2] = Math.round( 193 + (79 - 193) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c2[3] = Math.round( 8 + (55 - 8) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) ); 

				$c3[0] = Math.round( 220 + (49 - 220) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c3[1] = Math.round( 214 + (56 - 214) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c3[2] = Math.round( 190 + (100 - 190) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c3[3] = Math.round( 49 + (65 - 49) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );

				$c4[0] = Math.round( 254 + (51 - 254) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c4[1] = Math.round( 231 + (78 - 231) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c4[2] = Math.round( 163 + (125 - 163) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c4[3] = Math.round( 66 + (70 - 66) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) ); 

				$c5[0] = Math.round( 249 + (48 - 249) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c5[1] = Math.round( 161 + (88 - 161) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c5[2] = Math.round( 139 + (140 - 139) * ( (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25) ) );
				$c5[3] = 75;

				setBgColors($c1, $c2, $c3, $c4, $c5);	

				$opacity = (mouseHeight - (heroHeight * 0.75)) / (heroHeight * 0.25);
				$('#stars').css({
					opacity: $opacity
				})
			}
		}
    }

	$c1 = [123,157,194,0];
	$c2 = [144,170,193,8];
	$c3 = [220,214,190,49];
	$c4 = [254,231,163,66];
	$c5 = [249,161,139,75];

	setBgColors($c1, $c2, $c3, $c4, $c5);


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
		$('#portfolio'+$(this).attr('id')).delay(500).fadeIn(500);
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
	});

});
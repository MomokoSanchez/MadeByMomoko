//Momoko Theme JavaScript

//Sky animation for main image

//update on resize
var heroHeight =  $(window).height();
var animationFinished = false;

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

function simulateTheSun($move) {

	$mouseHeight = $move;

	//day colors
	$day1 = [25,69,130,0];
	$day2 = [39,89,150,40];
	$day3 = [71,129,179,75];
	$day4 = [142,194,251,95];
	$day5 = [193,219,251,125];

	//sunrise colorls
	$sunrise1 = [123,157,194,0];
	$sunrise2 = [144,170,193,40];
	$sunrise3 = [220,214,190,75];
	$sunrise4 = [254,231,163,93];
	$sunrise5 = [249,161,139,105];

	//night colors
	$night1 = [9,0,55,15];
	$night2 = [47,41,79,65];
	$night3 = [49,56,100,85];
	$night4 = [51,78,125,95];
	$night5 = [48,88,140,125];


	//set night as default
	$c1 = $night1;
	$c2 = $night2;
	$c3 = $night3;
	$c4 = $night4;
	$c5 = $night5;

	$('#stars').css({
		opacity: 1
	})

	//change colors and percentage
	if($mouseHeight < heroHeight){

		//day
		if($mouseHeight <= (heroHeight * 0.65) ){
			$c1[0] = Math.round( $day1[0] + ($sunrise1[0] - $day1[0]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c1[1] = Math.round( $day1[1] + ($sunrise1[1] - $day1[1]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c1[2] = Math.round( $day1[2] + ($sunrise1[2] - $day1[2]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c1[3] = Math.round( $day1[3] + ($sunrise1[3] - $day1[3]) * (  $mouseHeight / (heroHeight*0.65) ) ); 

			$c2[0] = Math.round( $day2[0] + ($sunrise2[0] - $day2[0]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c2[1] = Math.round( $day2[1] + ($sunrise2[1] - $day2[1]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c2[2] = Math.round( $day2[2] + ($sunrise2[2] - $day2[2]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c2[3] = Math.round( $day2[3] + ($sunrise2[3] - $day2[3]) * (  $mouseHeight / (heroHeight*0.65) ) ); 

			$c3[0] = Math.round( $day3[0] + ($sunrise3[0] - $day3[0]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c3[1] = Math.round( $day3[1] + ($sunrise3[1] - $day3[1]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c3[2] = Math.round( $day3[2] + ($sunrise3[2] - $day3[2]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c3[3] = Math.round( $day3[3] + ($sunrise3[3] - $day3[3]) * (  $mouseHeight / (heroHeight*0.65) ) ); 

			$c4[0] = Math.round( $day4[0] + ($sunrise4[0] - $day4[0]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c4[1] = Math.round( $day4[1] + ($sunrise4[1] - $day4[1]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c4[2] = Math.round( $day4[2] + ($sunrise4[2] - $day4[2]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c4[3] = Math.round( $day4[3] + ($sunrise4[3] - $day4[3]) * (  $mouseHeight / (heroHeight*0.65) ) ); 

			$c5[0] = Math.round( $day5[0] + ($sunrise5[0] - $day5[0]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c5[1] = Math.round( $day5[1] + ($sunrise5[1] - $day5[1]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c5[2] = Math.round( $day5[2] + ($sunrise5[2] - $day5[2]) * (  $mouseHeight / (heroHeight*0.65) ) );
			$c5[3] = Math.round( $day5[3] + ($sunrise5[3] - $day5[3]) * (  $mouseHeight / (heroHeight*0.65) ) ); 

			setBgColors($c1, $c2, $c3, $c4, $c5);	
			$('#stars').css({
				opacity: 0
			})	
		}

		//sunrise
		if($mouseHeight > ( heroHeight * 0.65 ) ){

			setBgColors($sunrise1, $sunrise2, $sunrise3, $sunrise4, $sunrise5);
			$('#stars').css({
				opacity: 0
			})
		}

		//night
		if($mouseHeight > (heroHeight * 0.75)){

			$c1[0] = Math.round( $sunrise1[0] + ( $night1[0] - $sunrise1[0]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c1[1] = Math.round( $sunrise1[1] + ( $night1[1] - $sunrise1[1]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c1[2] = Math.round( $sunrise1[2] + ( $night1[2] - $sunrise1[2]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c1[3] = Math.round( $sunrise1[3] + ( $night1[3] - $sunrise1[3]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) ); 

			$c2[0] = Math.round( $sunrise2[0] + ( $night2[0] - $sunrise2[0]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c2[1] = Math.round( $sunrise2[1] + ( $night2[1] - $sunrise2[1]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c2[2] = Math.round( $sunrise2[2] + ( $night2[2] - $sunrise2[2]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c2[3] = Math.round( $sunrise2[3] + ( $night2[3] - $sunrise2[3]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) ); 

			$c3[0] = Math.round( $sunrise3[0] + ( $night3[0] - $sunrise3[0]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c3[1] = Math.round( $sunrise3[1] + ( $night3[1] - $sunrise3[1]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c3[2] = Math.round( $sunrise3[2] + ( $night3[2] - $sunrise3[2]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c3[3] = Math.round( $sunrise3[3] + ( $night3[3] - $sunrise3[3]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );

			$c4[0] = Math.round( $sunrise4[0] + ( $night4[0] - $sunrise4[0]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c4[1] = Math.round( $sunrise4[1] + ( $night4[1] - $sunrise4[1]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c4[2] = Math.round( $sunrise4[2] + ( $night4[2] - $sunrise4[2]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c4[3] = Math.round( $sunrise4[3] + ( $night4[3] - $sunrise4[3]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) ); 

			$c5[0] = Math.round( $sunrise5[0] + ( $night5[0] - $sunrise5[0]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c5[1] = Math.round( $sunrise5[1] + ( $night5[1] - $sunrise5[1]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c5[2] = Math.round( $sunrise5[2] + ( $night5[2] - $sunrise5[2]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) );
			$c5[3] = Math.round( $sunrise5[3] + ( $night5[3] - $sunrise5[3]) * ( ($mouseHeight / (heroHeight * 0.25) - 3 ) ) ); 

			setBgColors($c1, $c2, $c3, $c4, $c5);	

			$opacity = $mouseHeight / (heroHeight * 0.25) - 3;
			$('#stars').css({
				opacity: $opacity
			})
		}
	}
}

$(document).ready( function(){
	$('.innerBox').addClass('show');
	$('.outerBox').addClass('show');
	$('.mainText').addClass('show');
	$('.mainText h1').delay(2500).queue(function(){
		$(this).addClass('separator');
	});

	$counter =  $(window).height();
	$steps = $counter / 400;

	$countMe = setInterval(
		function(){
			if($counter >  ( $(window).height() * 0.75) ){
				simulateTheSun($counter);
				$counter = $counter - $steps;
				console.log($counter);
			}
			else{
				animationFinished = true;
				clearInterval($countMe);
			}
		}, 50
	);

});

//change Sky on mouse movement
$(document).mousemove( function(event){

	if(animationFinished){
		simulateTheSun( event.clientY ); 
	}
}); 

$(function() {

	//fade text in on scroll
	window.sr = ScrollReveal();
	sr.reveal('.reveal', { origin: 'bottom', duration: 1000, delay: 500, });

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
		$('.leftImg').removeClass('itemImageLarge');
		$(this).removeClass('itemImageSmall');
		$('.leftImg').addClass('itemImageSmall');
	})
	$('.leftImg').hover(function(){
		if($(this).hasClass('itemImageSmall')){
			$(this).addClass('itemImageLarge');
			$('.rightImg').removeClass('itemImageLarge');
			$(this).removeClass('itemImageSmall');
			$('.rightImg').addClass('itemImageSmall');		
		}
	})  
});

// JavaScript Document

<!-- Preload images -->
/*$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$(['images/home.jpg']).preload();*/

<!--  CALCULATE BROWSER WINDOW / VIEWPORT SIZE  -->

$(setCSS);
//$(scrollLinks);
$(window).resize(setCSS);
//$(window).resize(goHome);

function setCSS() {
	var 
	w = window, 
	d = document, 
	e = d.documentElement, 
	g = d.getElementsByTagName('body')[0],
	vx = w.innerWidth||e.clientWidth||g.clientWidth,
	vy = w.innerHeight||e.clientHeight||g.clientHeight,
	k = 0.5625,  // = 9/16 (factor by which height = width)
	j = 1.7778,  // = 16/9  (factor by which width = height)
	wx = 1280,  // i.e. "16"
	wy = 720,   // i.e. "9"  All our wallpaper images will be set to 1280x720, before scaling
	t = 0,  // wallpaper top offset
	l = 0,  // wallpaper left offset
	r = vy/vx,  // the ratio of viewport height to width
	vvx = vx/2,  // half viewport width
	vvy = vy/2,  // half viewport height
	gx = 0,  // the logo width
	gy = 0,  // the logo height
	ggx = gx/2,  // half logo width
	ggy = gy/2,  // half logo height
	gt = Number,  // logo top position
	gl = Number,  // logo left position
	fy = Number,  // featured box height
	fx = Number,  // featured box width
	ft = Number,  // featured box top position
	fl = Number  // featured box left position
	;
	
	if ( r==k ) {  // if the viewport is 16:9
	wx=vx;		   // set wallpaper dims to = viewport dims
	wy=vy;	
	}
	else if ( r<k ) {  // if viewport is higher than "16" 
		wx=vx;   	   // set wallpaper width to viewport width
		wy=vx*k;	   // set wallpaper height as ratio of wallpaper width (viewport width)
		t=(wy-vy)/2;   // and set the top offset of wallpaper to the height difference of viewport, divided by two
	}
	else if ( r>k ) {  // if viewport is narrower than "9"
		wy=vy;		   // set wallpaper height to viewport height
		wx=vy*j;	   // set wallpaper width as ratio of wallpaper height (viewport height)
		l=(wx-vx)/2;   // and set the left offset of wallpaper to width difference of viewport, divided by two
	};	
	
	gx = wx*0.15;  // set logo width to factor of wallpaper width
	gy = wy*0.275; // set logo height to factor of wallpaper height		
	gt = ((wy-gy)/2)-t;  // set logo top position
	gl = (((wx-gx)/2)-l)-(wx*0.00234);  // set logo left position (with slight tweak: wx*0.00234 = 3px when wx=1280)
	
	fx = wx*0.2969;
	fy = wy*0.3889;
	ft = ((vy-fy)*0.8);  // set featured box top position
	fl = ((vx-fx)*0.1);	// set featured box left position
	
 //$("html").css({"width": vx*3+"px", "height": vy*3+"px"});
 $("body").css({"font-size": vx*0.0125/* =16px@1280 */});
 $(".wallpaper").css({"width": wx+"px","height": wy+"px","top": -t+"px","left": -l+"px"});
 $(".wallpaperwrap").css({"width": vx+"px","height": vy+"px"});
/* $("#home").css({"left": vx+"px","top": vy+"px"});
 $("#about").css({"left": 0+"px","top": vy+"px"});
 $("#productions").css({"left": vx+"px","top": vy*2+"px"});
 $("#contact").css({"left": vx*2+"px","top": vy+"px"});
 $("#participate").css({"left": vx+"px","top": 0+"px"});
*/ 
 $(".logo").css({"width": gx+"px", "top": gt+"px", "left": gl+"px"});
 $(".logo_loader").css({"width": gx+"px", "top": gt+"px", "left": gl+"px"});
 $(".featured").css({"width": fx+"px", "top": ft+"px", "left": fl+"px"});
}

//ScrollTo functions
/*function scrollLinks() {
	
	jQuery.fx.interval = 24;
	  
  $(".about-a").click(function(){
  	$('#about').animate({left:0}, 400);
	$('#home').animate({left:'100%'}, 400);
  });
  $("#about .home-a").click(function(){
  	$('#about').animate({left:'-100%'}, 400);
	$('#home').animate({left:0}, 400);
  });

  
  $(".productions-a").click(function(){
  	$('#productions').animate({top:0}, 400);
	$('#home').animate({top:'-100%'}, 400);
  });
  $("#productions .home-a").click(function(){
  	$('#productions').animate({top:'100%'}, 400);
	$('#home').animate({top:0}, 400);
  });

  
  $(".participate-a").click(function(){
	$('#participate').animate({top:0}, 400);
	$('#home').animate({top:'100%'}, 400);
  });
  $("#participate .home-a").click(function(){
  	$('#participate').animate({top:'-100%'}, 400);
	$('#home').animate({top:0}, 400);
  });

  
  $(".contact-a").click(function(){
	$('#contact').animate({left:0}, 400);
	$('#home').animate({left:'-100%'}, 400);
  });
  $("#contact .home-a").click(function(){
  	$('#contact').animate({left:'100%'}, 400);
	$('#home').animate({left:0}, 400);
  });
}

*/

// Fancybox initialisation
$('.fancybox').fancybox();
$(document).ready(function() {
	$('.fancybox-media').fancybox({
		openEffect  : 'elastic',
		closeEffect : 'fade',
		helpers : {
			media : {}
		}
	});
});

//Nano scoller 
$(document).ready(function() {
$(".nano").nanoScroller({ contentClass: 'scrolltext' });
});

// Hide scrollbars / prevent scrolling 
document.documentElement.style.overflow = 'hidden';      // firefox, chrome
document.body.scroll = "no";    // ie only
// iOS-  Target the entire page, and listen for touch events
//$('html, body').on('touchstart touchmove', function(e){
//     //prevent native touch activity like scrolling
//     e.preventDefault();
//});
$(document.body).on("touchmove", function(event) {
    event.preventDefault();
    event.stopPropagation();
});
//$("body").on("touchmove", false);
//$(document).delegate('.ui-content', 'touchmove', false);
  // disable scroll on touch (Android) BREAKS DESKTOP SITE 
//  webview.setOnTouchListener(new View.OnTouchListener() {
//
//    public boolean onTouch(View v, MotionEvent event) {
//      return (event.getAction() == MotionEvent.ACTION_MOVE);
//    }
//  });

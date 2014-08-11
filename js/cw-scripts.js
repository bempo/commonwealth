// JavaScript Document


/*  --- CALCULATE BROWSER WINDOW / VIEWPORT SIZE ---  */

$(setCSS);
$(scrollLinks);
$(window).resize(setCSS);

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
	
	if ( vx>1800 ) {  // scaling cut-off for large screens
		vx=1800;
		vy=1020;
		wy=1020;
		wx=wy*j;
		// $("body").css({"width": vx+"px","min-height": vy+"px"});
		};
	
	gx = wx*0.15;  // set logo width to factor of wallpaper width
	gy = wy*0.275; // set logo height to factor of wallpaper height		
	gt = ((wy-gy)/2)-t;  // set logo top position
	gl = (((wx-gx)/2)-l)-(wx*0.00234);  // set logo left position (with slight tweak: wx*0.00234 = 3px when wx=1280)

	fx = wx*0.28; // Featured box width
	fl = ((vx-fx)*0.1);
	
	if (vx/vy < 1.58) {
		fy = (vy/2)-gy; // Featured box height on narrow screen
	   }
	else { 
		fy = vy*0.31;
		};
		
	// Show / hide two/one-line menus	
	if ((vx/vy) < 1) {
		$("#one-line").css({"display":"none"});	
		$("#two-line").css({"display":"block"});	
	}
	else {
		$("#two-line").css({"display":"none"});
		$("#one-line").css({"display":"block"});
	};
	
  $("body").css({"font-size": vx*0.0125+"px"});  // MAKE A CONDITIONAL RULE ?!
	
	if ( (vx/vy)<=1 ) {   // MAYBE JUST DO THIS IN CSS???
		fx = vx*0.7;  
		fl = ((vx-fx)/2);	// set featured box left position  /***/
		// $("body").css({"font-size": vx*0.03+"px","overflow-x": "hidden"});
	};	
/*	else if ( vx>=496 ) {
		fx = wx*0.2969;
		fl = ((vx-fx)*0.1);

	}; */

//	fy = wy*0.3889;
//	ft = ((vy-fy)*0.8);  // set featured box top position
// $("html").css({"width": vx+"px", "height": vy+"px"});
 document.getElementById("screendims").innerHTML=vx+" x "+vy;

	
 $(".wallpaper").css({"width": wx+"px","height": wy+"px","top": -t+"px","left": -l+"px"});
 $(".wallpaperwrap").css({"width": vx+"px","height": vy+"px"});
 $(".main-menu").css({"width": vx+"px"}); /***/
 $(".featured").css({"width": fx+"px", "height":fy+"px", "bottom": vy*0.05+"px", "left": fl+"px"});
/* $("#home").css({"left": vx+"px","top": vy+"px"});
 $("#about").css({"left": 0+"px","top": vy+"px"});
 $("#shows").css({"left": vx+"px","top": vy*2+"px"});
 $("#contact").css({"left": vx*2+"px","top": vy+"px"});
 $("#participate").css({"left": vx+"px","top": 0+"px"});
*/ 
 $(".logo").css({"width": gx+"px", "top": gt+"px", "left": gl+"px"});
 $(".logo_loader").css({"width": gx+"px", "top": gt+"px", "left": gl+"px"});
 $("#prodwrap").css({"width": vx*0.9+"px", "left": (vx-(vx*0.9))/2+"px"});
 $("#shows .main").css({"left": (vx-(vx*0.19))/2+"px"});
}

function scrollLinks() {

/* 	The off-screen elements load as display:none - so we need to show these first,  
	then add the transition classes slightly later via the setTimeout function (20).
	We must also hide the offscreen elements after they transition (600). And vise-versa!
	*/
  $('.about-a').click(function(){
	  $('#about').show();
	  setTimeout(function() { 
	  	$('#home').addClass('home-right');
	  	$('#about').addClass('in-frame');
	  }, 20);
	  setTimeout(function() {
		  $('#home').hide();
	  }, 600);
  }); 
  $("#about .home-a").click(function(){
	  $('#about').removeClass('in-frame');
	  $('#home').show();
	  setTimeout(function() {
	  	$('#home').removeClass('home-right');
	  }, 20);
	  setTimeout(function() {
		$('#about').hide();
	  }, 600);
  });

  $('.press-a').click(function(){
	  $('#press').show();
	  setTimeout(function() { 
	  	$('#home').addClass('home-bottom');
	  	$('#press').addClass('in-frame');
	  }, 20);
	  setTimeout(function() {
		  $('#home').hide();
	  }, 600);
  });  
  $("#press .home-a").click(function(){
	  $('#press').removeClass('in-frame');
	  $('#home').show();
	  setTimeout(function() {
	  	$('#home').removeClass('home-bottom');
	  }, 20);
	  setTimeout(function() {
		$('#press').hide();
	  }, 600);
  });
  
  $('.blog-a').click(function(){
	  $('#blog').show();
	  setTimeout(function() { 
	  	$('#home').addClass('home-bottom');
	  	$('#blog').addClass('in-frame');
	  }, 20);
	  setTimeout(function() {
		  $('#home').hide();
	  }, 600);
  });  
  $("#blog .home-a").click(function(){
	  $('#blog').removeClass('in-frame');
	  $('#home').show();
	  setTimeout(function() {
	  	$('#home').removeClass('home-bottom');
	  }, 20);
	  setTimeout(function() {
		$('#blog').hide();
	  }, 600);
  });
  
  $('.participate-a').click(function(){
	  $('#participate').show();
	  setTimeout(function() { 
	  	$('#home').addClass('home-bottom');
	  	$('#participate').addClass('in-frame');
	  }, 20);
	  setTimeout(function() {
		  $('#home').hide();
	  }, 600);
  });  
  $("#participate .home-a").click(function(){
	  $('#participate').removeClass('in-frame');
	  $('#home').show();
	  setTimeout(function() {
	  	$('#home').removeClass('home-bottom');
	  }, 20);
	  setTimeout(function() {
		$('#participate').hide();
	  }, 600);
  });

  $('.contact-a').click(function(){
	 $('#contact').show();
	 setTimeout(function() { 
	  	$('#home').addClass('home-left');
	  	$('#contact').addClass('in-frame');
	  }, 20);
	  setTimeout(function() {
		  $('#home').hide();
	  }, 600);
  });
  $("#contact .home-a").click(function(){
	  $('#contact').removeClass('in-frame');
	  $('#home').show();
	  setTimeout(function() {
	  	$('#home').removeClass('home-left');
	  }, 20);
	  setTimeout(function() {
		$('#contact').hide();
	  }, 600);
  });

  $('.shows-a').click(function(){
	 $('#shows').show();
	 setTimeout(function() { 
	  	$('#home').addClass('home-top');
	  	$('#shows').addClass('in-frame');
	  }, 20);
	  setTimeout(function() {
		  $('#home').hide();
	  }, 600);
  });
  $("#shows .home-a").click(function(){
	  $('#shows').removeClass('in-frame');
	  $('#home').show();
	  setTimeout(function() {
	  	$('#home').removeClass('home-top');
	  }, 20);
	  setTimeout(function() {
		$('#shows').hide();
	  }, 600);
  });


};


// Fancybox initialisation
$('.fancybox').fancybox({
		openEffect : 'elastic',
		closeEffect : 'fade',
		padding : 0,
		minHeight : '90%',
		minWidth : '80%',
});

$('.fancybox-media').fancybox({
		openEffect  : 'elastic',
		closeEffect : 'fade',
		helpers : {
			media : {}
		}
});


//Nano scroller 
$(document).ready(function() {
$(".nano").nanoScroller({ 
	contentClass: 'scrolltext',
	alwaysVisible: true,
	sliderMaxHeight: 40 
	});
});

// Hide scrollbars / prevent scrolling 
document.documentElement.style.overflow = 'hidden';      // firefox, chrome
// document.body.scroll = "no";    // ie only
// iOS-  Target the entire page, and listen for touch events
//$('html, body').on('touchstart touchmove', function(e){
//     //prevent native touch activity like scrolling
//     e.preventDefault();
//});

// $(document.body).on("touchmove", function(event) {
//     event.preventDefault();
//     event.stopPropagation();
// });

//$("body").on("touchmove", false);
//$(document).delegate('.ui-content', 'touchmove', false);
  // disable scroll on touch (Android) BREAKS DESKTOP SITE 
//  webview.setOnTouchListener(new View.OnTouchListener() {
//
//    public boolean onTouch(View v, MotionEvent event) {
//      return (event.getAction() == MotionEvent.ACTION_MOVE);
//    }
//  });

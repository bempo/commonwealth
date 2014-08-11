	
$(document).ready(function() {
$(".nano").nanoScroller({ 
	contentClass: 'scrolltext',
	alwaysVisible: true,
	sliderMaxHeight: 40, 
	});
});

Galleria.loadTheme('js/galleria/themes/classic/galleria.classic.min.js');
Galleria.configure({
    imageCrop: 'landscape',
	showCounter: false,
	height: 0.86,
	showImagenav: true
});
Galleria.run('#galleria');
  

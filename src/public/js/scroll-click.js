$(document).ready(function(){
	// Setup some variable names (pointers to elements)
	var $ACTIVE_MENU_ITEM = $(".menu-item.active");
	var $CONTENT_SECTION = $(".content-container");
	var $VIEWPORT = $("html, body");
	var SCROLL_TIME = 1000;
	
	// When you click the active menu item, scroll down to the content
	$ACTIVE_MENU_ITEM.click(function(evt){
		evt.preventDefault();
		$VIEWPORT.animate({
			scrollTop: $CONTENT_SECTION.offset().top
		}, SCROLL_TIME);
	})
	
	// Stop the animation if the user scrolls. Defaults on .stop() should be fine
	$VIEWPORT.bind("scroll mousedown DOMMouseScroll mousewheel keyup touchstart", function(e){
		if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel" || e.type === "touchstart" ) {
			// This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
			 $VIEWPORT.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup'); 
		}
	}); 
});
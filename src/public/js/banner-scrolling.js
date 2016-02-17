$(document).ready(function(){
	// Define some variables
	var is_scrolled = false;
	var $banner = $(".banner-default");
	var $doc = $(document);
	var SCROLL_CLASS = "banner-after-scroll";
	
	// This function is called on scroll.
	// It will add/remove the css class depending on whether the "scroll top" is 0 or not.
	var checkScroll = function() {
		var new_is_scrolled = ($doc.scrollTop() > 0);
		if (new_is_scrolled != is_scrolled) {
			if (new_is_scrolled) $banner.addClass(SCROLL_CLASS);
			else $banner.removeClass(SCROLL_CLASS);
			is_scrolled = new_is_scrolled;
		}
	}
	
	// "Throttle" the function so that it's not called more than 20x per second
	var THROTTLE_TIME = 50;		// Should wait at least THROTTLE_TIME milliseconds between calls
	var throttledCheckScroll = _.throttle(checkScroll, THROTTLE_TIME);
	
	// Call the function once so that the class is set on first load
	throttledCheckScroll();
	
	// Now attach the class to the scroll event-handler.
	$(document).scroll(throttledCheckScroll);
});
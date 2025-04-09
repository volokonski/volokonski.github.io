// checks that an input string looks like a valid email address.
var isEmail_re       = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
function isEmail (s) {
   return String(s).search (isEmail_re) != -1;
}
		
jQuery(document).ready(function(){

	
	// Code for navigation arrows for mobile menu
	var $sections = $('.part'),
			$animContainer = $('html, body'),
			$document = $(document),
			numSections = $sections.length,
			currSection = 0,
			isAnimating = false;
		  
		  // Animate to a specific index.
		  var gotoSection = function(index) {
			isAnimating = true;
			$animContainer.animate({
			  scrollTop: $sections.eq(index).offset().top
			}, 750, function () {
			  isAnimating = false;
			});
		  };
		  
		  // Find out next index and then animate.
		  var handleNext = function() {
		     if (!isAnimating && currSection == 10) { 
			  currSection=1;
			  gotoSection(currSection);
			}
			 else if (!isAnimating && currSection < numSections - 1) { 
			  currSection++;
			  gotoSection(currSection);
			}

		  };
		  
		  // Find out previous index and then animate.
		  var handlePrev = function() {
			if (!isAnimating && currSection > 0) { 
			  currSection--;
			  gotoSection(currSection);
			}
		  };
		  
		  // Handle clicks.
		  $("#next").on('click', handleNext);
		  $("#prev").on('click', handlePrev);
		  
		 
		  
	// Go to present hashtags
	if(window.location.hash) {
		//console.log(window.location.hash);
		jQuery(document).scrollTop( jQuery(window.location.hash).offset().top );
	} else {
		// Fragment doesn't exist
	}

	// Smooth scrolling to internal anchors
	jQuery('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = jQuery(this.hash);
	        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
				jQuery('html,body').animate({
					scrollTop: target.offset().top
				}, 600);
	            return false;
	        }
	    }
	});

	// ScrollSpy automatically updates nav targets based on scroll position
	// http://twitter.github.com/bootstrap/javascript.html#scrollspy
	jQuery('#nav').scrollspy();

	

	

	jQuery('#mobile-gallery img').wrap('<div class="img-wrap" />');
	jQuery(document).foundation();

	/*
	jQuery('#nav').bind('activate', function() {
		console.log('called!');
	});
	*/
	
});
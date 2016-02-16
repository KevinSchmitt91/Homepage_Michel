$(function() {
	
	// Cache the window object
	var $window = $(window);
	
	// Parallax background effect
	$('section[data-type="background"]').each(function(){
		
		var $bgobj = $(this); // assigning the object
		
		$(window).scroll(function() {
			
			//scroll the background at var speed
			//the yPs is a negative value because we're scrolling
			
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			// Put together our final background position
			var coords = '50% ' + yPos + 'px';
			
			// Move the background
			$bgobj.css({backgroundPosition: coords});
		}); // end window scroll
	});
});

$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
}); 


function isScrolledIntoView(elem) {
    var $window = $(window),
        docViewTop = $window.scrollTop(),
        docViewBottom = docViewTop + $window.height(),
        elemTop = $(elem).offset().top,
        elemBottom = elemTop + $(elem).outerHeight();
        
        /*
        console.log(docViewTop);
        console.log(docViewBottom);
        console.log(elemTop);
        console.log(elemBottom);
        */
        
        
    return ((( elemTop >= docViewTop) && (elemTop <= docViewBottom)) || ((elemBottom >= docViewTop) && (elemBottom <= docViewBottom)) ) ;
}

$(window).scroll(function() {

    $('.section-animate').each(function() {
        if (isScrolledIntoView(this)) {
            $(this).addClass('onview');
        }
    });
    

});

$(window).scroll(function() {

    $('.picture-animate').each(function() {
        if (isScrolledIntoView(this)) {
            $(this).addClass('onview').delay(800);
        }
    });
    

});

$(window).scroll(function() {
	
	if(isScrolledIntoView('.welcome')) {
		$('.navbar-inverse').css('background', 'rgba(245,245,220,1)');
	}
})


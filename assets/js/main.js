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


function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    $('.section-animate').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('onview')
        }
    });

});


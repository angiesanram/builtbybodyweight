// Menu

$(document).ready(function() {
		$('.mobile-nav-toggle').click(function() {
			$(this).toggleClass('is-open');
			$('.mobile-nav').toggleClass('is-open');
	});
});

//clickable coaching
$(document).ready(function() {
	$('.12-week-transformation').click(function(){
	  alert('12 week Clicked !!');
	});

	$('.skills').click(function(){
	  alert('skills Clicked !!');
	});

	$('.personal-coaching').click(function(){
	  alert('personal Clicked !!');
	});
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.flex-container').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

							$(".list li").each(function(i) {
								/*$(this).animate({'opacity':'1'},500);*/
								$(this).delay(500 * i).animate({'opacity':'0.7'},500)
								$(this).off('scroll');
								$(this).css('pointer-events', 'auto');
								/*$(this).delay(800 * i).fadeIn(800);*/
							});

            }

        });

    });

});

/*if ($(window).scrollTop() >= triggerHeight) {
	$(".list li").each(function(i) {
		$(this).delay(300 * i).fadeIn(500);
	});
	$(this).off('scroll');
}*/

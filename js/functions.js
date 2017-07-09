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

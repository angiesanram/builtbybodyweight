// Menu

$(document).ready(function() {
		$('.mobile-nav-toggle').click(function() {
			$(this).toggleClass('is-open');
			$('.mobile-nav').toggleClass('is-open');
	});
});



$(document).ready(function() {
		$('.site-nav a').click(function() {
			$(this).toggleClass('active');
			$('.site-nav a').toggleClass('active');
	});

});

$('.menu-nav ul').origamidMenu({
	breakpoint: 800,
	top: 69,
	background: "#020f59",
	color: "#c6c6c6"
});

if(window.SimpleAnime) {
	new SimpleAnime ();
}

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href');
			targetOffset = $(id).offset().top,
			menuHeight = $('header'). innerHeight();

	console.log(menuHeight);

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
})
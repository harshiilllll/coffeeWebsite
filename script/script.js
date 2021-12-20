if (matchMedia('only screen and (max-width: 1200px)').matches) { 
	$(".navbar").css("display","flex");
}

$("#cart-btn").click(function(){
	$(".cart-items-container").css("right","0%").slideToggle(400);
});

if (matchMedia('only screen and (max-width: 991px)').matches) { 
	$(".navbar").css("display","none");

	$("#menu-btn").click(function(){
		$(".navbar").slideToggle(400);
	});
}

$("#search-btn").click(function(){
	$(".search-form").css("transform","scaleY(1)").css("width","90%").css("right","2rem");
});

window.onscroll = () => {
	$(".cart-items-container").css("right","-100%");
	$(".search-form").css("transform","scaleY(0)");
}

$(function(){
	var mySwiper = new Swiper('.swiper-container', {
		autoplay:500,pagination : '.swiper-pagination',
	})

		$(".gps-list li").mouseover(function(){
	 		var index= $(this).index();
	 		$(".fox").stop().animate({"margin-left":index * 85+"px"},200)
	 		$(this).css({"color":"white"}).siblings().css({'color':"black"})
	 	});
	 	$('.gps-list').mouseleave(function(){
	 		$('.fox').stop().animate({'margin-left':"0"},200)
	 		$('.gps-list li').css({'color':"black"})
	 	})
})
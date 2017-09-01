$(function(){

	// 点击floorPage中每一个floor右上角的选项切换不同的div
	var list = $('.floorTitle ul li');
	$('.floorTitle ul li').click(function(){
		$(this).addClass('red').siblings().removeClass('red');
		$(this).children('span').addClass('active')
								.parent().siblings().children('span')
								.removeClass('active');
		var index = list.index(this);
		$('.floorContent > div').eq(index).show()
								.siblings().hide();

	});
});

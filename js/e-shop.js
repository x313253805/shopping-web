$(function(){
	// 点击登录按钮，弹出登录界面
	$('.login').click(function(){
		$('.loginPage').show();
	});
	// 点击注册按钮，弹出注册界面
	$('.register').click(function(){
		$('.loginPage').show();
		$('.contentTitle ul li:nth-child(2)').addClass('underline red').siblings().removeClass('underline red');
		$('.contentPart div:nth-child(2)').show().siblings().hide();
	});
	// 点击登录页中的登录和注册按钮切换
	var loginList = $('.contentTitle ul li');
	$('.contentTitle ul li').click(function(){
		$(this).addClass('underline red').siblings().removeClass('underline red');

		var listIndex = loginList.index(this);
		$('.contentPart > div').eq(listIndex).show()
							   .siblings().hide();
	});

	//点击登录页中的close按钮，关闭登录页
	$('.close').click(function(){
		$('.loginPage').hide();
	});

	// logoPage中的购物车的hover效果
	$('.logoPage .shopcar').hover(function(){

		$(this).parent().children('div.shopcarList').show();
	},function(){
		$(this).parent().children('div.shopcarList').hide();
	});

	// logoPage中的购物车列表鼠标经过时显示，移出时隐藏
	$('.logoPage .shopcarList').mouseover(function(){
		$(this).show();
	});
	$('.logoPage .shopcarList').mouseout(function(){
		$(this).hide();
	});
	//bannerPage部中navlist上的li的hover效果
	$('.bannerPage .navList ul li').hover(function(){
		$(this).children('.navSecondList').show();
	},function(){
		$(this).children('.navSecondList').hide();
	});

	
	// bannerPage部分轮播图主函数的实现
	var index = 0,timer = null;
	var length = $('.bannerImg').length;
	function slideImg(){

		// 鼠标停留在图片上时停止定时器
		$('.bannerBox').mouseover(function(){
			if(timer) clearInterval(timer);
		});
		// 鼠标离开图片时开始定时器
		$('.bannerBox').mouseout(function(){
			timer = setInterval(function(){
				index++;
				if(index >= length){
					index = 0;
				}
				changeImg();
				console.log(index);
			},3000);
		});

		//调用mouseout函数，打开界面就开始定时器
		 $('.bannerBox').mouseout();

		 // 点击prev按钮，显示前一页的图片
		 $('.prev').click(function(){
		 	index--;
		 	if(index < 0){
		 		index = length -1;
		 	}
		 	changeImg();
		 });
		
		// 点击next按钮，显示前一页的图片
		 $('.next').click(function(){
		 	index++;
		 	if(index >= length){
		 		index = 0;
		 	}
		 	changeImg();
		 });

		 // 点击dots中的按钮跳转到相应的图片
		 $('.dots span').click(function(){
		 	index = $(this).attr('data');
		 	changeImg();
		 });
	}

// changImg函数的实现
	function changeImg(){
		$('.bannerImg').eq(index).show().siblings().hide();
		$('.dots span').eq(index).addClass('selected').siblings().removeClass('selected');
	}

// 调用slideImg函数
	slideImg();
	// 点击floorPage中每一个floor右上角的选项切换不同的div
	var list = $('.floorTitle ul li');
	$('.floorTitle ul li').click(function(){
		$(this).addClass('red').siblings().removeClass('red');
		$(this).children('span').addClass('active')
								.parent().siblings().children('span')
								.removeClass('active');
		var listIndex = list.index(this);
		$('.floorContent > div').eq(listIndex).show()
								.siblings().hide();

	});
});

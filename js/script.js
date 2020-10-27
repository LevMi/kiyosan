$(document).ready(function() {
    // ナビの最後の右マージンをクリア
    var nav$ = $('#page-nav');
    nav$.find('li').last().css('margin-right', 0);
    nav$.find('a').smoothScroll({
        easing: 'easeInOutSine',
        speed: 1500
    });
    // トップに戻るボタンを追加
    var scrolltop$ = $($.parseHTML('<div class="scroll-top"><img src="images/bear_btn.png"></div>')).appendTo('body').hide();
//<i class="fa fa-female fa-5x"></i>
    scrolltop$.on('click', function() {
        $.smoothScroll({
            scrollTarget: '#top',
            speed: 1500,
            easing: 'easeInOutSine',
						afterScroll: function() {
							$('header').addClass('anime')
							},
        });
    });

    // stickyプラグインの適用
    var sticky$ = nav$.sticky({
        topSpacing: 0,
    });
    // スクロールによりstickyになったらトップに戻るボタンを表示
    // stickyプラグインのイベントを利用
    sticky$
        .on('sticky-start', function() {
            scrolltop$.stop().fadeIn();
            $(this).addClass('stickey-color');
        })
        .on('sticky-end', function() {
            scrolltop$.stop().fadeOut();
            $(this).removeClass('stickey-color');
        });
    $('#scrollHeader').find('a').smoothScroll();

    // ボタンを変数に格納
    var topBtn$ = $('#scrollTop');
		$(window)
        .on('scroll', function() {
            if ($(this).scrollTop() > 300) {
                topBtn$.stop().fadeIn();
            } else {
                topBtn$.stop().fadeOut();
            }
        })
  // stapel
		var $grid = $('#tp-grid'),
		$name = $('#name'),
		$close = $('#close'),
		$loader = $('<divclass="loader"><i></i><i></i><i></i><i></i><i></i><i></i><span>Loading...</span></div>').insertBefore($grid);
		stapel = $grid.stapel({
			delay: 50,
			onLoad: function() {
				$loader.remove();
			},
			onBeforeOpen: function(pileName) {
				$name.html(pileName);
			},
			onAfterOpen: function(pileName) {
				$close.show();
			}
		});
		$close.on('click', function() {
			$close.hide();
			$name.empty();
			stapel.closePile();
		});
		//---------------------------------------------------------------------gallry
		 $("#navi a").click(function(){
        $("#main img").before("<img src='"+$(this).attr("href")+"' alt=''>");
        $("#main img:last").fadeOut("fast",function(){
            $(this).remove()
        });
        return false;
    });
		$("img.next").click(function(){
    $("#navi .pageWrap").animate({
        marginLeft : parseInt($("#navi .pageWrap").css("margin-left"))-960+"px"
    },"fast")
})
$("img.prev").click(function(){
    $("#navi .pageWrap").animate({
        marginLeft : parseInt($("#navi .pageWrap").css("margin-left"))+960+"px"
    },"fast")
});
}); // $(document).ready(function() {

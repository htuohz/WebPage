$(function ($) {
    $('div.search > a').click(function (event) {
        $(this).parent('.search').toggleClass('on');
    });
    $('a.searchBtn').click(function (event) {
        $(this).parent('form').submit();
    });
    $('a.gotoTop').click(function (event) {
        $('html,body').animate({scrollTop: 0}, 500);
    });
    if ($(window).scrollTop() > 15) {
        $('a.gotoTop').fadeIn(400);
    }


    //pc上的下拉菜单
    //二级菜单下拉
    //
    if($('body').width() >= 960){
        $('nav.nav > ul li').hover(function() {
            $(this).find('div.hide_banner').stop(true).fadeIn(500);
            $('div.show').css({'transition': '3s',
        'transform':'scale(1.1)',
        '-ms-transform':'scale(1.1)',
        '-moz-transform':'scale(1.1)',    
        '-webkit-transform':'scale(1.1)',
        '-o-transform':'scale(1.1)' });
        }, function() {
            $(this).find('div.hide_banner').fadeOut(50);
            $('div.show').css({'transition': '0.5',
        'transform':'scale(1)',
        '-ms-transform':'scale(1)',
        '-moz-transform':'scale(1)',    
        '-webkit-transform':'scale(1)',
        '-o-transform':'scale(1)' });
        });
    }

    //手机版显示下拉菜单
    $('div.mobile_menu_btn').click(function(){
        $(this).toggleClass('open');
        $('ul.mobile_menu').slideToggle();
    });

    //返回顶部
    $('.talk_foot').click(function(){
        $('html,body').animate({scrollTop:'0px'},300);
    });
    $('#top-back').click(function(){
        $('html,body').animate({scrollTop:'0px'},300);
    })
    $('#mobile_go_top').click(function(){
        $('html,body').animate({scrollTop:'0px'},300);
    })

    //移动端底部
    // $('.menu').click(function(){
    //     console.log('click');
    //     scroll_in();
    // })
    // 
    // 
    var toggle = $('#ss_toggle');
    var menu = $('#ss_menu');
    var rot;
    var flag = 1;

    $('#ss_toggle').on('click', function (ev) {
        $('#ss_menu').toggleClass('scroll');
        // $('#ss_toggle').toggleClass('close');
        $('#mobile_go_top').toggle();
        ev.stopPropagation();
    });
    $('body').on('click',$('div').not('.htmleaf-container'),function(){
    	if($('#ss_menu').hasClass('scroll')){
    		$('#ss_menu').removeClass('scroll');
    	}else{
    		$('#mobile_go_top').show();
    	}
    });



    //解决苹果中的缩放问题
     
    document.addEventListener('touchstart',function (event) {  
        if(event.touches.length>1){  
            event.preventDefault();  
        }  
    })  
    var lastTouchEnd=0;  
    document.addEventListener('touchend',function (event) {  
        var now=(new Date()).getTime();  
        if(now-lastTouchEnd<=300){  
            event.preventDefault();  
        }  
        lastTouchEnd=now;  
    },false)  
    
    

})


try {
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });
} catch (e) {
    console.log(e);
}

$(window).scroll(function (event) {
    if ($(window).scrollTop() > 15) {
        $('a.gotoTop').fadeIn(400);
    } else {
        $('a.gotoTop').fadeOut(400);
    }

    if($(window).scrollTop() > 350){
        $("#top-back").fadeIn();
     }
     else{
        $("#top-back").fadeOut();
     }

})




   





function topBack(){
  $('body,html').animate({scrollTop:0},300);
}


function chkSearch() {
    if ($.trim($('#keywords').val()).length < 2) {
        alert('请输入要搜索的关键字');
    } else {
        return true;
    }
    return false;
}

"use strict";
new WOW().init();
//Start Navbar
// $("body").css('marginTop',$('nav').innerHeight());
// $("header").css('height',$("window").innerHeight() - $("nav").innerHeight());
/* 
$("nav .nav-item").click(function(){
$(this).addClass("active").siblings().removeClass("active");
let newNavbar=$(`#${$(this).children('.nav-link').attr('data-section')}`).position().top;
let newNav =$('nav').innerHeight();
$("html").animate({"scrollTop":newNavbar-newNav},100);
});
*/ 
$(document).scroll (function(){
if($(document).scrollTop()<=10){
$("nav navbar-brand").animate({"width":"12%"},{
duration: 500,
queue:false
});
}
else{
$("nav navbar-brand").animate({"width":"10%"},{
    duration: 500,
    queue:false
})
}
})
// 
$(document).scroll (function(){
    let NumberSection =$('.nav-link[data-section]').length;
    for(let i=0; i< NumberSection; i++){
        if(($('html').scrollTop() + $('nav').innerHeight()) >= $(`#${$('.nav-link[data-section]').eq(i).attr('data-section')}`).position().top){
        $(`.nav-link[data-section="${$('.nav-link[data-section]').eq(i).attr('data-section')}"]`).parent().addClass('active').siblings().removeClass('active');
        }
    }
});
// 
// Start NAV X
$("nav .navbar-toggler").click(function(){
let that = this;
if($(this).attr('aria-expanded')=="false"){
    $(this).children(".top,.span").css('top','50%');
    $(this).children(".bottom").css('opacity','0');
    $(this).children(".span").css('margin',' 0');
    setTimeout(function(){
        $(that).children("span").css('transform','rotateZ(45deg)');
        $(that).children(".span").css('transform','rotateZ(-45deg)');
    });
}else{
    $(this).children(".top,.span").css('top','50%');
    $(this).children(".bottom").css('opacity','1');
    $(this).children(".span").css('margin','3px  0');
    setTimeout(function(){
        $(that).children("span").css('transform','rotateZ(0deg)');
        $(that).children(".span").css('transform','rotateZ(0deg)');
    });
}
});
//end NAV X
//End Navbar

/*
//Start About
// ------------------------------------
// End About
*/

$(".popup_link").click(function(e){
    e.preventDefault();
    $("body").css(' overflow', 'hidden');
    $(".popup").css('display','block').animate({'top':'25%'});
});
$(".btn_close,.fa-times").click(function(){
    $("body").css(' overflow', 'auto');
    $(".popup").css('display','none').animate({'top':'-100%'});
})


$("owl-carousel").owlCarousel(
    {
        'items': 4
    }
)



$(document).ready(function(){
$(".logo").fadeOut(5000);
});


var scroll_top =$('.Scroll-top')
$(window).scroll(function(){
    if($(window).scrollTop() >= 100){
        if(scroll_top.is(':hidden')){
        $(scroll_top).fadeIn(400)
        }
    }else{
        $(scroll_top).fadeOut(400)
    }
})
$(".scroll_top").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:0
        
    },1000)
})
"use strict";
new WOW().init();
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
$(".mode-container").click(function(){
    $("#icon").toggleClass("fa-sun")
    $("body").toggleClass("color")
    $("nav").toggleClass("toggle")
    $(".nav-link").toggleClass("color-1")
    $(".item").toggleClass("color")
    $(".iteming").toggleClass("iteming_background")
    $(".item").toggleClass("color_f1")
    $(".popup_Video").toggleClass("color")
    $(".About_home").toggleClass("color")
    $(".book").toggleClass("color")
    $(".section_1").toggleClass("color")
})
$("#YouTube").click(function(){
    $(".popup_Video iframe").attr('src',$(".popup_Video iframe").attr('data-src'))
    $(".popup_Video").css({'display':'flex','justify-content':'center','align-items':'center','opacity':'1','top':'0'}).hide(0).show(2000);
    $("body").css(' overflow', 'hidden');
})
$("#can").click(function(){
    $(".popup_Video").css({'display':'none'}).children('.box').hide(0)
    $(".popup_Video iframe").attr('src','');
    $("body").css(' overflow', 'auto');
})
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





// Start popup_video

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
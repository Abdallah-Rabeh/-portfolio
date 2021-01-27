"use strict";
new WOW().init();
//Start Navbar
$("body").css('marginTop',$('nav').innerHeight());
$("header").css('height',$("window").innerHeight() - $("nav").innerHeight());
$("nav .nav-item").click(function(){
$(this).addClass("active").siblings().removeClass("active");
let newNavbar=$(`#${$(this).children('.nav-link').attr('data-section')}`).position().top;
let newNav =$('nav').innerHeight();
$("html").animate({"scrollTop":newNavbar-newNav},100);
});
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

// Start Services 
$("#Services .item").click(function(){
$("body").css(' overflow', 'hidden');
$(`.${$(this).attr('data-popup')}`).css({'opacity': '1','display':'block'}).children('.box').animate({'top':'20px'},1000)
});
$(".popup_Services .box i.fa-times-circle:not(i.my_icon)").click(function(){
    let that=this;
    $(this).parents(".box").animate({'top':'-200px'},1000,function(){
    $(that).parents(".popup").css({'opacity': '0','display':'none'});
    $("body").css(' overflow', 'auto');
    });
});
$(".popup popup_Services").click(function(){
    let that=this;
    $(this).animate({'opacity': '0'},500, function(){
        $(that).css('opacity', '0')
        $(that).children(".box").css('top', '-200%')
    })
});
$(".popup_Services").click(function(e){
    e.stopPropagation()
});
// End Services



// Start popup_video
let my_icon = document.querySelector(".play")
$(my_icon).click(function(){
    $(".popup_video iframe").attr('src',$(".popup_video iframe").attr('data-src'))
    $(".popup_video")
    .css({'display':'flex','justify-content':'center','align-items':'center','opacity':'1','top':'0'})
    .children('.box').hide(0).show(3000);

});
$("i.my_icon").click(function(){
    $(".popup_video").css({'display':'none'}).children('.box').hide(0)
    $(".popup_video iframe").attr('src','');
});
// End popup_video
///////// Start popup_Languages//////
$(".key_jquery-2").click(function(){
$("body").css(' overflow', 'hidden');
$(".popup_Languages").css('display','block').children(".box").animate({'right':'0'},1500);
});
$(".popup_Languages .fa-times").click(function(){
$("body").css(' overflow', 'auto');
$(".popup_Languages").css('display','none').children(".box").animate({'right':'-100%'},1000);
});
$(".key_jquery-1").click(function(){
    $("body").css(' overflow', 'hidden');
    $(".popup_Sectors").css({'display':'block','opacity':'1'}).children(".box").animate({'top':'0'},1000);
});
$(".popup_Sectors .fa-times").click(function(){
    $("body").css(' overflow', 'auto');
    $(".popup_Sectors").css({'display':'none','opacity':'1'}).children(".box").animate({'top':'-100%'},1000);
});


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
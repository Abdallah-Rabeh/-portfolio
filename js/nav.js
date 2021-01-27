"use strict";
new WOW().init();
//Start NAV
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
//end header a navbar 
// Start data-link
$("nav .nav-item").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    let newNavbar=$(`#${$(this).children('.nav-link').attr('data-section')}`).position().top;
    let newNav =$('nav').innerHeight();
    $("html").animate({"scrollTop":newNavbar-newNav},100);
    });
    // End data-link
    $(".jquery").click(function(){
        alert('Very soon in a new version');
        prompt("Very soon in a new version")
    })
    $(document).ready(function () {
        $(".logos").fadeOut(3000);
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
var popup =$('.popup')
$(window).scroll(function(){
    if($(window).scrollTop() >= 1500){
        if(popup.is(':hidden')){
        $(popup).fadeIn(500)
        }
    }else{
        $(popup).fadeOut(500)
    }
})
$("popup").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:0
        
    },100)
})
    // $(".nav-item").click(function(){
    //     $(this).addClass("active").siblings().removeClass("active");
    //     let newNavbar=$(`#${$(this).children('.nav-link').attr('data-section')}`).position().top;
    //     let newNav =$('nav').innerHeight();
    //     $("html").animate({"scrollTop":newNavbar-newNav},100);
    //     });
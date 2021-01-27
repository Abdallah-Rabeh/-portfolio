"use strict";
new WOW().init();
// 

$(document).ready(function(){
    $(".logo").fadeOut(5000);
});
    // 
    let heightNav = $("nav").innerHeight();
    let heightFooter =$("footer").innerHeight();
    $("#Games").css("height",$(window).innerHeight() - heightFooter - heightNav);
    // 
    let egg1=$(".egg").eq(0);
    let egg2=$(".egg").eq(1);
    let egg3=$(".egg").eq(2);
    let LifeScore = 10;
    let playScore = 0;
    let HighestScore = 0;
    // 
    if(localStorage.getItem("HighestScore")==null){
        localStorage.setItem("HighestScore",HighestScore)
    }else{
        HighestScore=localStorage.getItem("HighestScore")
        $("#HighestScore").text(HighestScore);
    }
    // 
$(document).keyup(function(e){
    if(e.keyCode == 32){
        $("#Start_Games").slideUp(1000);
        LifeScore = 10;
        $("#LifeScore").text(LifeScore);
        $(".egg").css("top","30px");
        playScore = 0;
        $(".playScore").text(playScore).removeClass("Gold");
        StartGame();
    }
})
function StartGame(){
    DropEgg(egg1);
    DropEgg(egg2);
    DropEgg(egg3);

    BasketHitEgg(egg1);
    BasketHitEgg(egg2);
    BasketHitEgg(egg3);
let TheGame =requestAnimationFrame(StartGame);
if(LifeScore <= 0){
    cancelAnimationFrame (TheGame);
    $("#Start_Games").slideDown(1000);
    if(playScore > HighestScore){
        HighestScore = playScore;
        $("#HighestScore").text(HighestScore);
        localStorage.setItem("HighestScore",HighestScore)
    }
}
}
function DropEgg(egg){
    let Top_Egg = parseInt($(egg).css('top'));
    $(egg).css('top', Top_Egg + Math.round(Math.random() * 3 + 1));
if(parseInt($(egg).css('top')) >= 350){
    $(egg).css('top','30px');
    $(`.bullseye`).eq($(egg).attr('data-index-bullseye')).css("display","block");
    setTimeout(function(){
        $(`.bullseye`).eq($(egg).attr('data-index-bullseye')).fadeOut(1000);
    }, 1000);
    LifeScore--;
    $("#LifeScore").text(LifeScore);

}
}
function collision (element1,element2){
    let t1  = $(element1).offset().top;
    let l1  = $(element1).offset().left;
    let b1  =  t1 + $(element1).outerHeight(true)
    let r1  =  l1 + $(element1).outerWidth(true)

    let t2  = $(element2).offset().top;
    let l2  = $(element2).offset().left;
    let b2  = t2 + $(element2).outerHeight(true)
    let r2  = l2 + $(element2).outerWidth(true)

if( b1 < t2 || r1 < l2 || t1 > b2 || l1 > r2 ){
    return false;
}else{
    return true;
}
}
$(window).mousemove (function(e){
let MouseBasket =($("#basket").outerWidth(true)/2)
    if(e.pageX>= MouseBasket && e.pageX<=($(window).innerWidth()-MouseBasket)){
        $("#basket").css('left', e.pageX - MouseBasket);
    }
})
function BasketHitEgg (egg){
    if(collision(egg,$("#Basket"))){
    $(egg).css('top','30px');
    playScore++;
    $(".playScore").text(playScore);
    if(playScore > HighestScore){
        $("#HighestScore").addClass("Gold");
    }
    }
}
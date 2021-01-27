"use strict"
let mynav=$(".nav-link")
mynav.click(function(){
$(mynav).addClass("ck")
});
let icon=$(".itme i");
icon.hover(function(){
$(icon).css("color", "#fff ");
});
$(document).ready(function(){
    $(".louayat").fadeOut(5000)
});

    let mes = $('textarea').attr('maxlength'),
    maxmeasege = $('.measege');
    maxmeasege.html('<span>' + mes + '</span> characters Remaining'); 
    $('textarea').keyup (function(){
        let mte =$(this).val().length,
         rem = mes-mte;
        maxmeasege.html('<span>' + rem + '</span> characters Remaining');     
        if(this.text<0){
        maxmeasege.css("color","#ff0");
        }
    
    });
   
        
        
    

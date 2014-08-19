sliderInt=1;
sliderNext=2;
var count=0;
var loop;

$(document).ready(function(){
    $("#slider>img#1").fadeIn(300);
    startSlider();
    
    /* right/previous button click */
    $(".right").click(function(event){
        next(); 
        event.preventDefault();
    });
    /* left/next button click */
    $(".left").click(function(event){
        prev(); 
        event.preventDefault();
    });
});



function startSlider(){
    count=$("#slider>Img").size(); /* count the number of images/items */
    delayCall(); /* start the slide */
    
}

function delayCall(){
    loop=setInterval(function(){
        
        if(sliderNext>count){
            sliderNext=1;
            sliderInt=1;
        }
        
        $("#slider>Img").fadeOut(300);
        $("#slider>Img#" + sliderNext).fadeIn(300);
        
        sliderInt=sliderNext;
        sliderNext=sliderNext + 1;
        
    },3000);
    
}

function prev(){
    clearInterval(loop); 
    if(sliderInt==1)
        newSlide=count;
    else
        newSlide=sliderInt-1;
    showSlide(newSlide);
}

function next(){
    clearInterval(loop);
    if(sliderInt==count)
        sliderInt=0;
    newSlide=sliderInt + 1;
    showSlide(newSlide);
}

/* slide animation - forward */ 
function showSlide(id){
    
    $("#slider>Img").fadeOut(300);
    $("#slider>Img#" + id).fadeIn(300).delay(1000);
    
    sliderInt=id;
    sliderNext=id + 1;
    delayCall();
    
}
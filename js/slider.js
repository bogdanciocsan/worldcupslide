sliderInt = 1; 
sliderNext = 2; 

$(document).ready(function() {
    $('#slider > img#1').fadeIn(300);  
});

function startSlider() {
  count = $('#slider > img').size(); 
    
  loop = setInterval(function() {
      
    if(sliderNext > count) {
       sliderNext = 1; 
       sliderInt = 1;
    } 
      
    $('#slider > img').fadeOut(300);
    $('#slider > img#' + sliderNext).fadeIn(300);
      
    sliderInt = sliderNext;
    sliderNext++;

  }, 3000);
    
}

$('.left').onclick(function(e) {
   e.preventDefault();
   newSlide = sliderInt - 1; 
   showSlide(newSlide);
});

$('.right').onclick(function(e) {
   e.preventDefault();
   newSlide = sliderInt + 1; 
   showSlide(newSlide);
});

function stopLoop() {
   window.clearInterval(loop);   
}

function showSlide(Id) {
    stopLoop();
    if (Id > count) {
       Id = 1; 
       sliderInt = 1;
    } else if (Id < 1) {
        Id = count;   
    }
    
    $('#slider > img').fadeOut(300);
    $('#slider > img#' + Id).fadeIn(300);
      
    sliderInt = Id;
    sliderNext = Id + 1;
    startSlider();
}

$('#slider > img').hover(
    function() {
      stopLoop();   
    },
    function() {
      startSlider();
    } 
);
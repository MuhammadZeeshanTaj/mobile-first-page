$(function(){
    $('#view-work').on('click', function(){
       var position =  $('#images').position().top;
       $('html, body').animate({
           scrollTop: position,
       }, 'slow', 'swing');
    });
});
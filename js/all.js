$(document).ready(function(){
    $(".navicon").click(function(){
      $(".navicon").toggleClass('close');
    //   $(".navlist").slideToggle();
      $(".navbar").toggleClass('expand');
      $('body').toggleClass('freeze');
    });
  });
$(document).ready(function(){
    $(".navicon").click(function(){
      $(".navicon").toggleClass('close');
    //   $(".navlist").slideToggle();
      $(".navbar").toggleClass('expand');
      $('body').toggleClass('freeze');
      $('.modal').toggleClass('close');

    });

    $('.card .stretched-link').click(function(e){
      e.preventDefault()
      console.log(e.target)
      $('.modal').toggleClass('close');
      $('.modal-showcase').toggleClass('close');
    })

    $('.modal-showcase a').click(function(e){
      e.preventDefault()
      console.log(e.target)
      $('.modal').toggleClass('close');
      $('.modal-showcase').toggleClass('close');
    })

    $('.article-list').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
          {
            breakpoint: 987,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }]
    });


    

  });


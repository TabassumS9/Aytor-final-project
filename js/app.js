$(function(){
    // slider
    $('#banner').slick({
        arrows:false,
        dots:true,
    }
    
   
    );
    $(".product_slider_slick").slick({
      slidesToShow: 4,
      prevArrow:'.arrows .left',
      nextArrow:'.arrows .right',
   
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 4,
             
           }
         },
   
         {
            breakpoint: 991,
             settings: {
              slidesToShow: 3,
              
            }
          },
          
         {
            breakpoint: 767,
             settings: {
              slidesToShow: 1,
              
            }
          },
          {
            breakpoint: 450,
             settings: {
              slidesToShow: 1,
              
            }
          },
         
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
       ]
   
   });
     
    //countdown slider 
    $('.countdown').countdown("2026/12/12",function(e){
      let time = e.strftime('%D days %H:%M:%S');
      $(".countdown .day").html(e.strftime("%D"));
      $(".countdown .hour").html(e.strftime("%H"));
      $(".countdown .min").html(e.strftime("%M"));
      $(".countdown .sec").html(e.strftime("%S"));
    });
    new VenoBox({
      selector: ".venobox"
  });
  $(".latest_slider_slick").slick({
    slidesToShow: 4,
    slidesToScroll:2,
    dots:true,
    arrows:false,
    responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 4,
           
         }
       },
 
       {
          breakpoint: 991,
           settings: {
            slidesToShow: 3,
            
          }
        },
        
       {
          breakpoint: 767,
           settings: {
            slidesToShow: 1,
            
          }
        },
        {
          breakpoint: 450,
           settings: {
            slidesToShow: 1,
            
          }
        },
       
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]
 
 });
    });
    $('.deal_slider').slick({
      arrows:false,
      slidesToShow:2,
      dots:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });  
    $('.deal_content').slick({
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    })  

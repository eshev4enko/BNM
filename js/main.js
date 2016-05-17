/* Show articles */   

jQuery(document).ready(function($) {
   
    $('.hide-box').hide(); 
    
    $('.miracle-btn').click(function(event) {
        
         $('.hide-box').fadeIn(); 

    });
});

/* Dropdown menu */
    
jQuery(document).ready(function($) {  
    
    $(".mobile-menu").click(function(){
        $(".mobile-menu").hide();
        $(".cross").show();
        
        $(".box-nav").slideToggle("slow");
        return false;
    });
    
    $(".cross").click(function(){
        
     $(".mobile-menu").show();
     $(".cross").hide();
        
         $(".box-nav").slideToggle("slow");
        return false;
     });
});

/* Dropdown Social Likes */

jQuery(document).ready(function($) { 
    
    $(".share-wrap").click(function(){  
        $(".like").show();
        $(".like").css({"top": "0", "bottom": "auto"})       
    });
    
});


/* Swiper settings */

jQuery(document).ready(function($) { 
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        speed: 400,
        spaceBetween: 100,
        initialSlide: 0
    });  
 });      

jQuery(document).ready(function($) {
   
  if ($(".swiper1").hasClass("swiper-slide-active")) {
      $(".swiper6").css("left", "-631%");
      $(".swiper6 .swiper-txt").css("display", "none");
        return false;
     }
 });  

jQuery(document).ready(function($) {
   $(".swiper1").removeClass("last-active");
    
  if ($(".swiper6")) {
      $(".swiper1").addClass("last-active");
      $(".swiper1 .swiper-txt").css("display", "none");
        return false;
     }
 }); 





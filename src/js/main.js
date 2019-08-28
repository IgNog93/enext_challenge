window.onload = function() {
    
    // Displaying Lightbox //

    function lightboxOn(){
        $('#overlay-back').fadeIn(100);
        $(".lightbox-wrapper").fadeToggle(500);

        $(".lightbox-wrapper").css("z-index","10");
        $(".lightbox-wrapper").css("display","flex");
    }

    $("#clearance-btn").click(function(){
        lightboxOn();
    });

    // Hiding Lightbox //

    function lightboxOff(){
        $(".lightbox-wrapper").toggleClass("lightbox-on");
        $(".lightbox-wrapper").css("z-index","5");
        $(".lightbox-wrapper").css("display","none");
        $('#overlay-back').fadeOut(500);
    }

    $("#close-lightbox").click(function(){
        lightboxOff();
    });

    // Cart items counter //

    var cartItems = 0;

    $("#add-to-cart").click(function(){
        $(".cart-counter").css("display","flex");
        $("#cart-items-qty").empty();
        
        cartItems++
        $("#cart-items-qty").append(cartItems);
        lightboxOff();
        
    });
}

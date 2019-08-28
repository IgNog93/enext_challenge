window.onload = function() {
    
    //
    // Displaying Lightbox //
    //

    function lightboxOn(){
        $('#overlay-back').fadeIn(100);
        $(".lightbox-wrapper").fadeToggle(500);

        $(".lightbox-wrapper").css("z-index","10");
        $(".lightbox-wrapper").css("display","flex");
    }

    $.ajax({
        url: 'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json',
        success: function(json) {
            
            $(".product-box").click(function(){
                lightboxOn();
                $(".product-name-lightbox").empty();
                $(".product-name-lightbox").append("<p>"+json.potions[1].name+"</p>");
            }); 
        }
    });

    //
    // Hiding Lightbox //
    //

    function lightboxOff(){
        $(".lightbox-wrapper").toggleClass("lightbox-on");
        $(".lightbox-wrapper").css("z-index","5");
        $(".lightbox-wrapper").css("display","none");
        $('#overlay-back').fadeOut(500);
    }

    $("#close-lightbox").click(function(){
        lightboxOff();
    });

    //
    // Cart items counter //
    //

    var cartItems = 0;

    $("#add-to-cart").click(function(){
        $(".cart-counter").css("display","flex");
        $("#cart-items-qty").empty();
        
        cartItems++
        $("#cart-items-qty").append(cartItems);
        lightboxOff();
        
    });
};
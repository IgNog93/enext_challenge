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

    //
    // Consuming Potions API //
    //

    $.ajax({
        url: 'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json',
        success: function(json) {
            console.log(json);
            $('.products-area ul li').click(function(){
                
                var index = $(this).index() + 1;
                console.log(index);

                lightboxOn();

                $(".image-lightbox").empty();
                $(".image-lightbox").append("<img src=images/"+json.potions[index].image+"></img>");

                $(".product-name-lightbox").empty();
                $(".product-name-lightbox").append("<p>"+json.potions[index].name+"</p>");

                $(".effects-lightbox").empty();
                $(".effects-lightbox").append("<p>"+json.potions[index].effect+"</p>");

                $(".ingredients-lightbox").empty();
                $(".ingredients-lightbox").append("<p>"+json.potions[index].ingredients+"</p>");

                $(".price-lightbox").empty();
                $(".price-lightbox").append("<p>"+json.potions[index].price+"</p>");
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
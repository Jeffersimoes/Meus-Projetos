$( document ).ready(function() {
    $('.banner-text h2').hide();
    $('.banner-text p').hide();

    $('.banner-text h2').fadeIn(1000);
    $('.banner-text p').fadeIn(1000);

});

$('.btn-menu').click(function(){
    $('.menu').slideToggle();
});

$(window).scroll(function(){
    if ( $(window ).scrollTop() > 150){
        
        $('.card').addClass('card-animation');
        $('.card-cardapio').addClass('card-animation');
        $('.card-promocoes').addClass('card-animation');
        $('.quem-somos-img').addClass('anima-image');
        $('.quem-somos-txt').addClass('anima-texto');
        $('.delivery').addClass('anima-image');
        $('.formulario').addClass('anima-texto');

        if ($('header').css('position') != 'fixed' ){
            
            $('.banner').css('marginTop','134px');
            
            $('header').hide();

            $('header').css({
                'position': 'fixed',
                'top': 0
            });

            $('header').slideDown();
        }
    }else if ($(window ).scrollTop() == 0){
        $('.banner').css('marginTop', 0);

        $('header').css('position','static');
    }
});
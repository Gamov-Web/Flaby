$(document).ready(function() {

    $('.reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.reviews__arrows-prev'),
        nextArrow: $('.reviews__arrows-next'),
        infinite: false
    });

    $('.burger-menu').click(function(){
        $('.modal-menu').show();
    });

    $('.button-close').click(function(){
        $('.modal-menu').hide();
    });
});
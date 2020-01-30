$(document).ready(function() {

    $('.reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.reviews__arrow-prev'),
        nextArrow: $('.reviews__arrow-next'),
        infinite: false,
        draggable: false
    });

    $('.burger-menu').on('click', function(){
        $('.modal-menu').slideToggle();
    });

    $('.button-close').on('click', function(){
        $('.modal-menu').slideToggle();
    });
});
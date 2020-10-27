$(document).ready(function () {
    $(".main-slider").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })

    $(".slider-shelf").slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
    })
});
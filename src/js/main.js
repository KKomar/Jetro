$('.slider').slick({
    dots: false,
    arrows: false
});

$('.slider__prev').click(function () {
    $('.slider').slick('slickPrev')
});

$('.slider__next').click(function () {
    $('.slider').slick('slickNext')
});
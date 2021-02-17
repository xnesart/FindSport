const nextIcon = '<img src="./img/slider/icon-left.svg" alt:"next">';
const prevIcon = '<img src="./img/slider/icon-right.svg" alt:"next">';

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    dots:false,
    center:false,
    navText: [
        nextIcon,
        prevIcon
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})




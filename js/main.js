alert('Welcome  to my Web-site')
// our service slider
$('.ourService_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// hero slider
$('.heroSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// aos animation
AOS.init({
    duration:2000,
});
// our work mixitup
var confi=document.querySelector('.mixcount');
var mixer=mixitup(confi);
// counter
$("#counter").countMe(40,64);
$("#counterd").countMe(30,34);
$("#counterh").countMe(40,24);
$('a').smoothScroll();
$('.backtotop').smoothScroll({offset: 100});
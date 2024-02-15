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
$("#counter").countMe(10,0);
$("#counterd").countMe(20,0);
$("#counterh").countMe(15,0);
$('a').smoothScroll();
$('.backtotop').smoothScroll({offset: 100});

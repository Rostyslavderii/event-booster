$(document).ready(function () {
    $('.reviews-cards-list').slick({
        dots: true,
        speed: 700,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotsHover: true
    });
});


// $('.reviews-cards-list').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     fade: true,
//     asNavFor: '.reviews-nav-list'
// });
// $('.reviews-nav-list').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.reviews-cards-list',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
// });
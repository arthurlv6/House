var blazorInterop = blazorInterop || {};

blazorInterop.initializeCarousel = function () {
    $('#hero-carousel').carousel({ interval: 10000 });

    //see step 2 to understand these news id's:
    $('#carousel-control-prev').click(
        () => $('#carouselIndicators').carousel('prev'));
    $('#carousel-control-next').click(
        () => $('#carouselIndicators').carousel('next'));
};

/* ======= Fixed header when scrolled ======= */

$(window).bind('load', function () {
    if ($(window).scrollTop() > 0) {
        $('#header').addClass('header-scrolled');
    }
    else {
        $('#header').removeClass('header-scrolled');
    }
});

$(document).ready(function () {


    /* ======= Fixed header when scrolled ======= */

    $(window).bind('scroll resize', function () {
        if ($(window).scrollTop() > 0) {
            $('#header').addClass('header-scrolled');
        }
        else {
            $('#header').removeClass('header-scrolled');
        }
    });

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100 });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function (e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, { offset: -50, 'axis': 'y' });
        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').removeClass('show');
        }

    });
});

blazorInterop.initializeGallery = function () {
    gallery("all");
};

function gallery(item) {
    $(".all").removeClass("animate__animated");
    $(".all").removeClass("animate__fadeInUp");
    $(".all").removeClass("d-block");
    //
    $("." + item).addClass("animate__animated");
    $("." + item).addClass("animate__fadeInUp");
    $("." + item).addClass("d-block");
}

blazorInterop.initializeScreenToBodyPage = function () {
    $("body, html").animate({
        scrollTop: 500
    }, 1000)
};

blazorInterop.initializeHideDropdow = function () {
    $("#navbar-collapse").removeClass("show");
};

//
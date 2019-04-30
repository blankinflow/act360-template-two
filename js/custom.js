// client slider
$('.client_main .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

// testimonials home page
$('.testimonials_home .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})


$(document).ready(function() {
    $(".head_section .owl-carousel").owlCarousel({
        nav: true,
        // loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
        center: true,
        navText: ["<img src='images/left.png'>", "<img src='images/right.png'>"],
        onInitialized: counter, //When the plugin has initialized.
        onTranslated: counter, //When the translation of the stage has finished.
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 1,
                dots: false,
                nav: false
            },
            1000: {
                items: 1,
                dots: false
            }
        }
    });
});




// https://stackoverflow.com/questions/43205699/thumbnail-for-next-and-
// previous-buttons-owl-carousel



var mainSlider;

$(document).ready(function() {

    mainSlider = $('.owl-carousel');

    mainSlider.owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        lazyLoad: true,
        loop: true,
        items: 1,
        smartSpeed: 500,
    });

    mainSlider.on('changed.owl.carousel', function(property) {
        var current = property.item.index;
        var prev = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('data-navipicture');
        var next = $(property.target).find(".owl-item").eq(current).next().find("img").attr('data-navipicture');

        $('.navPrev').find('img').attr('src', prev);
        $('.navNext').find('img').attr('src', next);
    });

});

$('.navNext').on('click', function() {
    mainSlider.trigger('next.owl.carousel', [300]);
    return false;
});

$('.navPrev').on('click', function() {
    mainSlider.trigger('prev.owl.carousel', [300]);
    return false;
});

function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
        item = item - items
    }
    $('#counter').html(+item + "/" + items)
}
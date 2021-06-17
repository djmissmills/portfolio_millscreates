(function($) {
    'use strict';

    //========================
    // Full Height Banner
    //========================
    getWidthAndHeight();
    $(window).resize(function() {
        getWidthAndHeight();
    });

    function getWidthAndHeight() {
        var winWidth = $(window).width();
        var headerHeight = $(".header").height();
        var winHeight = ($(window).height() - headerHeight);

        var ban_items = $('.ban_items').height();
        var slcontents = $('.slcontents').height();
        var b1desc = $('.bdescs').height();

        var banPad = (winHeight - ban_items) / 2;
        var slcontentsPad = (winHeight - slcontents) / 2;
        var b1descPad = (winHeight - b1desc) / 2;

        $('.ban_items').css({ 'padding-top': banPad });
        $('.slcontents').css({ 'padding-top': slcontentsPad });
        $('.bdescs').css({ 'padding-top': b1descPad });
        $('.bannersa').css({ 'height': winHeight });
        $('.bannerSix').css({ 'height': winHeight });
        $('.bannerSeven').css({ 'height': winHeight });

    }

    //=======================================================
    // Background Video
    //=======================================================
    // var vid = document.getElementById("myVideo");
    // var vid = document.getElementById("myVideo").setAttribute('autoplay', false);
    // var vid = document.getElementById("myVideo").setAttribute('autoplay', true);


    // function playPause() {
    //     if (vid.paused) {
    //         vid.play();
    //     } else {
    //         vid.pause();
    //     }
    // }
    // if ($('#myVideo').length < 0) {

    // if ($('#myVideo').length > 0) {
    //     $('#playVideo').on('click', function(e) {
    //         e.preventDefault();
    //         playPause();
    //         if ($(this).hasClass('playing')) {
    //             $(this).removeClass('playing').html('<i class="fas fa-play"></i>');
    //             vid.pause();
    //         } else {
    //             $(this).addClass('playing').html('<i class="fas fa-pause"></i>');
    //             vid.play();
    //         }
    //     });
    // }


    //========================
    // WOW INIT
    //========================
    if ($(window).width() > 766) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }


    // ========================
    // Loader 
    // ========================
    // $(window).load(function() {
    //     if ($(".loaderWrap").length > 0) {
    //         $(".loaderWrap").delay(500).fadeOut("slow");
    //     }
    // });

    // ========================
    // Loader 
    // ========================
    setTimeout(function() {
        $(".preloader").fadeOut();
    }, 1500);

    //========================
    // Pretty Photo
    //========================
    // if ($("a[data-rel^='prettyPhoto']").length > 0) {
    //     $("a[data-rel^='prettyPhoto']").prettyPhoto({
    //         social_tools: false
    //     });
    // }



    //========================
    // Back To Top
    //========================
    $("body, html").on("click", "#backToTop", function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
    });



    //========================
    // Feature Click
    //========================
    if ($(".singleFeatureDetails").length > 0) {
        $(".sF2con").on('click', function(e) {
            e.preventDefault();
            var id = $('a', this).attr('href');
            $(".sF2con").removeClass('active');
            $(this).addClass('active');

            $(".sF2DHolder .singleFeatureDetails").fadeOut('slow');
            $(id).fadeIn('slow');
        });
    }



    //========================
    // Menu Setup
    //========================

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 40) {
            $("#header").addClass('fixedHeader');
        } else {
            $("#header").removeClass('fixedHeader');
        }

        /************ Menu Active on Scroll **********************/
        Scroll();

    });

    $("#menuToggle a").on('click', function(e) {
        e.preventDefault();
        $(".mainMenu > ul").slideToggle('slow');
        $(this).toggleClass('active');
    });

    $('.mainMenu ul li.scroll > a').on('click', function() {
        if ($(window).width() > 766) {
            $('html, body').animate({ scrollTop: $(this.hash).offset().top - 68 }, 1000);
        } else {
            $('html, body').animate({ scrollTop: $(this.hash).offset().top - 68 }, 1000);
            $(".mainMenu > ul").slideUp('slow');
            $("#menuToggle").removeClass('active');
        }
        return false;
    });

    // $('.mainMenu ul li.hasChildren span.expandbutton').on('click', function() {
    //     $(this).next('ul.dropMenu').slideToggle('slow');
    //     $(this).toggleClass('active');
    // });

    function Scroll() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 270;
        var rangeBottom = 500;

        $('.mainMenu').find('.scroll > a').each(function() {
            var atr = $(this).attr('href');
            if ($(atr).length > 0) {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }

        });

        $.each(contentTop, function(i) {

            if (winTop > contentTop[i] - rangeTop) {

                $('.mainMenu li.scroll')
                    .removeClass('active')
                    .eq(i).addClass('active');
            }
        });

    }

    // if ($(".colorPreset").length > 0) {
    //     $(".colorPreset a").on('click', function(e) {
    //         e.preventDefault();
    //         var cs = $(this).attr('href');
    //         $(".colorPreset a").removeClass('active');
    //         $(this).addClass('active');
    //         $("#colorPreset").attr('href', 'css/colors/' + cs + '.css');
    //     });
    // }

    // if ($(".colorPreset").length > 0) {
    //     $(".colorPreset a").on('click', function(e) {
    //         e.preventDefault();
    //         var cs = $(this).attr('href');
    //         $(".colorPreset a").removeClass('active');
    //         $(this).addClass('active');
    //         $("#colorPreset").attr('href', 'css/colors/' + cs + '.css');
    //     });
    // }


    //========================================================
    // Portfolio Mixing
    //========================================================
    if ($("#Grid").length > 0) {
        $('#Grid').mixIt({
            targetSelector: '.mix',
            filterSelector: '.filter'
        });
    }

    //========================
    // Pretty Photo
    //========================
    // if ($("a[data-rel^='prettyPhoto']").length > 0) {
    //     $("a[data-rel^='prettyPhoto']").prettyPhoto({
    //         social_tools: false
    //     });
    // }


    // $('.axisy').tilt({
    //     axis: 'y'
    // })

    $('.axisx').tilt({
        disableAxis: 'x'
    });


    // $(document).mousemove(function(e) {
    //     $('.pointer').css({ left: e.pageX, top: e.pageY });
    // });




})(jQuery);

// Initialize cloudinary
var cl = cloudinary.Cloudinary.new({ cloud_name: 'millscreates', secure: true });
// Call
cl.responsive();


//magic mouse
options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "pointer-blur",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 35,
    "outerHeight": 35
};
magicMouse(options);


//vanta js background
VANTA.TOPOLOGY({
    el: "#ripple",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    // color: 0x325866,
    // color: 0x436e78,
    color: 0x7d404a,
    backgroundColor: 0x202020
        // color: 0x898989,
        // color: 0x645f5f,
});

// const effect = VANTA.TOPOLOGY({
//     el: '#ripple',
//     color: 0x645f5f,
//     backgroundColor: 0x91818
// })


// const effect = VANTA.TOPOLOGY({
//     el: '#ripple',
//     color: 0x645f5f
// })


// Later, if the container changes size and you want to force Vanta to redraw at the new canvas size
// effect.resize()
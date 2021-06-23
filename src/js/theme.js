(function($) {
 
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

        $('.bdescs').css({ 'padding-top': b1descPad });
        $('.bannerSeven').css({ 'height': winHeight });
    }

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
    setTimeout(function() {
        $(".preloader").fadeOut();
    }, 1500);

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

    //========================================================
    // Portfolio Mixing
    //========================================================
    if ($("#Grid").length > 0) {
        $('#Grid').mixIt({
            targetSelector: '.mix',
            filterSelector: '.filter'
        });
    }


    $('.axisx').tilt({
        disableAxis: 'x'
    });

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
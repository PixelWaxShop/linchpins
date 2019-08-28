// **** FAQ transitions ****
document.addEventListener("DOMContentLoaded", function() {
    $('.q-container').click(function() {
        if ($(this).children('.q-txt').hasClass("fade-out")) {
            $(this).children('.q-txt').removeClass("fade-out");
            $(this).children('.q-txt').addClass("fade-in");
            $(this).children('.q-expanded').children('.img-q-expanded').css('background-image', 'url(./assets/images/btn-expanded-q.svg)');
        } else {
            $(this).children('.q-txt').removeClass("fade-in");
            $(this).children('.q-txt').addClass("fade-out");
            $(this).children('.q-expanded').children('.img-q-expanded').css('background-image', 'url(./assets/images/btn-collapsed-q.svg)');
        }
    });


    $('.btn-expanded').click(function() {
        if ($(this).parent().parent().parent().parent().find('.faq-wrapper').hasClass("fade-out")) {
            $(this).parent().parent().parent().parent().find('.faq-wrapper').removeClass("fade-out");
            $(this).parent().parent().parent().parent().find('.faq-wrapper').addClass("fade-in");
            $(this).find('.img-expanded').attr('src', './assets/images/btn-expanded.svg');
            $(this).parent().find('.q-section-txt').css('color', '#a8b5c7');
            $(this).parent().parent().find('.q-section-title').css('opacity', '1');
        } else {
            $(this).parent().parent().parent().parent().find('.faq-wrapper').removeClass("fade-in");
            $(this).parent().parent().parent().parent().find('.faq-wrapper').addClass("fade-out");
            $(this).find('.img-expanded').attr('src', './assets/images/btn-collapsed.svg');
            $(this).parent().find('.q-section-txt').css('color', '#15183e');
            $(this).parent().parent().find('.q-section-title').css('opacity', '0.5');
        }
    });

    // **** FAQ transitions **** END






});






$(document).ready(function() {

    $(".movie-btn").click(function() {
        $('.myVideo').attr("src", $(this).attr("vidUrl"));
        document.getElementById('myVideo').play();
        $('.myVideo').removeClass("hide");
        $('.myVideo').addClass("show");
        $('.youTube').addClass("hide");
        $('.youTube').removeClass("show");
    });

    $(".btn-play-video-modal").click(function() {
        $('.youTube').removeClass("hide");
        $('.youTube').addClass("show");
        $('.myVideo').addClass("hide");
        $('.myVideo').removeClass("show");
        $('.youTube').attr("src", $(this).attr("vidUrl"));
    });

    $(".widscreen-btn").click(function() {
        $(".modal-vid").fadeIn(500);
        $(".vid-holder img").removeClass("show");
        $(".widescreen-img").addClass("show");
    });

    $(".standard-btn").click(function() {
        $(".modal-vid").fadeIn(500);
        $(".vid-holder img").removeClass("show");
        $(".standard-img").addClass("show");
    });

    $(".sixteen-nine-btn").click(function() {
        $(".modal-vid").fadeIn(500);
        $(".vid-holder img").removeClass("show");
        $(".sixteen-nine").addClass("show");
    });

    $(".pal-btn").click(function() {
        $(".modal-vid").fadeIn(500);
        $(".vid-holder img").removeClass("show");
        $(".pal").addClass("show");
    });


    $(".close").click(function() {
        $(".modal-vid").fadeOut(500);
        /*document.getElementById('myVideo').pause();*/
        $('.youTube, .myVideo').attr('src', '');
    });


    // Enroll button
    $("#college_admissions_essays_link").click(function() {
        $('#college_admissions_essays_button').click();
    });
    $("#middle_school_composition_link").click(function() {
        $('#middle_school_composition_button').click();
    });
    $("#high_school_composition_link").click(function() {
        $('#high_school_composition_button').click();
    });
    $("#ap_language_link").click(function() {
        $('#ap_language_button').click();
    });
    $("#ap_literature_link").click(function() {
        $('#ap_literature_button').click();
    });
    $("#submit_your_own_link").click(function() {
        $('#submit_your_own_button').click();
    });


    $('body').scroll(function() {
        // declare variable

        if ($(window).width() >= 665) {

            var topPos = $('#scroll').offset().top; //$(this).scrollTop();
            //alert('2');

            // if user scrolls down - show scroll to top button


            if (topPos < 80) {
                //alert('ko bi reko ' + scroll)
                $(".landing--header").addClass('color');
                $(".header-blob").hide();
                $(".header-blob-student").hide();
                $(".header-blob-product").hide();
                $(".header-blob-contact").hide();
                //$(".header-blob-student").css('z-index', 5);
            } else {
                $(".landing--header").removeClass('color');
                $(".header-blob").show();
                $(".header-blob-student").show();
                $(".header-blob-product").show();
                $(".header-blob-contact").show();
                //$(".header-blob-student").css('z-index', 7);
            }

        }
    });
});



window.document.onkeydown = function(e) {
    if (!e) e = event;
    if (e.keyCode == 27) {

        $('.youTube, .myVideo').attr('src', '');
        $('.modal-vid').fadeOut(500);
        document.getElementById('myVideo').pause();
    }
};

function getBodyScrollTop() {
    var elmnt = document.getElementById("firstSection");
    var y = elmnt.offsetTop;

    //const el = document.scrollingElement || document.documentElement;
    return y;
}
$(document).ready(function () {

    //---------------- niceScroll ----------------

    if ($(window).width() <= 1024) {
        $(".main-content-wrapper").getNiceScroll().hide();
    } else {
        var nice = $(".main-content-wrapper").niceScroll({
            // horizrailenabled: false,
            scrollspeed: '50',
            autohidemode: 'false',
            overflowy: 'false'
        });

        var _super = nice.getContentSize;

        nice.getContentSize = function () {
            var page = _super.call(nice);
            page.h = nice.win.height();
            return page;
        }

        $('.nicescroll-rails.nicescroll-rails-vr').remove();
    }


    // intro
    TweenMax.from($('.intro-img'), 1, {
        opacity: 0,
        autoAlpha: 0,
        x: '+=100px',
        ease: Power2.easeNone
    });

    $('#btn-intro').click(function () {
        closeIntro();
    })

    // menu
    $('#menu').click(function () {
        openMenu();
    });

    $('#btn-result').click(function () {
        var nav = $(this).attr('data-nav');
        $('.nav-link').removeClass('active');
        $('.result-link').addClass('active');
        $('.nav-content').removeClass('reveal');
        $('#' + nav).addClass('reveal');
        openMenu();
    })

    $('#btn-close').click(function () {
        closeMenu();
    })

    $('.nav-link').click(function () {
        var content = $(this).attr('data-id');
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        $('.nav-content').removeClass('reveal');
        $('#' + content).addClass('reveal');
    });

    // Question
    $('#overlay-btn').click(function () {
        closeQuestion();
    });
    $('.content-btn').click(function () {
        var quest = $(this).attr('data-img');
        $('#' + quest).addClass('reveal');
        openQuestion();
    });

    $('.form-btn').click(function () {
        closeQuestion();
    });
});

function closeIntro() {
    TweenMax.to($('.intro'), 0.5, {
        opacity: 0
    });
    setTimeout(function () {
        $('.intro').addClass('hidden');
    }, 750);
}

function openMenu() {
    var menu = new TimelineMax();
    menu.to($('.menu'), 0.75, {
            scaleY: 1,
            ease: Power2.easeNone,
            transformOrigin: "top"
        })
        .to($('.menu-wrapper'), 0.5, {
            opacity: 1,
            ease: Power2.easeNone,
        });

    menu.play();
}

function closeMenu() {
    var menu = new TimelineMax();
    menu.to($('.menu-wrapper'), 0.5, {
            opacity: 0,
            ease: Power2.easeNone,
        })
        .to($('.menu'), 0.75, {
            scaleY: 0,
            ease: Power2.easeNone,
            transformOrigin: "top"
        });

    menu.play();
}

function openQuestion() {
    $('.main-content-overlay').addClass('reveal');
    setTimeout(function () {
        if ($(window).width() <= 1024) {
            $('.content-overlay--img').css({
                opacity: 1,
                left: '',
                transform: 'scale(1)',
                transition: 'all 1.25s'
            });
        } else {
            $('.content-overlay--img').css({
                opacity: 1,
                left: '25%',
                transform: 'translate(-50% , -50% ) scale(1.15)',
                transition: 'all 1.25s'
            });
        }
    }, 500);
    var question = new TimelineMax();
    question.to($('.content-overlay--inner'), 1, {
            scaleX: 1,
            ease: Power2.easeNone,
            transformOrigin: 'right'
        })
        .to($('.content-overlay--bg'), 0.5, {
            opacity: 1,
            ease: Power2.easeNone,
        }, '-=0.25')
        .to($('.question-wrapper'), 0.75, {
            opacity: 1,
            ease: Power2.easeNone,
        })
        .to($('.overlay-close'), 0.75, {
            opacity: 1,
            ease: Power2.easeNone,
        }, '-=0.5');

    question.play();
}

function closeQuestion() {
    setTimeout(function () {
        if ($(window).width() <= 1024) {
            $('.content-overlay--img').css({
                opacity: 0,
                transition: 'all 0.4s',
                left: '',
                transform: 'scale(0)',
            });
        } else {
            $('.content-overlay--img').css({
                opacity: 0,
                transition: 'all 0.4s',
                left: '50%',
                transform: 'translate(-50% , -50%) scale(0)',
            })
        }
    }, 1000);
    setTimeout(function () {
        if ($(window).width() <= 1024) {
            $("#question-detail").scrollTop(0);
        }
        $('.main-content-overlay').removeClass('reveal');
        $('.question-wrapper').removeClass('reveal');
    }, 1500);
    var question = new TimelineMax();
    question.to($('.overlay-close'), 0.5, {
            opacity: 0,
            ease: Power2.easeNone,
        })
        .to($('.question-wrapper'), 0.75, {
            opacity: 0,
            ease: Power2.easeNone,
        }, '-=0.5')
        .to($('.content-overlay--inner'), 1, {
            scaleX: 0,
            ease: Power2.easeNone,
            transformOrigin: 'right'
        })
        .to($('.content-overlay--bg'), 0.5, {
            opacity: 0,
            ease: Power2.easeNone,
        }, '-=0.5');

    question.play();
}
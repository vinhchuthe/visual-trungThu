//---------------- niceScroll ----------------

$(".main-content-wrapper").niceScroll({
    // horizrailenabled: false,
    scrollspeed: '50',
    overflowy: 'false'
});


$(document).ready(function () {

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
    $('.frame').click(function () {
        var id = $(this).attr('id');
        var quest = $(this).attr('data-img');
        $('#' + quest).addClass('reveal');
        openQuestion(id);
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

function openQuestion(id) {
    $('.main-content-overlay').addClass('reveal');
    $('#' + id).css({
        opacity: 0,
        transition: 'all 1s',
    });
    setTimeout(function () {
        $('.content-overlay--img').css({
            opacity: 1,
            left: '25%',
            transform: 'translate(-50% , -50% ) scale(1.15)',
            transition: 'all 1.25s'
        });
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
    $('.frame').css({
        opacity: '',
        transition: 'all 1s',
    });
    setTimeout(function () {
        $('.content-overlay--img').css({
            opacity: 0,
            transition: 'all 0.4s',
            left: '50%',
            transform: 'translate(-50% , -50%) scale(0)',
        })
    }, 1000);
    setTimeout(function () {
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
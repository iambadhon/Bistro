$(function () {
    //================parallax js Start================//
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
    //================parallax js end================//

    //================scroll top start================//
    $(".scroll_top").click(function () {
        $("html,css").animate({
            scrollTop: 0,
        }, 00);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop()
        if (scrolling > 100) {
            $(".scroll_top").fadeIn(800);
        } else {
            $(".scroll_top").fadeOut(800);
        }
    });
    //================scroll top end================//

    //================sticky nav start================//
    $(".sticky_menu").waypoint(function (direction) {
        if (direction == "down") {
            $(".main_nav").addClass("sticky_nav");
        } else {
            $(".main_nav").removeClass("sticky_nav");
        }
    });
    //================sticky nav end================//

    //================slick slider start================//
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    //================slick slider end================//

    //================counter js Start================//
    $('.counter').counterUp({
        delay: 80,
        time: 2000,
    });
    //================counter js end================//

    //================smooth scroll start================//
    var html_body = $("html, body");
    $("nav a").on("click", function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                html_body.animate({
                        scrollTop: target.offset().top - 0,
                    },
                    00
                );
                return false;
            }
        }
    });

    //================smooth scroll end================//
});
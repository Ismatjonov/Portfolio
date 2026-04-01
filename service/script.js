$(window).on("scroll", function () {
    $(".cards").each(function () {
        let top = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let height = $(window).height();

        if (scroll + height > top + 100) {
            $(this).addClass("show");
        }
        else {
            $(this).removeClass("show");
        }
    });
});

$(window).on("scroll", function () {
    $(".first_part").each(function () {
        let top = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let height = $(window).height();

        if (scroll + height > top + 100) {
            $(this).addClass("show");
        }
        else {
            $(this).removeClass("show");
        }
    });
});

$(window).on("scroll", function () {
    $(".second_part").each(function () {
        let top = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let height = $(window).height();

        if (scroll + height > top + 100) {
            $(this).addClass("show");
        }
        else {
            $(this).removeClass("show");
        }
    });
});

$("#burger").click(function() {
    $("header ul").toggleClass("activate");
});

$("#year").text(new Date().getFullYear());
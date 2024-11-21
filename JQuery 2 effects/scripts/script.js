$(document).ready(function () {

    // slidetoggle
    $(".showHide h2").click(function () {
        $(this).next().slideToggle(500);
        $(this).children("span").toggleClass("rotated");
    })

    // fade
    $(".showHide2 h2").click(function () {
                    $(this).children("span").toggleClass("rotated");
        if ($(this).children("span").hasClass("rotated")) {
            $(this).next().fadeOut(1000);
        } else {
            $(this).next().fadeIn(1000);
        }

    })
    
    // show/hide
    $(".showHide3 h2").click(function () {
        if ($(this).children("span").hasClass("rotatedHalf")) {
            $(this).next().show(500);
        } else {
            $(this).next().hide(500);
        }
        $(this).children("span").toggleClass("rotatedHalf");

    })


});
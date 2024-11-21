$(document).ready(function () {

    $("#hideParaBtn").click(function() {
        $(".paragraphs").hide();
    });

    $("#hideDivBtn").click(function() {
        $("main").hide();
    });

    $(".disappearOnClick").click(function () {
        $(this).fadeOut();
    });


});
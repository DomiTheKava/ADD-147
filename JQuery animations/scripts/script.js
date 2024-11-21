$(document).ready(function () {

    $("#up-arrow").click(function () {
        $("#character").animate({
            marginTop: "-=15px"
        });
    });

    $("#down-arrow").click(function () {
        $("#character").animate({
            marginTop: "+=15px"
        });
    });

    $("#left-arrow").click(function () {
        $("#character").animate({
            marginLeft: "-=15px"
        });
    });

    $("#right-arrow").click(function () {
    $("#character").animate({
            marginLeft: "+=15px"
        });
    });



    $("#grow-btn").click(function () {
    $("#character").animate({ width: "+=1000px", height: "+=1000px"}, 10000);
    });
    


    $("#stop-btn").click(function () {
        $("#character").stop();
    });



    $("#callback-btn").click(function () {
        $(this).hide("slow", function () {
            alert("callback activated");
        });
    });



    $("#chain-btn").click(function () {
        $("#character")
            .slideUp(2000)
            .slideDown(2000)
    });

});
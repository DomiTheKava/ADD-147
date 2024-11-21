$(document).ready(function () {

    // classes (add / remove)
    $("#darkModeBtn").click(function () {
        $('body').addClass('darkMode');
    });

    $("#lightModeBtn").click(function () {
        $('body').removeClass('darkMode');
    });

    $("#largerFont").click(function () {
        const currentFontSize = parseInt($("p").css('font-size'))
        const newFontSize = currentFontSize + 1;
        $("p").css('font-size', newFontSize + 'px');
    });

        $("#smallerFont").click(function () {
        const currentFontSize = parseInt($("p").css('font-size'))
        const newFontSize = currentFontSize - 1;
        $("p").css('font-size', newFontSize + 'px');
    });
    
    // get / set
    $("#submitBtn").click(function () {

        const fname = $("#fname").val();
        $("#fname").val("")

        const lname = $("#lname").val();
        $("#lname").val("")

        const age = $("#age").val();
        $("#age").val("")

        const email = $("#email").val();
        $("#email").val("")

        const phone = $("#number").val();
        $("#number").val("")

        alert("you entered:\n" + fname + "\n" + lname + " \n" + age + "\n " + email + " \n" + phone);

    });

    // add (append / prepend)
    $("#emptyContainer").append("<p>This section was appended to this div from the script!<\p>")
    $("#emptyContainer").prepend("<h1>Add<\h1>")

    // remove
    $("#removeBtn").click(function () {
        $("#removeME").remove();
    });

    // set a css property
    $("#changeBackround").click(function () {
        $("#changeBackround").css("background-color", "black");
    });

    // dimensions
    $("#dimensionsBtn").click(function () {
        $("#dimensions")
            .height(300)
            .width(500)
    });


});
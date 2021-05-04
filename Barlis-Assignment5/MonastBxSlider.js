$(document).ready(function() {
    //image bxslider for Most Recent Build page
    $(".slides").bxSlider({
        preloadImages: 'visible',
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 10,
        randomStart: true,
        pause: 2500,
        touchEnabled: true,
        infiniteLoop: true,
        pager: true
    });

    /***************************************************************************************************/

    //AJAX and JSON implementation for Q&A in the Answers forum page
    $.ajax({
        type: "get",
        url: "MonastQ&A.json",
        mimeType: "application/json",

        beforeSend: function() {
            $("#qa").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#qa").html("");
            $.each(data, function () {
                $.each(this, function (qa, value) {
                    $("#qa").append(
                        "<h3>" + value.question + "</h3>" +
                        "<p>" + value.answer + "</p><br>"
                    );
                });
            });
        }
    });


    /***************************************************************************************************/

    //getJSON for the About page image and desciption
    $.getJSON("MonastTech.json", function(data){
        $.each(data, function() {
            $.each(this, function(tech, value) {
                $("#tech").append(
                    "<h1>" + value.performance + "</h1>" +
                    "<p>" + value.bio + "</p>"
                );
            });
        });
    });

}); //ready


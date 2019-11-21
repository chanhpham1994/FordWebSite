$(document).ready(function () {

    //Banner
    $(".open").click(function () {
        $(".hidden").slideToggle("slow");
    });

    $(".disclosures").click(function () {
        $("#pannel").slideToggle("slow");
        $(".downicon").toggleClass("toggleicon");
    });

    //Footer
    $("#shop").click(function () {
        $("#shopping").slideToggle("slow");
    });

    $(".fina").click(function () {
        $(".finance").slideToggle("slow");
    });

    $(".own").click(function () {
        $(".owner").slideToggle("slow");
    });

    $(".exper").click(function () {
        $(".Exper").slideToggle("slow");
    });
    

});



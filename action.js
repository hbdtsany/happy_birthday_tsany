// setTimeout(function() {
//     document.getElementById("loading").remove();
//     document.body.style.animation = "bg 4s";
//     document.body.style.animationFillMode = "forwards";
//     document.getElementById("buttclick").style.display = "block";
// }, 5000);
$("#loading").on("click", function() {
    $("#loading").remove();
    $("#words>h1>span").each(function(i) {
        $(this).fadeIn(1000 * (i) * 0.5);
        // $(this).fadeIn().fadeOut(1000 * (i + 1));
    });
    $("#words>h1>span").promise().done(function() {
        $("#words").animate({
            top: "-20%",
            position: "relative",
        });
        // $("#words").animate({});
    });
    // $("div").promise().done(function() {
    //     $("p").append(" Finished! ");
    // });
});
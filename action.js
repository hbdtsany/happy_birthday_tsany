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
        $("#words").css("position", "relative");
        $("#words").animate({
            top: "-30%",
        });
        $(".circle-btn").css("display", "block");
        $(".circle-btn").fadeIn(2000);
    });
    // $("div").promise().done(function() {
    //     $("p").append(" Finished! ");
    // });
});
$(".circle-btn").on("click", function() {
    $("#words").fadeOut(1000);
    $(".circle-btn").fadeOut(1000);
    $(".circle-btn").promise().done(function() {
        $("#words").remove()
        $(".circle-btn").remove()
        $("body").css("backgroundColor", "var(--pink)");
        $(".blockleft").hide("slide", { direction: "left" }, 1000);
        $(".blockright").hide("slide", { direction: "right" }, 1000, function() {
            $("#curtain").remove();
        });

        // $(".blockleft").fadeOut(2000);
        // $(".blockright").fadeOut(2000);
    });
    // $(".blockleft").promise().done(function() {
    //     $("#curtain").remove();
    // });

    // $("#buttclick").promise().done(function() {
    //     $("#buttclick").remove();
    //     // document.body.style.backgroundColor = "var(--pink)";
    //     $("body").css("backgroundColor", "var(--pink)");
    //     $("#blockleft").addClass(["animate__animated", "animate__fadeOutLeft"]);
    //     $("#blockright").addClass(["animate__animated", "animate__fadeOutRight"]);
    // });
});
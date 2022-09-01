// Fungsi show/fadeIn otomatis ubah display none ke block
$(".waviy").on("click", function() {
    $("#loading").remove();
    var audio = $('#firemusic')[0];
    audio.play();
    // $("#firemusic").play();
    $("#firework").fadeIn();
    // const audio = new Audio("Firework.mp3");
    // audio.play();
    $("#words>h1>span").each(function(i) {
        // $(this).show("bounce", (1000 * (i) * 0.5));
        // $(this).slideDown(1000 * (i) * 0.5);
        $(this).fadeIn(1000 * (i) * 0.5);
    });
    $("#words>h1>span").promise().done(function() {
        $("#words").css("position", "relative");
        $("#words").animate({
            top: "-30%",
        });
        $(".circle-btn").css("display", "block");
        $(".circle-btn").fadeIn(2000);
    });
});
$("body").on("click", function() {
    // var audio = $('#firemusic')[0];
    // audio.play();
    // $("#firemusic").play();
});
$(".circle-btn").on("click", function() {
    $("#words").fadeOut(1000);
    $("#firework").fadeOut(1000);
    $("#firemusic").remove();
    $(".circle-btn").fadeOut(1000);
    $(".circle-btn").promise().done(function() {
        $("#firework").remove()
        $("#words").remove()
        $(".circle-btn").remove()
        $("body").css("backgroundColor", "var(--light-blue)");
        $(".blockleft").hide("slide", { direction: "left" }, 1000);
        $(".blockright").hide("slide", { direction: "right" }, 1000, function() {
            $("#curtain").remove();
            $("#card-menu").show("fold", 2000, showCongrats());
            // $("#card-menu").show("fold", 2000, function() {
            //     $("#congrats").show("bounce", 1000);
            // });
            // $("#congrats>h1>span").each(function(i) {
            //     $(this).fadeIn(1000 * (i) * 0.5);
            // });
        });
    });
    // $("#card-menu").promise().done(function() {
    //     $("#congrats").show("bounce", 1000);
    // });
});

function showCongrats() {
    // $("#congrats").show("bounce", 4000);
    $("#congrats").fadeIn(4000);
    // $("#congrats>h1>span").each(function(i) {
    //     $(this).fadeIn(1000 * (i) * 0.5);
    // });
    // $("#congrats").show("bounce", 4000);
};
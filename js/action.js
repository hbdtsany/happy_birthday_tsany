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
    var audio2 = $('#music')[0];
    $("#words").fadeOut(1000);
    $("#firework").fadeOut(1000);
    $("#firemusic").remove();
    audio2.play();
    $(".circle-btn").fadeOut(1000);
    $(".circle-btn").promise().done(function() {
        $("#firework").remove()
        $("#words").remove()
        $(".circle-btn").remove()
        $("body").css("backgroundColor", "var(--light-blue)");
        $(".blockleft").hide("slide", { direction: "left" }, 1000);
        $(".blockright").hide("slide", { direction: "right" }, 1000, function() {
            $("#curtain").remove();
            $("#main-menu").show("fold", 2000, showCongrats());
            // $("#card-menu").show("fold", 2000, showCongrats());
        });
    });
});




function showCongrats() {
    $('#decoration').css('background-image', 'url("' + '../img/garlands.png' + '")');
    $('#decoration').css('height', '150px');
};

$("#decoration").on('click', function() {
    $("#decorate").fadeIn(2000, function() {
        $("#decoration").remove();
        $('#cakeish').delay(1000).css('background-image', 'url("' + '../img/cake.png' + '")');
        $('#cakeish').delay(1000).css('height', '150px');
        $('#cakeish').delay(1000).css('background-size', 'contain');
    });
});
$("#cakeish").on('click', function() {
    $("#cake").delay(2000).css('display', 'flex');
    $("#cake").delay(2000).fadeIn();
});

$("#cakeclose").on('click', function() {
    $("#cake").fadeOut(4000);
    $("#cake").delay(5000).remove();
    $("#cakeish").remove();
    $('#letters').css('background-image', 'url("' + '../img/letters.png' + '")');
    $('#letters').css('height', '150px');
    $('#letters').delay(1000).css('background-size', 'contain');
})

// Message
// $("#letters").on('click', function() {
// $('#message').css('display', 'block');
//     $('.message').fadeIn('slow');
// });
$('#letters').click(function() {
    $(this).fadeOut('slow');
    // $('.cake').fadeOut('fast').promise().done(function() {
    $('.message').fadeIn('slow');
    // });

    var i;

    function msgLoop(i) {
        $("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function() {
            i = i + 1;
            $("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
            if (i == 50) {
                $("p:nth-child(49)").fadeOut('slow').promise().done(function() {
                    $('.cake').fadeIn('fast');
                });

            } else {
                msgLoop(i);
            }

        });
        // body...
    }

    msgLoop(0);
    $('#story').fadeOut('slow').promise().done(function() {
        $('#after').fadeIn('slow');
    });

});
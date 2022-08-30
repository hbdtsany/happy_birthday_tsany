// Remove loading after 5s
// setTimeout(function() {
//     document.getElementById("loading").remove();
//     document.body.style.animation = "bg 4s";
//     document.body.style.animationFillMode = "forwards";
//     document.getElementById("buttclick").style.display = "block";
// }, 5000);

function curtain() {
    animateCSS('.blockleft', 'fadeOutLeft').then((message) => {
        document.getElementById("curtain").remove();
    });
    animateCSS('.blockright', 'fadeOutRight').then((message) => {
        // document.getElementById('curtain').remove();
        document.getElementById("buttclick").remove();
    });
    // animateCSS('.middle', 'animate__fadeOut').then((message) => {
    // });
}
// document.body.style.backgroundColor = "var(--pink)";
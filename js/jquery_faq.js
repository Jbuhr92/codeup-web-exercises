$(document).ready(function() {
    $("dt").click(function() {
        let $dd = $(this).next("dd");
        if ($dd.hasClass("invisible")) {
            $(this).next().fadeToggle();
            $(this).addClass("highlight")
        } else {
            $(this).removeClass("highlight")
        }
    });
});

// $('dt').on('click', function (){
//     $(this).next().fadeToggle();
// })
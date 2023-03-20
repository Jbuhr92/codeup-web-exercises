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

$('button').click(function (){
$(this).parents('.column').find('ul li:last-child').toggleClass('blueFont')
})

$('h3').click(function (){
    $(this).next().toggleClass('boldFont')
})

$('li').click(function (){
    $(this).parents('ul').find('li:first-child').toggleClass('highlight')
})
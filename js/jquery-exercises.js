$(document).ready(function (){
   // alert("the page has loaded")
$(`.codeup`).css('border', '1px solid red');
$(`li`).css( 'font-size', '20px');
$(`h1, p, li`).css('background-color', 'yellow');
    alert($(`h1` ).contents().text())

});
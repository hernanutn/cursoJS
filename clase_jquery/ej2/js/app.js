$(document).ready(function () {    
    $('#btn1').click(function () {
        $('th').attr('style', 'background-color: blue');
    });
    $('#btn2').click(function () {
        $('th').css('color', 'yellow');
    });
    $('#btn3').click(function () {
        $('p').text('Hola Jquery');
    });
})
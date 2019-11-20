$(document).ready(function () {    
    $('#btn1').click(function () {
        $('h1').text('Hola Jquery');
    });
    $('#btn2').click(function () {
        alert($('h1').text());
    });
    $('#btn3').click(function () {
        $('p').text('Hola Jquery');
    });
})
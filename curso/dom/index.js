let div;
window.addEventListener('load', function () {
    div = document.getElementById('miDiv');
    let childs = div.childNodes;
    // console.log(div.children);
    div.firstElementChild.style.backgroundColor = "yellow";
    let titulo = document.getElementsByTagName('h1')[0];
    let hermanos = titulo.nextElementSibling.nextElementSibling;
    let body = document.body;
    let ultimoHijo = body.lastElementChild.previousElementSibling;
    let enalace = document.createElement("a");
    // let texto = document.create
    console.log(ultimoHijo);
});

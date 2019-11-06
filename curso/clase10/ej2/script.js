window.addEventListener('load', function () {
    let form = this.document.forms[0];
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        enviarDatos();        
    });
});

function enviarDatos() {
    let xhr = new XMLHttpRequest();
    let info = this.document.getElementById('info');
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4) {
            if(xhr.status = 200) {
                info.innerText = xhr.responseText;
            } else {
                info.innerText = xhr.statusText;
            }
        } else {
            info.appendChild(crearSpinner());
        }
    };
    xhr.open('POST', 'pagina1.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(traerDatos());
}

function traerDatos() {
    let nombre = document.getElementById('txtNombre').value;
    let edad = document.getElementById('txtEdad').value;
    return 'nombre=' + encodeURIComponent(nombre) + '&edad=' + encodeURIComponent(edad);
}

function crearSpinner() {
    let img = document.createElement('img');
    img.setAttribute('src', './images/spinner.gif');
    return img;
}
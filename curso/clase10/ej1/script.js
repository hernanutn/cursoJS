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
                
                console.log(xhr.responseText);
                let data = JSON.parse(xhr.responseText);
                // info.innerText = xhr.responseText;
                info.innerText = data.nombre + ' ' + data.edad
            } else {
                info.innerText = xhr.statusText;
            }
        } else {
            info.appendChild(crearSpinner());
        }
    };
    xhr.open('GET', 'pagina1.php' + traerDatos());
    xhr.send();
}

function traerDatos() {
    let nombre = document.getElementById('txtNombre').value;
    let edad = document.getElementById('txtEdad').value;
    return '?nombre=' + nombre + '&edad=' + edad;
}

function crearSpinner() {
    let img = document.createElement('img');
    img.setAttribute('src', './images/spinner.gif');
    return img;
}
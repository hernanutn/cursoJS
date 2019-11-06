window.addEventListener('load', function () {
    let form = this.document.forms[0];
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        enviarDatos();        
    });
});

function enviarDatos() { 
    let i = 1;
    let xhr = new XMLHttpRequest();
    let info = this.document.getElementById('info');
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4) {
            if(xhr.status = 200) {
                let data = JSON.parse(xhr.responseText);
                limpiarInfo(info);
                info.appendChild(crearTabla(data));
            } else {
                info.innerText = xhr.statusText;
            }
        } else {
            limpiarInfo(info);
            /*console.log(i);*/
            i++;
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

function limpiarInfo() {
    while(info.hasChildNodes()) {
        info.removeChild(info.firstChild);
    }
}

function crearTabla(arr) {
    let tabla = document.createElement('table');
    let trhead = document.createElement('tr');    
    for(prop in arr[0]) {
        let th = document.createElement('th');
        th.setAttribute('style', 'background: #75C4B8')
        th.innerText = prop;
        trhead.appendChild(th);
    }
    tabla.appendChild(trhead);
    for(let i = 0; i< arr.length; i++) {
        let trbody = document.createElement('tr');
        let el = arr[i];
        for(prop in el) {
            let td = document.createElement('td');        
            td.innerText = el[prop];
            if(i%2) {
                td.setAttribute('style', 'background: rgb(200,200,200)')
            }
            trbody.appendChild(td);
        }        
        tabla.appendChild(trbody);
    } 
    /*tabla.setAttribute('border', '1px solid black')
    tabla.setAttribute('style', 'border-collapse: collapse')*/
    tabla.setAttribute('class', 'table table-striped table-hovered');
    return tabla;
}
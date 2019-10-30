window.addEventListener('load', () => {
    let boton = this.document.getElementById('btn');
    boton.addEventListener('click', traerTexto);
});

function traerTexto(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {// Cada vez que cambia el ready state de la peticion ejecuta esto
        if(xhr.readyState == 4) {
            if (xhr.status == 200) {
                let info = document.getElementById('inf');
                info.innerText = xhr.responseText;
            } else {
                alert('Error');
            }
        }
    }
    xhr.open('GET', './documento.txt', true);
    xhr.send();
}
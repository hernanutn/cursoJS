let listaPersonas = [];

function Persona(nombre, apellido, edad, genero, maneja, nada, bicicleta, pais) {

}

window.addEventListener('load', function() {
    //let form = document.getElementById('frmPersona');
    //let form = document.getElementsByTagName('form')[0];
    let form = document.forms[0];
    form.addEventListener('submit', manejarSubmit)
});

function manejarSubmit(e) {
    e.preventDefault();
    var nuevaPersona = new Persona();
}
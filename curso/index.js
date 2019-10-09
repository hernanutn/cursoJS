let listaPersonas = [];

function Persona(nombre, apellido, edad, genero, maneja, nada, bicicleta, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.maneja = maneja;
    this.nada = nada;
    this.bicicleta = bicicleta;
    this.pais = pais;
    Persona.prototype.Saludar = function () {
        console.log("Hola, soy " + this.nombre + " " + this.apellido + " " + " y tengo " + this.edad + " años")
    }
}

window.addEventListener('load', function() {
    //let form = document.getElementById('frmPersona');
    //let form = document.getElementsByTagName('form')[0];
    let form = document.forms[0];
    form.addEventListener('submit', manejarSubmit)
});

function manejarSubmit(e) {
    e.preventDefault();
    // let frm = e.target;
    let nuevaPersona = traerPersona();    
    listaPersonas.push(nuevaPersona);
    cargarFormulario(nuevaPersona);
    limpiarFormulario();
    console.log(listaPersonas);
}

function traerPersona() {        
    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;
    let edad = parseInt(document.getElementById('txtEdad').value);
    let genero = document.getElementById('rdoGeneroM').checked ? 'Masculino' : 'Femenino';
    let maneja = document.getElementById('chkManeja').checked;
    let nada = document.getElementById('chkNada').checked;
    let bici = document.getElementById('chkBici').checked;
    let pais = document.getElementById('cmbPais').value;
    return new Persona(nombre, apellido, edad, genero, maneja, nada, bici, pais);
}

function cargarFormulario(persona) {
    document.getElementById('txtNombre2').value = persona.nombre;
    document.getElementById('txtApellido2').value = persona.apellido;
    document.getElementById('txtEdad2').value = persona.edad;
    document.getElementById('rdoGeneroM2').checked = persona.genero == 'Masculino';
    document.getElementById('rdoGeneroF2').checked = persona.genero == 'Femenino';
    document.getElementById('chkManeja2').checked = persona.maneja;
    document.getElementById('chkNada2').checked = persona.nada;
    document.getElementById('chkBici2').checked = persona.bicicleta; 
    document.getElementById('cmbPais2').value = persona.pais;
}

function limpiarFormulario() {
    document.getElementById('txtNombre').value = '';
    document.getElementById('txtApellido').value = '';
    document.getElementById('txtEdad').value = '';
    document.getElementById('rdoGeneroM').checked = true;
    document.getElementById('rdoGeneroF').checked = false;
    document.getElementById('chkManeja').checked = false;
    document.getElementById('chkNada').checked = false;
    document.getElementById('chkBici').checked = false; 
    document.getElementById('cmbPais').value = '';
}
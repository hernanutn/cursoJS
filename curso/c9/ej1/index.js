window.addEventListener('load', cargarSelectPaises);

function cargarSelectPaises() {
    let selPaises = document.getElementById('selPaises');
    let paises =  obtenerPaises();
    cargarSelect(selPaises, paises);
    cargarSelectCiudad(selPaises.value);
    selPaises.addEventListener('change',  () => {
        let selPaises = document.getElementById('selPaises');
        cargarSelectCiudad(selPaises.value);
    });
}

function obtenerPaises() {
    return datos.map(dato => dato.pais).unique().sort();
}

function obtenerCiudades(pais) {
    return  datos.filter(dato => dato.pais == pais)
                 .map(elemento => elemento.ciudad)
                 .unique()
                 .sort();
}

function cargarSelectCiudad(pais) {
    let selCiudad = document.getElementById('selCiudades');
    let ciudades = obtenerCiudades(pais);
    cargarSelect(selCiudad, ciudades);
}

function cargarSelect(select , arr) {
    limpiarSelect(select);
    arr.forEach(el => {
        let option = document.createElement('option');
        let texto = document.createTextNode(el);
        // option.innerText = el;
        // option.value = el;
        option.setAttribute('value', el);
        option.appendChild(texto);
        select.appendChild(option);        
    });
}

function limpiarSelect(select) {
    while(select.hasChildNodes()) {
        select.removeChild(select.firstElementChild);
    }
}

Array.prototype.unique = function () {
    return [... new Set(this)]
}
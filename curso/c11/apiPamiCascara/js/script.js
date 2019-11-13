var ciudades = [];
const apiKey = '84ed3185f479532b2743916e9347ce0f';
window.addEventListener('load', function() {
    traerCiudades();
    this.document.getElementById('cmbCiudades').addEventListener(`change`, function (e) {
        traerPronostico(e.target.value);
    });

    this.document.getElementById('btnRecargar').addEventListener(`click`, function (e) {
        traerPronostico(document.getElementById('cmbCiudades').value);
    });
})

function traerCiudades() { 
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                let datos = JSON.parse(xhr.responseText);
                ciudades = parsearArgentinas(datos);
                cargarSelect(ciudades);
                document.getElementById('ultimaAct').innerHTML = "";
            } else {
                console.log(xhr.status);
            }
        } else {
            mostrarLoading();
        }
    };
    xhr.open('GET', './city.list.json', true);
    xhr.send();
}

function parsearArgentinas(arr) {
    return arr.filter(ciudad => ciudad.country == "AR")
              .map(ciudad => ({ id: ciudad.id, nombre: ciudad.name + ", " + ciudad.country})).sort((a, b) => {
                  if(a.nombre < b.nombre) {
                      return -1;
                  } else {
                      return 1;
                  }
              });
}

function cargarSelect(arr) {
    let select = this.document.getElementById('cmbCiudades');
    for(el of arr) {
        let opt = document.createElement('option');
        opt.setAttribute('value', el.id);
        let texto = document.createTextNode(el.nombre);
        opt.appendChild(texto);
        select.appendChild(opt);
    }
}

function traerPronostico(id) {
    let xhr = new XMLHttpRequest();   
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                let datos = JSON.parse(xhr.responseText);
                actualizarPronostico(datos)          ;
            } else {
                console.log(xhr.status);
            }
        } else {
            mostrarLoading();
        }
    };
    xhr.open('GET', armarUrl(id), true);
    xhr.send();
}
function mostrarLoading() {
    document.getElementById('ultimaAct').innerHTML = "<div class='card-img-top'><img src='./images/anemometro.gif'></div>";
}

function armarUrl(id) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?id=' + id + "&lang=es&units=metric&APPID=" + apiKey;
    return url;
}

function actualizarPronostico(pronostico) {
    console.log(pronostico);
    document.getElementById('temperatura').innerText = "Temperatura: " + pronostico.main.temp.toFixed(1) + "ºC"; 
    document.getElementById('humedad').innerText = "Húmedad: " + pronostico.main.humidity + " %"; 
    document.getElementById('presion').innerText = "Presión:  " + pronostico.main.pressure + " hPa"; 
    document.getElementById('viento').innerText = "Viento:   " + pronostico.wind.speed + " Km/h"; 
    document.getElementById('minmax').innerText = "Máxima: " + pronostico.main.temp_max.toFixed(1) + "°C / Minima:  " + pronostico.main.temp_min.toFixed(1) + "° C"; 
    document.getElementById('imagen').setAttribute('src', "http://openweathermap.org/img/w/" + pronostico.weather[0].icon + ".png");
    document.getElementById('ciudad').textContent = "Ciudad: " + pronostico.name; 
    document.getElementById('ultimaAct').textContent = "Ultima actualización: " + traerFecha();
}

function traerFecha() {
    let fecha = new Date();
    return fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();
}
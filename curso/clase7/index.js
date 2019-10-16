// console.log(personas);

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
    tabla.setAttribute('border', '1px solid black')
    tabla.setAttribute('style', 'border-collapse: collapse')
    return tabla;
}

window.addEventListener('load', function () {
    document.getElementById('divtabla').appendChild(crearTabla(autos));
});
// https://www.mockaroo.com/
window.addEventListener('load', () => {
    //document.getElementById("btnCalcular").onclick = calcularSuperficie;
    document.getElementById("btnCalcular").addEventListener('click', () => {
        let radio= document.getElementById("txtRadio").value;
        document.getElementById("txtSuperficie").value = calcularSuperficie(radio).toFixed(2);
    });
});

function calcularSuperficie(radio) {
    let superficie= Math.PI * Math.pow(radio, 2);
    return superficie;
}
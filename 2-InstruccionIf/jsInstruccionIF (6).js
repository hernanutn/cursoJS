function mostrar()
{
//tomo la edad  

    var edad = document.getElementById("edad").value;
    if(!isNaN(edad)){
        if(edad < 13) {
            alert("Es niño");
        } else if(edad < 18) {            
                alert("Es adolecente");
        }
        else {
            alert("Es adulto");
        }
    }
}//FIN DE LA FUNCIÓN
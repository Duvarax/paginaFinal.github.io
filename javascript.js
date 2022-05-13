var i = 0;
var img = [];
img[0] = "images/Espada.png";
img[1] = "images/Lanza.png";
img[2] = "images/Escudo.png";
img[3] = "images/Arco.png";
img[4] = "images/Guantes.png";
img[5] = "images/Metralleta.png";

function cambiarAtras(){
    i--
    if(i == -1){
        i = 5;
    }
    document.getElementById("slider").src = img[i];
}
var j = 0;
function cambiarAdelante(){
    j++
    if(j == 6){
        j = 0;
    }
    document.getElementById("slider").src = img[j];
}
var indice = 0;
var img = new Array; 
img[0] = "img/Cerberus.png";
img[1] = "img/Charon.png";
img[2] = "img/Hypnos.png";
img[3] = "img/Nyx.png";
img[4] = "img/Skelly.png";
function cambiarAtras1(){
    indice--;
    if(indice == -1){
        indice = 4;
    }  
    document.getElementById("slider").src = img[indice];
}
function cambiarAdelante1(){
    indice++;
    if(indice == 5){
        indice = 0;
    }
    document.getElementById("slider").src = img[indice];
}

setInterval(cambiarAdelante1, 5000);

var img1 = new Array; 
img1[0] = "img/1.png";
img1[1] = "img/2.png";
img1[2] = "img/3.png";
img1[3] = "img/4.png";
img1[4] = "img/5.png";
img1[5] = "img/6.png";
img1[6] = "img/7.png";

var i = 0;
function cambiarAtras2(){
    i--;
    if(i == -1){
        i = 6;
    }  
    document.getElementById("slider1").src = img1[i];
}
function cambiarAdelante2(){
    i++;
    if(i == 7){
        i = 0;
    }
    document.getElementById("slider1").src = img1[i];
}

setInterval(cambiarAtras2, 5000);

var img2 = new Array; 
img2[0] = "img/G.png";
img2[1] = "img/H.png";
img2[2] = "img/P.png";
img2[3] = "img/A.png";

var j = 0;
function cambiarAtras3(){
    j--;
    if(j == -1){
        j = 3;
    }  
    document.getElementById("slider2").src = img2[j];
}
function cambiarAdelante3(){
    j++;
    if(j == 4){
        j = 0;
    }
    document.getElementById("slider2").src = img2[j];
}
setInterval(cambiarAtras3, 5000);

function eliminar(){
    //Elimino la seccion que quiero
    var objeto = document.getElementById("form-div");
    objeto.parentNode.removeChild(objeto);
    //Creo un contenedor
    var nuevo = document.createElement("div");
    nuevo.className = "despues";
    //Agrego texto
    var texto = document.createTextNode(" Solicitud enviada! ");
    nuevo.appendChild(texto);
    //Agrego el contenedor con el texto a un elemento padre
    var padre = document.getElementById("padre");
    padre.className = "padre-despues";
    padre.appendChild(nuevo);
}

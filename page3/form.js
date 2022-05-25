
var indice = 0;
var img = new Array;
img[0] = "img/Cerberus.png";
img[1] = "img/Charon.png";
img[2] = "img/Hypnos.png";
img[3] = "img/Nyx.png";
img[4] = "img/Skelly.png";
function cambiarAtras1() {
    indice--;
    if (indice == -1) {
        indice = 4;
    }
    document.getElementById("slider").src = img[indice];
}
function cambiarAdelante1() {
    indice++;
    if (indice == 5) {
        indice = 0;
    }
    document.getElementById("slider").src = img[indice];
}

setInterval(cambiarAdelante1, 4000);

var img1 = new Array;
img1[0] = "img/1.png";
img1[1] = "img/2.png";
img1[2] = "img/3.png";
img1[3] = "img/4.png";
img1[4] = "img/5.png";
img1[5] = "img/6.png";
img1[6] = "img/7.png";

var i = 0;
function cambiarAtras2() {
    i--;
    if (i == -1) {
        i = 6;
    }
    document.getElementById("slider1").src = img1[i];
}
function cambiarAdelante2() {
    i++;
    if (i == 7) {
        i = 0;
    }
    document.getElementById("slider1").src = img1[i];
}

setInterval(cambiarAtras2, 4000);

var img2 = new Array;
img2[0] = "img/G.png";
img2[1] = "img/H.png";
img2[2] = "img/P.png";
img2[3] = "img/A.png";

var j = 0;
function cambiarAtras3() {
    j--;
    if (j == -1) {
        j = 3;
    }
    document.getElementById("slider2").src = img2[j];
}
function cambiarAdelante3() {
    j++;
    if (j == 4) {
        j = 0;
    }
    document.getElementById("slider2").src = img2[j];
}
setInterval(cambiarAtras3, 4000);

function validar() {
    var errores = [];
    var nombre = document.forms["formulario"]["nombre"].value.trim();
    var correo = document.forms["formulario"]["correo"].value.trim();
    var edad = document.forms["formulario"]["edad"].value.trim();
    let checks = document.querySelectorAll(".check-input");
    if (nombre == "") {
        errores.push("El campo 'nombre' debe ser rellenado");
    }
    var patronmail = /^\w+@\w+(\.\w{3})$/
    if (!patronmail.test(correo)) {
        errores.push("El correo es invalido...vuelva a ingresar");
    }
    if (isNaN(edad) || edad == '') {
        errores.push("'Edad' Debe ser un numero");
    } else if ((edad < 18)) {
        errores.push("Debe ser mayor de edad");
    }
    var aux = 0;
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked == false) {
            aux++;
        }
    }
    if (aux == 5) {
        errores.push("Debe marcar almenos una opcion");
    }
    var listaErrores = document.getElementById("error");
    var padre = document.getElementById("div1");
    listaErrores.innerHTML = "";
    padre.appendChild(listaErrores);
    listaErrores.className = "error";

    errores.forEach(element => {
        let li = document.createElement("li");
        li.className = "lista";
        li.setAttribute("style", "list-style: disc");
        li.innerHTML = element;
        listaErrores.appendChild(li);
    });

    if (errores.length == 0) {
            //Elimino la seccion que quiero
            var objeto = document.getElementById("div2");
            objeto.innerHTML = "";
            //Agrego texto
            var texto = document.createElement("p");
            texto.className = "p-despues";
            texto.innerHTML = (nombre + "<br> (" + correo + ") <br> de " + edad + " inviernos <br> Su solicitud fue enviada");
            objeto.appendChild(texto);
            //Agrego el contenedor con el texto a un elemento padre
            nombre.value = "";
        return false;
    }
    return false
 }

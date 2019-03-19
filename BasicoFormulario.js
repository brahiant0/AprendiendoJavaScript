var elemento=document.createElement("h2");
var contenido=document.createTextNode("Hola mundo");
elemento.appendChild(contenido);
elemento.setAttribute("align","center");
document.getElementById("subtitulo").appendChild(elemento);


var suma= function(numero1, numero2){
        var num1=parseFloat(document.getElementById("numero1").value);
        var num2=parseFloat(document.getElementById("numero2").value);
        var resultado= num1 +num2;
        return resultado;
}



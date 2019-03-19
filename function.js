function saludo(){
    document.write("Hola buen dia tengas");
}
saludo();
function suma(numero1, numero2){
    var num1=numero1;
    var num2=numero2;
    document.write("<br>"+" El resultado de la suma de los numeros "+num1+" y "+num2+" es: "+(num1+num2));
}
suma(10,20);

function sumaReturn(numero3, numero4){
    var num1=numero3;
    var num2=numero4;
    document.write("<br>"+"Lasuma de los numeros "+num1+" y "+num2+" es: ")
    return num1 + num2;
}

document.write(sumaReturn(20,21));


document.write("<br>");
var numeroMaximo=function(numero5,numero6){
    if(numero5> numero6){
        return numero5;
    }
    return numero6;
}

document.write("El numero maximo es: "+ numeroMaximo(1,7));
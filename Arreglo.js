/**
 * Mostrar valores
 */
var amigos=["Andres","Juan","Pedro"];
document.write(amigos[0]);

/**
 * Mostrar valor de un arreglo
 */
var personas=["Nicol","Luis","Manuel"];
personas[0]="Arturo";

console.log(personas);

/**
 * Añadir un trabajador
 */
var trabajadores=["Julian","Jaime","Jamilton"];
trabajadores[3]="Jamer";

console.log(trabajadores);

/**
 * Cantidad del arreglo
 */
var cantidadCompañeros=["Sergio","Mauro","Pepo"];
document.write("Tienes "+ cantidadCompañeros.length + " Compañeros");

/**
 * Añadir al final del arreglo con .length
 */
var Compañeros=["Diego","Pacho","Luiz"];
compañeros[Compañeros.length]="Fernan";

console.log(Compañeros);

/**
 * Añadir al final del arreglo con push
 */

var Parseros=["Diego","Pacho","Luiz"];
Parseros.push("Milron","Juan","Pedro");

console.log(Parseros);

/**
 * Elimina el ultimo
 */
var EliminaUltimo=["Diego","Pacho","Luiz"];
EliminadoDelGrupo.pop();

console.log(EliminaUltimo);

/**
 * Unir Arreglo
 */
 var unirArreglo1=["Monsalve","Milton","Lina"];
 var unirArreglo2=["Daniel","Jhoseft","Manuela"];

 var unir=unirArreglo1.concat(unirArreglo2);

 console.log(unir);

/**
 * Unir Arreglo join
 */
var unirArreglo1=["Monsalve","Milton","Lina"];

document.write(unirArreglo1.join(","));


/**
 * Ordenar arreglo ordenado alfabeticamente
 */
var unirArreglo1=["Monsalve","Milton","Lina"];

document.write(unirArreglo1.sort());


/**
 * Ordenar arreglo ordenado alfabeticamente
 */
var unirArreglo1=["Monsalve","Milton","Lina"];

document.write(unirArreglo1.sort());


/**
 * Ordenar arreglo reverse
 */
var unirArreglo1=["Monsalve","Milton","Lina"];

document.write(unirArreglo1.reverse());



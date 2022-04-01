'use strict'

function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count=1;
  return function(){
    return count++;
  }
}

function cacheFunction(cb) {
  // Usa *1 closures para crear un 2* caché para la 3* función cb.
  // la función que retornas debe aceptar un 4* solo argumento e 5* invocar a cb con ese argumento
  // cuando la función que hayas retornado es 6* invocada de nuevo, debería 7* guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!
  let cache={};
  return function(argumentosolo){
    if (cache.hasOwnProperty(argumentosolo)){
      return cache[argumentosolo]
    }
    cache[argumentosolo]=cb(argumentosolo) //acá la estoy invocando "de nuevo"
    //cb(argumentosolo) es una función q ya viene dada -no la hice yo- con lo cual no conozco su resultado, pero tampoco me
    //importa cuál sea, xq el invocar una función es igual a invocar su resultado, entonces invoco la función y se la asigno
    //a cache[argumentosolo]. Ahora cache[argumentosolo]=resultado de cb(argumentosolo)
    return cache[argumentosolo]
  }
}

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25
}

var alumno = {
  nombre: "Juan",
  curso: "FullStack"
}

function getNombre(){
  return this.nombre;
}
 // Escribir código, sin modificar lo que ya se encuentra escrito arriba, para poder llamar al método getNombre para obtener primero el nombre del instructor y luego para obtener el nombre del alumno.
// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que bindear el this!
let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);


/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena"
y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:

1. textoAsteriscos
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que recibe "crearCadena"
*/
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que usar bind para "bindear" algunos parámetros de la función crearCadena.

let textoAsteriscos = crearCadena.bind(this,'*','*');

let textoGuiones = crearCadena.bind(this,'-','-');

let textoUnderscore = crearCadena.bind(this,'_','_');



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};

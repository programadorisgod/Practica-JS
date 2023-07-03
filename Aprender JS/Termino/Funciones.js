//Declaracion de la funcion.

function miFuncion(a, b) {
  return a + b;
}

let resultado = miFuncion(2, 2);
console.log(resultado);

//FUNCIONES DE TIPO EXPRESION O ANONIMAS

let x = function (a, b) {
  return a + b;
};
resultado = x(1, 4);
console.log(resultado);

//anonima
(function (a, b) {
  console.log("hola " + (a + b));
  console.log(arguments.length);
})(3, 5);

//Funciones como objetos.
var miFunciontexto = miFuncion.toString();

console.log(miFunciontexto);

//Funciones Flecha!!!

// const Sumar = (a,b) => a+b;

// console.log(Sumar(2,5))

//argumentos.

let resultados = sumarTodo(5, 4, 3, 10, 13, 19);

function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    arguments[i];
    suma += arguments[i];
  }
  return suma;
}

console.log(resultados);

//Paso por valor, cuando no son objetos
//tipos primitivos.
let X = 10;

function cambiarValor(a) {
  a = 20;
}

cambiarValor(X);

console.log(X);

//paso por referencia.

const persona = {
    nombre: 'juan',
    apellido: 'Perez'
}


function cambiarValorObjeto(p1){
    p1.nombre = 'Jerson'; 
    p1.apellido = 'Tapias'
}
//Es paso por referencia
cambiarValorObjeto(persona);
 console.log(persona)
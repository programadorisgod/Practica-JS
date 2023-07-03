"use strict";

try {
  let x = 10;
  throw 'La variable no fue definida';
} catch (error) {
  console.log(error);
} finally {
  console.log("paso siempre xd ");
}

console.log("continuamos");


let resultado = 2;
try {
  if(isNaN(resultado)) throw 'No es un numero'
  else if(resultado === '') throw 'Es cadena vaica'
  else if(resultado >= 0) throw 'Valor positivo'
} catch (error) {
    console.log(error)
}
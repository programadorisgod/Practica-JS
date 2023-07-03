// Funciones Callback

function miFuncion1() {
  console.log("Funcion 1");
}

function miFuncion2() {
  console.log("Funcion 2");
}

miFuncion1();
miFuncion2();

//Funciones Callback

function imprimir(mensaje) {
  console.log(mensaje);
}

function sumer(op1, op2, mensaje) {
    let resultado = op1 + op2;
    mensaje(` el resultado es: ${resultado}`);
}
sumer(5,3, imprimir);


// Lllamdas asincronas con uso setTimeout
/*
function mimensaje() {
  console.log('Saludo asincrono despues de 4 segundos');
}


setTimeout(mimensaje, 4000);

setTimeout(function () { console.log('saludos xd') }, 5000);


setTimeout(() => console.log('KLK MAMAGUEVOOOOOOOOOOOOO'), 6000);



setInterval

let reloj = () => {

  let fecha = new Date();
  console.log(`${fecha.getHours()}: ${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj, 1000);  */

const data = [2,4,6,7,8]
const filteredData = data.filter(number => number === 2)
console.log(filteredDat) 
/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function palabrasAFrase(palabra) {
  // La función llamada  recibe como argumento un arreglo de 'string' y debe devolver un 'string'
  // armando la frase
  // Ej:
  // palabrasAFrase(['Dobby', 'loves', 'socks!]) debe retornar 'Dobby loves socks!'
  // sin espacios ni antes ni después es decir así no => " Dobby loves socks! "
  // Tu código aca:
  return palabra.join("");
}

console.log(palabrasAFrase([' Dobby ', 'loves', ' socks! ']))





/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function fakeBinary2(string) {
  // La funcion llamada 'fakeBinary' recibe como argumento un string con numeros
  // y debe devolver un string en donde se remplaza los numeros menores de 5 con '0'
  // y los numeros iguales o mayores a 5 con '1'
  // Por ej:
  // fakeBinary2('5627') devuelve "1101"
  // fakeBinary("729") devuelve "101"
  // Tu código aca:
  let st = string.split('');

  return st.map((n) => n > 5 ? 1 : 0).join();

}
console.log(fakeBinary2('5627'));
/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function doble(array) {
  // la funcion recibe un array de numeros enteros y debe devolver otro arreglo con el doble de cada valor
  // ej:
  //doble([1, 2, 3]) devuelve [2, 4, 6]
  // Tu código aca:

  return array.map(n => n * 2)
}
console.log(doble([1, 2, 3]))
/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function loboEstaONoEsta(array) {
  // La funcion recibe un array 'array' de strings y numeros  como parametro
  // la funcion debe retornar true o false dependiendo de si 'lobo' esta en el array o no
  // Por ej:
  // loboEstaONoEsta(['hola', 1, 3,  'palabra']) debe devolver false
  // ideas(['hola', 'buena', 'lobo', 4, 5, ]) debe devolver true
  // Tu código aca:
  return array.includes('lobo');
}
console.log(loboEstaONoEsta(['hola', 1, 3, 'palabra']))
console.log(loboEstaONoEsta(['hola', 'buena', 'lobo', 4, 5,]))
/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function cuantosMenores(invitados) {
  // La funcion llamada recibe como argumento un objeto 'invitados', en el objeto tenemos objetos que representan los invitados
  // a una fiesta en donde todos tienen una propiedad "edad" .
  // debe retornar la cantidad de invitados que son menores de 18.
  // Por ej:
  // let invitados = {
  //     Luna: {
  //         edad: 25
  //     },
  //     Sebas: {
  //         edad: 7
  //     },
  //     Marce: {
  //         edad: 34
  //     },
  //     Nicky: {
  //         edad: 15
  //     }
  // };
  // cuantosMenores(invitados) devuelve 2
  // Tu código aca:

  let claves = Object.values(invitados);
  let contador = 0;
  console.log(claves.filter(invitado => invitado.edad < 18 ? contador++ : ""))

  return contador;

}

let invitados = {
  Luna: {
    edad: 25
  },
  Sebas: {
    edad: 7
  },
  Marce: {
    edad: 34
  },
  Nicky: {
    edad: 15
  }
};
console.time()
console.log(cuantosMenores(invitados));
console.timeEnd()

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pedirComida(array) {
  // la funcion recibe un array de objetos en donde se detalla nombre y tipo de dieta de los integrantes de un meeting
  // debe retornar un objeto que diga cuantos menus de que tipo de dieta hay que pedir
  // (a fines practicos solo hay dieta "standard" y "vegan")
  // Por ej:
  // pedirComida([{nombre: "Harry", dieta: "standard"}, {nombre: "Luna", dieta: 'vegan'}, {nombre: "Goyle", dieta: "standard"}])
  // retorna {standard: 2, vegan: 1}
  // Tu código aca:
;
  let menus = { 
      standar: 0,
      vegan: 0
  };

  array.map(tipo => {
    tipo.dieta === "standard" ? menus.standar++ : menus.vegan++
  
  })
  return menus
}
console.time()
console.log(pedirComida([{ nombre: "Harry", dieta: "standard" }, { nombre: "Luna", dieta: 'vegan' }, { nombre: "Goyle", dieta: "standard" }]));
console.timeEnd()
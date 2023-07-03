//declarar arreglos.

const autos = ["BWM", "Mercedes", "Benz", "Volvo"];

console.log(autos);

console.log(autos[0]);
let bander = false;
for (let index = 0; index < autos.length; index++) {
  if (autos[index] === "Mercedes") {
   
    continue;
  }
  
  console.log("vehiculo " + autos[index]);
}

//Modificar elementos de un arrays

autos[1] = "Mazda";
console.log(autos);

autos.push("Toyota"); //Para agregar elementos al final del []
console.log(autos);



// Elementos de un array

console.log(autos.length);

autos[autos.length] = ' calidad ';
console.log(autos)

//Preguntar si es un arreglo.

console.log(Array.isArray(autos));
console.log(autos instanceof Array);
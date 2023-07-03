let x = 5;
let y = "10";
let z = x + y;  
console.log(z)

function concatenar(texto1, texto2) {
    return texto1 + " " + texto2;
  }
  
  function mayusculas(texto) {
    return texto.toUpperCase();
  }
  
  const arreglo = ["Hola", "mundo!"];
  const resultado = arreglo.reduce(concatenar).split(" ").map(mayusculas);  
  console.log(resultado)
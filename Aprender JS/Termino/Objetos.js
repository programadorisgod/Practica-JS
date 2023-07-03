//Los objetos contienen propiedades y metodos.

let persona = {
  nombre: "Jerson",
  Apellido: "Tapias",
  Cedula: "121212",
  Tel: "2332323",
  nombreCompleto: function () {
    //Agregar metodos en a objetos.
    return this.nombre + " " + this.Apellido;
  },
};

console.log(persona.nombre);
console.log(persona.Apellido);
console.log(persona.Cedula);
console.log(persona.Tel);

console.log(persona.nombreCompleto());

//recorrer objetos.
for (propiedad in persona) {
  console.log(propiedad);
}

//agregar propiedades

persona.edad= '18'

console.log(persona)


delete persona.Tel;

console.log(persona)


///imprimir objetos.

//Concatenar cada valor, de cada propiedad

console.log(persona.nombre + ', ' + persona.Apellido)

//For in 
for (propiedad in persona) {
  console.log(propiedad);
}

let personaA = Object.values(persona)
console.log(personaA)

let personaString = JSON.stringify(persona)
console.log(personaString)




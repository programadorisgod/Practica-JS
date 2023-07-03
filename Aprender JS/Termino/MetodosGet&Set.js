
let persona = {
  nombre: "Jerson",
  Apellido: "Tapias",
  Cedula: "121212",
  Tel: "2332323",
  idioma: "es",
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    //Agregar metodos en a objetos.
    return this.nombre + " " + this.Apellido;
  },
};

console.log(persona.nombreCompleto);

//Metodos set

console.log(persona.lang);

persona.lang = "en";

console.log(persona.lang);
console.log(persona.idioma);


//Metodo constructor


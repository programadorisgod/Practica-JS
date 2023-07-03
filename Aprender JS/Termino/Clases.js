class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
}

let persona1 = new Persona("Jerson", "Tapias");

console.log(persona1.nombre);

persona1.nombre = "Camilo"

console.log(persona1.nombre);


//Hoistin, no se aplica con clases.

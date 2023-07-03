class Personas {
  static contadorObjetosPersona = 0;
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    this.idPersona = Personas.contadorObjetosPersona++;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
  //sobreescribir
  toString() {
    //polimorfirmo
    return this.nombreCompleto();
  }
  //Se enalaza con la clase, pero no con el objeto.
  static saludar() {
    console.log("Hola soy estatico");
  }
}

class Empleado extends Personas {
  constructor(nombre, apellido, departamento) {
    //Heredar metodos
    super(nombre, apellido);
    this._departemento = departamento;
  }
  get departamento() {
    return this._departemento;
  }
  set departamento(departamento_) {
    this._departemento = departamento_;
  }

  //Sobreescritura.

  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departemento+ 'id: ' + this.idPersona;
  }
}

let empleado1 = new Empleado("Juan", "Carlos", "Cesar");
let empleado2 = new Empleado("Kike", "Car", "sistemas");

console.log(empleado1);

console.log(empleado1.nombreCompleto());
console.log(empleado2)

Personas.saludar();

console.log(Personas.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona);

class Persona {
  static contadorPersonas = 0;
  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._idPersona = Persona.contadorPersonas++;
  }

  getIdPersona() {
    return this._idPersona;
  }

  getNombre() {
    return this._nombre;
  }

  setNombre(nombre) {
    this._nombre = nombre;
  }

  getApellido() {
    return this._apellido;
  }

  setApellido(apellido) {
    this._apellido = apellido;
  }

  getEdad() {
    return this._edad;
  }

  setEdad(edad) {
    this._edad = edad;
  }

  informacionCompleta() {
    return (
      "ID persona: " +
      this._idPersona +
      " Nombre: " +
      this._nombre +
      "Apellido: " +
      this._apellido +
      "Edad: " +
      this.edad
    );
  }

  toString() {
    return this.informacionCompleta();
  }
}

class Empleado extends Persona {
  static contadorEmpleados = 0;
  constructor(nombre, apellido, edad, sueldo) {
    super(nombre,apellido,edad);
    this._sueldo = sueldo;
    this._idEmpleado = Empleado.contadorEmpleados;
  }

  getIdEmpleado() {
    return this._idEmpleado;
  }

  getSueldo() {
    return this._sueldo;
  }

  setSueldo(sueldo) {
    this._sueldo = sueldo;
  }

  toString() {
    return this.informacionCompleta() + " ID empledo: " + this._idEmpleado + 'Sueldo:  ' + this._sueldo;
  }
}

class Cliente extends Persona {
  static contadorCliente = 0;

  constructor(nombre, apellido, edad) {
    super(nombre,apellido,edad);
    this._idCliente = Cliente.contadorCliente;
    this._fechaRegistro = new Date();
  }

  getIdCliente() {
    return this._idCliente;
  }
  getFechaRegistro() {
    return this._fechaRegistro;
  }
  setFechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }
}

let persona1 = new Persona("Jerson ", "Tapias ", "19");
console.log(persona1);

let Empelado1 = new Empleado ("Juan ", "Riquelme", "22", 5000000);

console.log(Empelado1);

let Cliente1 = new Cliente("Juan", "Riquelme", "22");

console.log(Cliente1);
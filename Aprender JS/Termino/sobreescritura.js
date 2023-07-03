class Empleado {
  constructor(nombre, sueldo) {
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

  obtenerDetalles() {
    return `Empleado ${this._nombre}, sueldo: ${this._sueldo}`;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }

  obtenerDetalles() {
    return `Gerente: ${super.obtenerDetalles()}, Departemento: ${
      this.departamento
    }`;
  }
}

function imprirmir(tipo) {
  console.log(tipo.obtenerDetalles());
   tipo instanceof Gerente ?  console.log("Intancia de Gerente")  : 
   tipo instanceof Empleado  ?  console.log("Empelado")  : console.log("-");
 }

let Empleado1 = new Empleado("Carmen", 6000);
let Gerente1 = new Gerente("Carlos", 5000, "Sistemas");

imprirmir(Gerente1);

imprirmir(Empleado1);



   
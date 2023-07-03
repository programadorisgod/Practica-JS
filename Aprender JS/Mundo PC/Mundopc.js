class dispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  getTipoEntrada() {
    return this._tipoEntrada;
  }

  setTipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  getMarca() {
    return this._marca;
  }

  setMarcar(marca) {
    this._marca = marca;
  }
}

//CLASE RATON

class Raton extends dispositivoEntrada {
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  getIdRaton() {
    return this._idRaton;
  }
  toString() {
    return ` -id raton: ${this._idRaton} \n -Tipo Entrada: ${this._tipoEntrada} \n -Marca: ${this._marca}  `;
  }
}

//Clase TECLADO
class Teclado extends dispositivoEntrada {
  static contadorTeclados = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  getIdTeclado() {
    return this._idTeclado;
  }

  toString() {
    return ` -id Teclado: ${this._idTeclado} \n -Tipo Entrada: ${this._tipoEntrada} \n -Marca: ${this._marca}  `;
  }
}

//Clase Monitor

class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
  }

  getMarca() {
    return this._marca;
  }
  setMarcar(marca) {
    this._marca = marca;
  }

  getTamaño() {
    return this._tamaño;
  }
  setTamaño(tamaño) {
    this._tamaño = tamaño;
  }

  toString() {
    return `-Id Monitor: ${this._idMonitor} \n Marca Monitor: ${this._marca} \n Tamaño (Pulgadas): ${this._tamaño} \n`;
  }
}

//Computadora class

class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, raton, teclado) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }

  getIdComputadora() {
    return this_idComputadora;
  }

  getNombre() {
    return this._nombre;
  }

  setNombre(nombre) {
    this._nombre = nombre;
  }

  Teclado(teclado) {
    this._teclado = teclado;
  }

  Mouse(mouse) {
    this._raton = mouse;
  }

  Monitor(monitor) {
    this._monitor = monitor;
  }

  toString() {
    return `Computadora: ${this._nombre} \n\n Teclado:\n${this._teclado}\n \nMouse:\n${this._raton}\n\nMonitor: ${this._monitor} `;
  }
}





//ORDEN

class Orden {
  static contarodrOrdenes = 0;

  constructor() {
    this.idOrden = ++Orden.contarodrOrdenes;
    this._computadoras = [];
  }

  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }

  mostrarOrden() {
    let mostrarOrden = "";
    for (let computadora of this._computadoras) {
      mostrarOrden += computadora.toString() + "\n\n";
    }
    console.log(`Orden: ${this.idOrden} \n Computadoras: \n ${mostrarOrden} `);
  }

  toString() {
    return `Id orden: ${this_idComputadora} \n   
            ${this._computadoras}   `;
  }
}



let teclado1 = new Teclado("blutu", "msi");
let teclado2 = new Teclado("USB", "acer");
console.log(teclado1.toString())

let monitor1 = new Monitor("HP", 15);
let monitor2 = new Monitor("Palix", 50);

let raton1 = new Raton("usb", "logitech");
let raton2 = new Raton("blut", "viva");

let computadora1 = new Computadora("HP", monitor1, raton1, teclado1);
console.log(computadora1.toString())

let orden = new Orden();
orden.agregarComputadora(computadora1)
orden.mostrarOrden()
class Producto {
  static contadorProducto = 0;

  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
    this._idProducto = ++Producto.contadorProducto;
  }

  getIdProducto() {
    return this._idProducto;
  }

  getNombre() {
    return this._nombre;
  }

  setNombre(nombre) {
    this._nombre = nombre;
  }

  getPrecio() {
    return this._precio;
  }

  setPrecio(precio) {
    this._precio = precio;
  }

  toString() {
    return ` Id Producto: ${this._idProducto} \n Nombre Producto: ${this._nombre}  \n Precio Producto: $${this._precio}`;
  }
}

class Orden {
  static Ordenes = 0;
  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.Ordenes;
    this._productos = [];
    this._contadorProductosAgregados = 0;
  }

  getIdOrden() {
    return this._idOrden;
  }

  agregarProductos(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
      this._contadorProductosAgregados++;
    } else {
      console.log("Lo sentimos, el maximo de prodcutos, fue excedido.");
    }
  }

  calcularTOtal() {
    let totalVenta = 0;
    for (let producto of this._productos) {
       totalVenta += producto._precio;
    }
    return totalVenta;
  }

  mostrarOrden() {
    let prodcutoOrden = "";

    for (let producto of this._productos) {
      prodcutoOrden += '\n {' + producto.toString() + '}';
    }
    console.log( `Orden: ${this._idOrden} Total: ${this.calcularTOtal()}, Productos: ${prodcutoOrden}`);
  }
}

let Producto1 = new Producto("Pantalon", 200);
let Producto2 = new Producto("Camisa", 400);

let Orden1 = new Orden();

Orden1.agregarProductos(Producto1);
Orden1.agregarProductos(Producto2);

Orden1.mostrarOrden();

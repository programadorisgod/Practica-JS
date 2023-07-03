class Egreso extends Dato {
  static contadorEgreso = 0;

  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._idEgreso = ++Egreso.contadorEgreso;
  }

  getId() {
    return this._idEgreso;
  }
}

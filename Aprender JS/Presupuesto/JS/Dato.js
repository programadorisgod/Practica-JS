class Dato {
  constructor(descripcion, valor) {
    this._descripcion = descripcion;
    this._valor = valor;
  }

  getDescripcion() {
    return this._descripcion;
  }

  setDescripcion(descripcion) {
    this._descripcion = descripcion;
  }

  getValor() {
    return this._valor;
  }

  setValor(valor) {
    this._valor = valor;
  }
}

class Celular {
  constructor(color, peso, rdp, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.resolucionDePantalla = rdp;
    this.resolucionDeCamara = rdc;
    this.ram = ram;
    this.encendido = false;
  }

  prender() {
    if (!this.encendido) {
      alert("Encendiendo");
      this.encendido = true;
    } else {
      alert("el celular apagado");
    }
  }

  apagar() {
    if (this.encendido) {
      alert("reiniciando celular");
    } else {
      alert("celular ya está pagado");
      this.encendido = false;
    }
  }

  tomarFotos() {
    alert(`Foto tomada con una resolucion de: ${this.resolucionDeCamara}`);
  }

  grabarVideo() {
    alert(`Video grabado con una resolcion de: ${this.resolucionDeCamara} `);
  }

  mostrarinformacion() {
    return `
     color: <b> ${this.color} </b><br>  
     peso: <b> ${this.peso} </b>  <br>
     Tamanio: <b> ${this.resolucionDePantallas} </b> <br>
     Resolucion de la camara: <b> ${this.resolucionDeCamara} </b><br>
     Resolucion de video: <b> ${this.resolucionDeCamara}</b> <br>
     Memoria Ram: <b> ${this.ram}</b> <br>
    `;
  }
 
}


let celular1 = new Celular("azul", "150gr", "5.5", "full hd", "2gb");

document.write(`${celular1.mostrarinformacion()}`);
celular1.tomarFotos();




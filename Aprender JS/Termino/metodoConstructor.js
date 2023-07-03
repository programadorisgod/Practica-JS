//Funcion constructor de objetos de tipo persona
function Persona(nombre, Apellido, Cedula, Tel, idioma) {
  this.nombre = nombre;
  this.Apellido = Apellido;
  this.Cedula = Cedula;
  this.Tel = Tel;
  this.idioma = idioma;
}

let padre = new Persona("Juan", "Perez", "232323", "23232", "Es");
console.log(padre);


//Uso de CALL

let persona1= {
    nombre: 'juan',
    Apellido: 'perez',
    nombreCompleto: function(titulo , tel){
       return titulo + ': ' + this.nombre + ' '+ this.Apellido+ ' '+ tel ;
    }
}

let persona2= {
    nombre: 'andre',
    Apellido: 'pertuz',
   
}


console.log(persona1.nombreCompleto());


console.log(persona1.nombreCompleto.call(persona2, 'ingeniero', '2223223'));
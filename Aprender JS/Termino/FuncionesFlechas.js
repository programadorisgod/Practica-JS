//  const miFuncionFlecha = () => {
//     console.log("Saludos desde mi funcion flecha");
//  }

// const miFuncionFlecha = () => console.log("Hola! xddd")
//  miFuncionFlecha();


const saludar = () => 'Hola xd'


console.log(saludar());

//Enviar Objetos.
const regresarObjeto = () => ({Nombre:'Jerson'});

console.log(regresarObjeto());


const FuncionConParametro = (Mensaje) => console.log(Mensaje);

FuncionConParametro("Hola vecinaaaaaaaaaa");


const FuncionCon1SoloParametro = mensaje => console.log(mensaje);

FuncionCon1SoloParametro("Hola mamaguevo");

const FuncionVariosParametro = (op1, op2) => op1 + op2;


console.log(FuncionVariosParametro(2,5));
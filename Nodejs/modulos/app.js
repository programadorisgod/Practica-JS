const os = require('os');

console.log('Hello World')
console.warn('Ocurred a  error ...');
console.error(new Error('Ocurred a error ...'));

//Module process
console.log(process.argv); // Se transforma en un array  [node, app.js, 2, 3,] 
console.log(process.argv[2]); // 2

console.log(process.memoryUsage()); // Informacion de la memoria

//Module os nos da la informacion del SO en donde se esta ejecutnado node

console.log(os.userInfo()); 


//Module timers Contiene funciones que ejecutan el codigo luego de un cierto tiempo
setTimeout(() => {
    console.log('me ejecto despues de 2 segundos');
},2000);

setInterval(() => {
    console.log('Me ejecuto cada 1 segundo');
},1000);
setImmediate(() => { 
    console.log('Hello World me ejecuto de inmediato');
},1000);




/*Module file system*/
//Trabajar con archivos. (leer,modificar,eliminar,copiar,cambiar nombre,etc)
/*todos los metodos son asincronos por defectos 
Para hacerlos Sync colocamos la palabra Sync a su nombre*/

const fs = require('fs');
fs.readFile('index.html','utf-8' ,(err, content) => {
 if(err){
    throw err; // cancelar la ejecucion del progrmaa y que me de detalles del error 
 }else{
     console.log(content);
 }
}); //Leer archivo



fs.renameSync('index.html','indexs.html', (err) => {
    if(err){  //si existe el eror lo mando 
        throw err;
    }else{
        console.log('Archivo renombrado'); // si no existe el error mando el mensaje
    }
})

//apendFile() agrega contenido al final del archivo
fs.appendFileSync('indexs.html','<h1> Hello World </h1>', (err) => {
    if(err){
        throw err;
    }else{
        console.log('Contenido agregado');
    }
}   );


//Reemplazar todo el contenido del archivo 
  //                  ruta,          contenido,               callback
fs.writeFileSync('indexs.html', '<h1> hola bb  uwu </h1>', (err) => {
  if(err){
    throw err;
  }else{
    console.log('Contenido reemplazado con exito');
  }
});

          //  archivo     callback
fs.unlinkSync('main.html', (err) => {
    if(err){
        throw err;
    }else {
        console.log('Documento eliminado con exito')
    }
})
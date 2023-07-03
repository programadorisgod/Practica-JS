//Requerimos el modulo http que nos permitira, estar a la escucha de las peticiones del cliente.

const http = require('http'); 
const PUERTO = 3000;

//Creamos el servidor
const server = http.createServer((req,res) => {
     //el metodo end, nos permite finalizar todo lo que necistamos y mandar la respuesta
     res.end('Hello word');
});
   





//Le decimos al servidor, donde va a esuchar y que hacer
server.listen (PUERTO, ()=> {
    console.log(` The server is listening on  http://localhost:${PUERTO}...` );
    
});
const http = require('http');

const cursos = require('./curso');

const PORT = 3000;

const servidor = http.createServer((req, res) => {
    //Extraemos el metodo, para saber cual es
    const { method } = req;

    //Dependiendo del metodo, lo vamos a manejar
    switch (method) {
        case 'GET':
            //luego de saber que vamos a hacer
            return manejarSolicitudGET(req, res);

        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501;
            res.end(`El metodo no puede ser manejado por el servidor: ${method}`);

    }

});


//debemos saber a donde va
function manejarSolicitudGET(req, res) {

    const path = req.url;


    //si es la web principal
    if (path === '/') {
        res.writeHead(200, { 'content-Type': 'aplication/json' });
        //devolvemos que todo OK
        res.statusCode = 200;
        //Terminamos los procesos y mandamos una respuesta
        return res.end('Welcome to my first server and API created with Node.js')


    }
    //si el user pide cursos, le mostramos los cursos
    if (path === '/cursos') {
        res.statusCode = 200;
        //Lo convertimos a cadena de caracteres SERIALIZACION
        return res.end(JSON.stringify(cursos.curse));

    }

    // si el usuario pide cursos de programacion
    if (path === '/cursos/programacion') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.curse.programacion))

    }
    //si el usuario pide un curso de matematica
    if (path === '/cursos/matematicas') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.curse.matematicas))
    }
    //de lo contrario 
    res.statusCode = 404;
    return res.end('En el momento, no tenemos ese recurso...')



}


function manejarSolicitudPOST(req, res) {
    const path = req.url;

    if (path === '/cursos/programacion') {

        let body = '';
        req.on('data', content => {
            body += content.toString();
        })

        req.on('end', () => {

            console.log(body);
            console.log(typeof body);

            //Convertir a un objeto de JS
            body = JSON.parse(body);
            console.log(typeof body);
            console.log(body.title);


            res.end('El servidor recibio una solicitud POST para la ruta /cursos/programacion');

        });

    }
    
    //de lo contrario 
    // res.statusCode = 404;
    //return res.end('En el momento, no tenemos ese recurso...')


}








servidor.listen(PORT, () => {
    console.log(`Server is listening on the port:${PORT}...`);

})
const http = require('http');
const PUERTO = 3000;

const servidor = http.createServer((req, res) => {
    
    res.setHeader('content-type', 'application/json')
    console.log(res.getHeaders());
    res.end('Helo world');


});


servidor.listen(PUERTO, () => {

    console.log(`server is listening on the port ${PUERTO}...`);

})
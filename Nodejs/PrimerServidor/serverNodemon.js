const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {
       res.end('Hello Node, server restarting whit Nodemon');
});


server.listen(PORT, () => {
    console.log(`Server is listening on the port ${PORT} and restarting whit nodemon`);
    
})


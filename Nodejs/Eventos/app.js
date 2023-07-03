const EventEmitters = require('events');

const emisorProducts = new EventEmitters(); 

//Con el metodo on asociamos el evento.
//Esta a la espera del evento
emisorProducts.on('compra', (total,numbersProducts) => {
 console.log( ` A purchase was made for ${total} dolars. And acquiried ${numbersProducts} products`);
});


//Emitimos el el evento que queremos
emisorProducts.emit('compra',60,77);
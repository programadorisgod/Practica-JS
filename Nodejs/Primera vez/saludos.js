function saludar(nombre) {
    return `Hola ${nombre} `;
}


function saludarHolaMundo() {
    return 'Hola Mundo';
}

/*module.exports.saludar = saludar;
module.exports.saludos;*/

module.exports = {
    saludar,
    saludarHolaMundo
}
const cambiar = () => nombre.style.background= 'yellow';
document.getElementById('nombre').onfocus= cambiar;
const volver = () => nombre.style.background = 'white';
document.getElementById('nombre').onblur= volver;
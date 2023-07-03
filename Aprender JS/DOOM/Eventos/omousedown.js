
const rojo = () =>  document.getElementById('title').style.color = 'red' ;
const azul = () =>  document.getElementById('title').style.color = 'blue' ;
const verde = () =>  document.getElementById('title').style.color = 'green' ;

document.getElementById('title').onmousedown = rojo;
document.getElementById('title').onmouseup = azul;

document.getElementById('title').onclick = verde;
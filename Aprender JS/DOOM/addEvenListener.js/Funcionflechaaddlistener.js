
const nombre = document.getElementById('nombre');

nombre.addEventListener('focus', (evento) =>{
  evento.target.style.background= 'pink';
});

nombre.addEventListener('blur', (evento) =>{
 evento.target.style.background =" white";
});
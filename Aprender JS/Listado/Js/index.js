const forma = document.forms['forma'];
const nombre = forma['nombre'];
const apellido = forma['apellido'];
const edad = forma['Edad'];
const Agregar = document.getElementById('agregar');
const li = document.getElementsByTagName('li');
const Personas = [
  new Persona("Juan", "Perez", "28"),
  new Persona("Carlos", "Garcia", "12"),
  new Persona("lucas", "Garcia", "16")
];

const mostrarPersonas = () => {
  let texto = "";
  for (const persona of Personas) {
    texto += `<li>${persona._nombre} ${persona._apellido}    edad: ${persona._edad}</li>`;
  }
  document.getElementById('personas').innerHTML= texto;
};

Agregar.addEventListener('click', () => {
    if (nombre.value != '' && apellido.value != '' && edad != edad.value) {
        const persona = new Persona(nombre.value, apellido.value, edad.value);
        Personas.push(persona);
        mostrarPersonas();
    } else{
        alert('Por favor, llena los campos');
    }
  
})









document.getElementById("body").onload = mostrarPersonas;

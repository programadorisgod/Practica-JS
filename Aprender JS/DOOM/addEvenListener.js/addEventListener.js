const cambiar = (focus) => {
  let componente = focus.target;
  componente.style.background = "yellow";
};

const volver = (blur) => {
    let componente = blur.target;
    componente.style.background = 'white';
}

const Nombre = document
  .getElementById("nombre")
  .addEventListener("focus", cambiar);

const Volver = document
.getElementById("nombre")
.addEventListener("blur", volver);

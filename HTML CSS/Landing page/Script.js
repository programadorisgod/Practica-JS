const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    alert("holas");
    nav.classList.toggle("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});
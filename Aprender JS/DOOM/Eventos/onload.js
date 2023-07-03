const Entrar = () => {
  alert("Bienvenido, estas entrando uwu ");
  let texto = "";
  navigator.cookieEnabled
    ? (texto = "Cookies hablitadas, no te tocaba xds ")
    : (texto = "Cookies desactivadas, gracias a Duk god");
  document.getElementById("mostrar").innerHTML = texto;
};
document.getElementById("body").onload = Entrar;

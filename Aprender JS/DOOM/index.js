function MostrarValores() {
  let formulario = document.querySelector("#formulario");
  let texto = "";
  for (const iterator of formulario) {
    texto += iterator.value + "<br>";
  }
  document.getElementById("valores").innerHTML = texto;
  document.getElementById("imagen").src =
    "https://img-corp.com/images/logo@2x.png";
  console.log(texto);
}

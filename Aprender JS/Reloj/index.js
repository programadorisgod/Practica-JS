const body = document.getElementById("body");

const relojDigital = () => {
  let tiempo = new Date();

  let Hora = formato(tiempo.getHours());
  let Minutos = formato(tiempo.getMinutes());
  let Segundos = formato(tiempo.getSeconds());

  document.getElementById(
    "hora"
  ).innerHTML = `${Hora} : ${Minutos} : ${Segundos}`;


  const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  const meses = [
    "Ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "agos",
    "sep",
    "oct",
    "nov",
    "dic",
  ];

  let diaSemana = dias[tiempo.getDay()-1];
  let dia = tiempo.getDay();
  let mes = meses[tiempo.getMonth()];
  let fecha = `${diaSemana}, ${dia} ${mes}`;

  document.getElementById("fecha").innerHTML = fecha;
};

const formato = (hora) => {
  if (hora < 10) hora = "0" + hora;
  return hora;
};

body.addEventListener("onload", () => {
  relojDigital();
});

setInterval(relojDigital, 1000);

const informacion = (materia) => {
  let materias = {
    fisica: ["Rodrigez", "Juan", "roberto, persi"],
    matematicas: ["Jerson", "Juan", "roberto", "persi", "ruben"],
    quimica: ["Santiago", "Juan", "roberto, persi"],
    web: ["Pensi", "Juan", "roberto"],
  };
  if (materias[materia] !== undefined) {
    return [materias[materia], materia];
  } else {
    return false;
  }
};

let obtener = informacion("fisica");

if (obtener) {
  let profesor = informacion("fisica")[0][0];
  let alumnos = informacion("fisica")[0];
  alumnos.shift();
  document.write(`El profesor asigando para ${obtener[1]}  es: 
   ${profesor}
   Los alumnos son: ${alumnos}`);
}


let cantidadAlumnos = prompt("¿Cuantos alumnos son");

let Alumnos = [];

for(i = 0; i < cantidadAlumnos; i++){
     Alumnos[i] = [prompt("nombre del alumno " + (i+1 )),0];
}

const Asitencia = (nombre,posicion) => {
    let asitencia = prompt(nombre);
    if(asitencia == "s"|| asitencia == "S"){
         Alumnos[posicion][1]++;
    }
}


for(i = 0; i< 30; i++){
    for(let alumno in Alumnos){
        Asitencia(Alumnos[alumno][0], alumno)
    }
}


for(let alumno in Alumnos){
    let resultado = `${Alumnos[alumno][0]}:<br>

     ----------------ASISTENCIA:${Alumnos[alumno][1]}:<br>
     ----------------FALTAS: ${30 - parseInt(Alumnos[alumno][1])} :<br>
     `

     if(30 - Alumnos[alumno][1] > 18){
       resultado += "Reprobado, por faltas";
     }else{
        resultado=+ "<br><br>"
     }
     document.write(resultado);
}

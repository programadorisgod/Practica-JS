
const forma = document.getElementById('forma');
const op1 = forma['operandoA'];
const op2 = forma['operandoB'];
const sumar = document.getElementById('sumar');


const Sumar = () => {
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    isNaN(resultado) ? resultado = "No son numeros" : resultado;
    document.getElementById('resultado').innerHTML= `El resultado es: ${resultado}`;
}

sumar.addEventListener('click', () => {
    Sumar();
});



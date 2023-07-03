const PromiseComplete = false;

//Creo la promesa, en donde le paso los dos argumentos. resolve o reject
const myPromise = new Promise((resolve, reject) => {
    //Se ejecutara en un intervalo de 3 segundos
    //Si es verdadera ejecuta la funcion resolve, sino la rechaza.
    setTimeout(() => {
        if (PromiseComplete) {
            resolve("Promise completed");
        } else {
            reject("Promise rejected...");
        }
    }, 3000);
});
 
//Capturamos el valor que nos devuelve la variable.
myPromise
    .then((valor) => {
        console.log(valor);
    })
    .catch((err) => {
        console.log(err);
    });

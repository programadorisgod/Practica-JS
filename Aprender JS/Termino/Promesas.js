/*const miPromesa = new Promise((resolved, rejected) => {
    let status = 200;
    status === 200
        ? resolved("Resolved correct")
        : rejected("Se produjo un error");
}); 

miPromesa.then(
    (valor) => console.log(valor),
    (error) => console.log('el error es:', error)
);

miPromesa
    .then((valor) => console.log(valor))
    .catch((error) => console.log(error));



let promesa = new Promise((resolved) => {
    setTimeout(() => resolved('Saludos con promesa y timeout'), 4000);
});


promesa.then(resolved => console.log(resolved));

*/

// async indica que una funcion regresa una promesa
/*
async function miFuncionConPromesa() {
    return 'Saludos con promesa y Async';
}
b

 miFuncionConPromesa().then(valor=> console.log(valor));


//Await y Async

async function FuncionConPromesaYAwait() {
    let miPromesa = new Promise(resolved => {
        resolved('Promesa con await');
    });

    console.log(await miPromesa);
}

FuncionConPromesaYAwait();

Promesas, await, async y setTimeout

async function FuncionConPromesaYAwaitTimeout() {
    console.log('Inicio de la funcion');
    let Promesaaa = new Promise(resolved => {
        setTimeout(() => resolved('Hola uwu'), 4000);
    });

    console.log(await Promesaaa);
    console.log('Fin de la funcion');
}
FuncionConPromesaYAwaitTimeout();





let promise = new Promise((resolved, rejected) => {
    let status = 200
    status === 200
        ? resolved('Tuve exito, ya que mi codigo de estado es 200')
        : rejected('Not found 404')
})


promise.then(resolved => console.log(resolved))
    .catch(err => console.log(err))



async function World(){
    let promise = new Promise((resolved,rejected) => {
        console.log('Hola ubuntu');
    })

    let data = await promise
    console.log(data);
    
    
}
World()*/

/*
const coffeDrinked = false
const myPromise = new Promise((resolved, rejected) => {
    if (coffeDrinked) {
        resolved(true)
    } else {
        rejected("Todavia no has tomado cafe")
    }
})

const awake = new Promise((resolved, rejected) => {
    coffeDrinked ? resolved("Estoy despierto") : rejected("estoy dormido")
})

//myPromise.then().then((data) => { console.log(data) })
//  .catch(err => console.error(err))
//.finally(() => console.log('Siempre ejecuto :v'))

Promise.all([myPromise, awake]).then(data => console.log(data)).catch(err => console.log(err))
Promise.allSettled([myPromise, awake]).then(data=> console.log(data)).catch(err => console.log(err)
)
*/


/* FETCH LO QUE RETORNA ES UNA PROMESA DE UNA RESPUESTA
const todo1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
const todo2 = fetch('https://jsonplaceholder.typicode.com/todos/2')

Promise.all([todo1, todo2])
.then(data => {return Promise.all(data.map(response => response.json()))})
.then(jsonrResponse => console.log(jsonrResponse))
.catch() */

//ASYNC AWAIT
const myCall = async () => {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/todosds/1')
       
        if (!response.ok) {
            throw new Error("Error al realizar el fetch")
        }

        if (response.status === 200) {
            const data = await response.json()
            console.log(data);
        }

        if (response.status === 401) {
            console.log('API key bad');

        }
        if (response.status === 404) {
            console.log('data not found');

        }
    } catch (error) {
        console.error(error);

    }



}

myCall()
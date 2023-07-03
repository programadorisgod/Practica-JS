//Metodo at = devuelve el valor del indice que le pasemos
const numbers  = [100,450,454,4233,2323];
let index = 2
console.log(numbers.at(index));

//Metodo Concat
//Concatena vectores

const inicio = ['a','b','c','d'];
const final = ['e','f','g','h'];

console.log(inicio.concat(final))


//copyWithin()
//transfiere una copia plana de una sección a otra dentro del mismo array 
//copia el elemento 3 en el elemento 0;
console.log(inicio.copyWithin(0,3,4)); 


//Metodo entries;
//El método entries() retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.const 
let  arr = ['a', 'b', 'c']

const iterator1 = arr.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
console.log(iterator1.next().value);


//.every() 
//Determina si todos los elementos en el array satisfacen una condición.

const array = [1, 30, 39, 29, 10, 13];
console.log(array.every((valoractual) => valoractual <40))

//fill()
/*El método fill() cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.*/
/*No inclute el end*/
/*va a cambiar por 4 los elementos desde la posicion 2 hasta la 4 sin incluir el 4*/
console.log(array.fill(4,2,4));

let students = [
    {
        name : 'ricardo',
        age: 25
    },
    {
        name : 'pedro ',
        age: 35
    },
    {
        name : 'juanes',
        age: 23
    }
]
let contador = 0
let result = students.filter((student) => student.age > 24  ? contador++ : '')


/*.find()
El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.*/

let fin =students.find(student => student.age === 23)
console.log(fin.name)


/*.findIndex()
El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.*/

const array2 = [5, 12, 8, 130, 44];

console.log( array2.findIndex(elemet => elemet > 13))

/*findLast()
los findLast() El método itera la matriz en orden inverso y devuelve el valor del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, undefined es devuelto.*/
console.log( array2.findLast(elemet => elemet > 13))
console.log( array2.findLastIndex(elemet => elemet > 13))



/*forEach*/
let r =0;
console.log(array2.forEach((elemet) => {
   r = elemet/2
    console.log(r)
}))

/*index of*  método devuelve el primer índice en el que un El elemento dado se puede encontrar en la matriz, o -1 si no está presente.*/
let valor = 5;
console.log(array2.indexOf(valor))

/*.join ( )
los join() método crea y devuelve una nueva cadena concatenando todos los elementos en una matriz ( o un objeto tipo matriz), separado por comas o una cadena separadora especificada. Si la matriz tiene solo un elemento, luego ese elemento se devolverá sin usar el separador.*/

const frase = ['hola','que hace','mera wo']

console.log(frase.join(" "))


/*.keys*/
const array1x = ['x', 'd', '2'];
const iteratorx = array1x.keys();

for (const key of iteratorx) {
  console.log(key);
}


/*lastIndexOf ( )
los lastIndexOf() el método devuelve el último índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente. La matriz es buscado hacia atrás, comenzando en fromIndex.*/

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));

let vectorR = students.map(student => student.age > 30 ?  'mayor' : 'menor')
console.log(vectorR)


/*Pop elimina el ultimo*/

console.log(animals.pop()) 

/*Agrega  elementos al final del vector*/
animals.push('tiger')
console.log(animals)

/*reduce*/
let redux = [0,1,2,3,4];
let rx = redux.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual
})
console.log(rx)


/*Reversa*/ 
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);

/*shitf elimina el primer elemento*/ 
console.log(animals)
animals.shift();
console.log(animals)
/* unshift agrega al incio */
animals.unshift('panther')
console.log(animals)


/*slice  le pasas de donde iniciara hasta donde finaliza pero no incluye el finalizar*/

let resula =animals.slice(1,4)
 console.log(resula)


 /*some ruebas de método si al menos un elemento en la matriz pasa la prueba implementada por el proporcionado función. Devuelve verdadero si, en la matriz, encuentra un elemento para el cual la función proporcionada devuelve verdadero; de lo contrario, devuelve falso. No modifica la matriz.*/


 const arrayS = [1, 2, 3, 4, 5];

// comprueba si alguno es par
const even = (element) => element % 2 === 0;
console.log(array.some(even));


/* el metodo sort ordena  a-b a>b a<b*/

console.log(students.sort((a,b) => a.age - b.age ? 1:-1)) 
const months = ['March', 'Jan', 'Feb', 'Dec'];
console.log(months.sort((a,b) => a<b)); 

/*Splice elimina o reemplaza elementos existentes o agrega elementos en su lugar*/
months.splice(0,1)
console.log(months)
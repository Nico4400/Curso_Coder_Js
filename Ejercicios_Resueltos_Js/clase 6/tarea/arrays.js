// Ejercicios arrays
// estos ejercicios deben resolverse con funciones
// las funciones deben contener el bucle que se ocupe de resolver casos genéricos. Ej:

const letras = ["a", "b", "c", "d"]

const cosas = [ "vaso", "papel", "lapicera"]

const recorrerArray = ( lista ) => {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}

recorrerArray(letras)
recorrerArray(cosas)

// también pueden hacerlo con función por declaración

function recorrerListas ( lista ) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}

recorrerListas(letras)
recorrerListas(cosas)

// obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva(retorne) el menor de ellos. Ejemplo:
// obtenerNumeroMenor(numeros)
let numeros = [ 20, 3095, 43, 6545, 12, 54, 78, 8, 200, 50, 150, 90 ]


let obtenerNumeroMenor = numeros[0];

function obtenerMenor (lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
        if(numeros[i] < obtenerNumeroMenor){
            obtenerNumeroMenor = numeros[i] 
        }
    }
}

obtenerMenor(numeros)
console.log(obtenerNumeroMenor)
// otra forma
function otraForma (lista) {
    console.log(Math.min(...lista))
}
otraForma(numeros)


// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva(retorne) la suma de ellos. Ejemplo:
// sumarNumeros([5, 7, 10, 12, 24]) ---> retorna 58

let listaNumeros = [5, 7, 10, 12, 24];

let sumarNumeros = 0;

function sumar (lista) {
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i])
        sumarNumeros += lista[i];
    }
}

sumar(listaNumeros)
console.log(sumarNumeros)
// otra forma
console.log(listaNumeros.reduce((a , b) => a + b , 0))

// contiene(numero, numeros)
// Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
// contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false

let contenedor = (54, [5, 7, 99, 3, 4, 54, 2, 12]);

function contiene (numero, lista) {
    return lista.includes(numero);    
    // for(let i = 0; i < lista.length; i++){
    //     console.log(lista[i])
    //     if(numero === lista[i]){
    //         console.log(true);
    //     }else{
    //         console.log(false);
    //     }
    // }
}

// contiene(contenedor)
console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]))
console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]))

// invertirCaso(string)
// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
// invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
// invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'

function invertirCaso (string) {
    let cadena = ""
    for(let i = 0; i < string.length; i++){
        // console.log(string[i])
        if(string[i] === string[i].toUpperCase()){
            cadena += string[i].toLowerCase()
            }else{
                cadena += string[i].toUpperCase()
            }
    }
    console.log(cadena);
}

invertirCaso("Ada Lovelace");
invertirCaso("feliz cumple");
invertirCaso("jAvAsCrIpT");


// separar(perrosYGatos)
// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.Ejemplo:

//separar('🐶🐱🐶🐱🐱🐶🐶') ---> retorna '🐶🐶🐶🐶🐱🐱🐱'

// function separar(perrosYGatos) {
//     let perros = "";
//     let gatos = "";

//     for(let i = 0; i < perrosYGatos.length; i++) {
//         console.log(perrosYGatos[i])
//         // console.log(i)
//         if(perrosYGatos[i] === 'p') {  
//             perros += perrosYGatos[i]
//         }else{
//             gatos += perrosYGatos[i]
//         }
//     }
//     console.log(gatos)
//     console.log(perros)
//     console.log('🐱' === '🐶')
// }

// separar('pppgggpgpgp')

function separar(perrosYGatos) {
    let perros = [];
    let gatos = [];

    for(let i of perrosYGatos) {
        // console.log(perrosYGatos[i])
        // console.log(i)
        if(i === '🐶') {  
            perros.push(i)
        }else if(i === '🐱') {
            gatos.push(i)
        }
    }
    console.log(gatos)
    console.log(perros)
    console.log(perros + gatos)
}

separar('🐶🐱🐶🐱🐱🐶🐶')


// multiplicar(multiplicador, numeros)
// Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

// multiplicar(2, [5, 7, 15, 22, 40]) // [10, 14, 30, 44, 80]
// multiplicar(10, [2, 5, 77]) // [20, 50, 770]

function multiplicar (multiplicador, numeros) {
    let calculo = [];

    for(let i = 0; i < numeros.length; i++) {
        // console.log(numeros[i]);
        calculo.push(multiplicador * numeros[i]);
        // console.log(calculo);
    }
    console.log(calculo);
}

multiplicar(2, [5, 7, 15, 22, 40]);
multiplicar(10, [2, 5, 77]);
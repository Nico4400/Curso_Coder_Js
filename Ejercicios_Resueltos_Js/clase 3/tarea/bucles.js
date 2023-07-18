// 1) Realice un bucle que tenga como valor inicial 0 y que itere hasta 10 veces. Envíe un mensaje en consola por cada iteración, con la siguiente frase: "¡¡Oh no, entré en un bucleeee!!"

// for(let i = 0; i <= 10; i++){
//     console.log(`¡¡Oh no, entré en un bucleeee!! ${i}`)    
// }

// 2) Realice un bucle que tenga como valor inicial 20 y que itere hasta 50 veces. Visualice en consola cada incremento de la variable inicial.

// for(let i = 20; i <= 70; i++){
//     console.log(`El N° inicial es 20 y se incremento a ${i}`)
// }

// 3) Realice un bucle que muestre todas las vocales y consonantes de una palabra. La palabra tiene que estar dentro de una variable. - averiguar length en for con strings -

// let palabra = prompt("ingrese una palabra");
// console.log(palabra.length)
// let vocales = ""
// let consonantes = ""

// for(let i = 0; i < palabra.length; i++){
    
//     palabra[i] === "a" || palabra[i] === "e" || palabra[i] === "i" || palabra[i] === "o" || palabra[i] === "u" ?
//     vocales += palabra[i]:consonantes += palabra[i]
// }
// console.log(vocales)
// console.log(consonantes)

// 4) Realice un bucle que tenga como valor inicial 10 y que itere hasta 100 veces, de manera incluyente ( <= ). Este bucle deberá tener una variable acumuladora para obtener la suma de todos los números que se encuentren dentro de dicho rango.

// let suma = 0

// for(let i = 10; i <= 110; i++){
//     suma += i
//     console.log(`iteró: ${i-10} veces, el valor es ${i} y la suma es ${suma}`)
// }


// 5) Realice un bucle que tenga como valor inicial 0 y que itere hasta 10 veces. Haciendo uso de una variable acumuladora, sume solamente los números impares en las iteraciones.

// let sumaImpares = 0

// for(let i = 0; i <= 10; i++){
//     if(i % 2 !== 0){
//         sumaImpares += i
//         console.log(`Es Numero Impar ${i} y la suma de los impares es: ${sumaImpares}`)
//     }
// }

// 6) Realice un bucle que coteje cuántas vocales tiene el nombre de un usuario. Para valerse de un valor, genere una variable con su nombre. Precisarán de una variable acumuladora que cuente la cantidad de vocales.

let palabra = prompt("ingrese una palabra");
console.log(palabra.length)
let vocales = ""

for(let i = 0; i < palabra.length; i++){    
    if(palabra[i] === "a" || palabra[i] === "e" || palabra[i] === "i" || palabra[i] === "o" || palabra[i] === "u"){
    vocales += palabra[i] 
    }
}
console.log(`Las vocales son: ${vocales} dando un total de ${vocales.length} vocales`)

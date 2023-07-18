// PARA CADA PUNTO, QUIERO QUE SE EVALÚEN TODOS LOS CASOS POSIBLES PRESENTADOS EN LA EJEMPLIFICACIÓN, ASÍ VERIFICAMOS QUE NUESTROS ALGORITMOS FUNCIONAN EN LA TOTALIDAD DE COMPARACIONES POSIBLES.
// COMO TODAVÍA NO SABEMOS HACER CÓDIGO REUTILIZABLE, VAMOS A TENER QUE HACER LA CANTIDAD DE VARIABLES Y ESTRUCTURAS NECESARIAS PARA PODER COMPROBAR TODOS LOS CASOS.
// VAN A TENER QUE CREAR MUCHAS VARIABLES, CON RESPECTO A SUS IDENTIFICADORES, USEN LOS NOMBRES QUE QUIERAN, PERO QUE TENGAN SENTIDO
// LES RECOMIENDO QUE NO COPIEN Y PEGUEN <3

// 1) Crear una estructura condicional que compare el valor de una variable con un color del semáforo (rojo, verde o amarillo) y devuelva un mensaje en consola en true si puede avanzar o false si no. Si no se ingresa un color válido, se debe devolver un mensaje en consola que diga: Error: color de semáforo inválido.

// EJEMPLIFICACIÓN DE CASOS
//     "Rojo" --> false
//     "Verde" --> true
//     "Amarillo" --> false
//     "SALKDASD" --> false

// const colorSemaforo = prompt("Ingrese el color del semaforo")

// if(colorSemaforo === "Verde"){
//     alert("Puede Avanzar!");

//     }else if(colorSemaforo === "Amarillo" || colorSemaforo === "Rojo"){
//         alert("Cuidado, No puede avanzar!")

//     }else{
//         alert("Color invalido!")//         
//     }

// 2) Crear una estructura condicional que compare el valor de una variable con las vocales y devuelva un mensaje en consola "Es una vocal" si letra es una vocal o "No es una vocal" si no lo es.

// EJEMPLIFICACIÓN DE CASOS
//     'a' // true
//     'n' // false
//     '1' // false

// const letraVocal = prompt("Ingrese una letra")

// if (letraVocal === "a" || letraVocal === "e" || letraVocal === "i" || letraVocal === "o" || letraVocal === "u"){
//     alert("Es una Vocal");    

//     }else{
//         alert("No es una Vocal");        
//     }


// 3) Crear una estructura condicional que compare el valor de una variable con las consonantes y devuelva true si letra es una consonante o false si no lo es

// EJEMPLIFICACIÓN DE CASOS
// EJ: 'a' // false
//     'n' // true
//     '2130213' // false

// const letraConsonante = prompt("Ingrese una letra");

// if (letraConsonante === "a" || letraConsonante === "e" || letraConsonante === "i" || letraConsonante === "o" || letraConsonante === "u"){          
//     alert("Es una Vocal");

//     }else if(letraConsonante > 0 || letraConsonante > 0 || letraConsonante === 0){
//         alert("No es una letra");

//     }else{
//         alert("Es una consonante");
//     }
// console.log(typeof(letraConsonante));


// 4) Crear una estructura condicional que compare tres valores booleanos: pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva un mensaje en consola que sea true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos.

// EJEMPLIFICACIÓN DE CASOS
// (true, true, true)    // false
// (true, true, false)   // false
// (true, false, true)   // true
// (true, false, false)  // false
// (false, true, true)   // false
// (false, true, false)  // false
// (false, false, true)  // false
// (false, false, false) // false

// const pasoTest = prompt("Paso es test ? true/false");
// console.log(pasoTest);

// const tieneMultasImpagas = prompt("Tiene multas impagas ? true/false");
// console.log(tieneMultasImpagas);

// const pagoImpuestos = prompt("Pago los impuestos ? true/false");
// console.log(pagoImpuestos);

// if(pasoTest === "true" && tieneMultasImpagas === "false" && pagoImpuestos === "true"){
//     alert("Usted está habilitadx para renovar su carnet")

//     }else{
//     alert("Usted No puede renovar su carnet");        
// }


// 5) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es par" si el numero es par, o "Es impar" si el numero es impar. (AVERIGUAR SOBRE OPERADOR RESTO EN JAVASCRIPT, googlear es parte de nuestro trabajo)

// const numero = prompt("Ingrese un N°")

// if(numero % 2 === 0){
//     alert("Es Par");

//     }else if(numero % 2 >= 0){
//         alert("El numero es Impar");

//     }else{
//         alert("No es un numero")
//     }


// 6) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es positivo" si el número es positivo o "Es negativo" si el número es negativo

// EJEMPLIFICACIÓN DE CASOS
// esPositivoONegativo(3)  // 'Es positivo'
// esPositivoONegativo(-5) // 'Es negativo'

const numeroPositivoNegativo = prompt("Ingrese un Numero")

if(numeroPositivoNegativo >= 0){
    alert("El numero es Positivo");

    }else if(numeroPositivoNegativo < 0){
        alert("El numero es negativo");

    }else{
        alert("No es Numero")
    }
// PUNTOS SEGUNDA PREENTREGA
// PARA APROBAR, DEBEMOS HACER USO DE: ARRAYS, OBJETOS, FUNCIONES, MÉTODOS DE ARRAYS DE ITERACIÓN O MÉTODOS DE ARRAYS COMO PUSH, SPLICE, ETC, LOS QUE QUIERAN USAR
// TIENEN QUE INTERACTUAR CON EL USUARIO A TRAVÉS DE PROMPT
// PUEDEN DEVOLVER LA RESPUESTA AL USUARIO CON UN ALERT O CONSOLE.LOG
// TODOS LOS PUNTOS TIENEN QUE TRABAJAR CON ARRAYS DE OBJETOS
// SE DEBEN INSTANCIAR NUEVOS OBJETOS Y ESTOS DEBEN SER PUSHEADOS A UN ARRAY VACÍO


// CASO ECOMMERCE
// Generen con un función constructora o class constructor 5 objeto relativos a productos.
// Este objeto tiene uqe tener los siguientes propiedades:
// - nombre, precio, cantidad, categoria, id.
// Estos objetos deben ser pusheados a un array vacío que se llame productos
// al tener la data de nuestros productos, se debe hacer uso de un método de array que ordene a los elementos por su nombre (sort).
// luego debemos mandar un prompt, que se aloje en una variable, que le pregunte al usuario qué quiere comprar.
// debemos usar un método de array que busque a ese elemento, que tome su valor de nombre y precio y que mande un alerta al usuario, diciéndole que el producto ya está preparado para ir a su domicilio, que salio x dinero y agradecer por su combra.

// const productos = [];
// let productoInexistente = 0;

// class producto {
//     constructor ( id, categoria, nombre, precio, cantidad, dias ) {
//         this.id = id;
//         this.categoria = categoria;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//         this.dias = dias;
//     } 

//     visualizarProducto () {
//         alert(`El producto ${this.nombre} ya está preparado para enviar a su domicilio dentro de los proximos ${this.dias} dias, el mismo se encuentra en stock y fue abonado por un precio de : $ ${this.precio}. Gracias por su compra, cualquier inconveniente no dude en consultar a nuestro centro de atención`);

//         console.log(`El producto ${this.nombre} ya está preparado para enviar a su domicilio dentro de los proximos ${this.dias} dias, el mismo se encuentra en stock y fue abonado por un precio de : $ ${this.precio}. Gracias por su compra, cualquier inconveniente no dude en consultar a nuestro centro de atención`);
//     }    
// }

// productos.push( new producto(4, "calzado", "zapatillas", 15, 0, 4));
// productos.push( new producto(1, "remeras", "remera termica", 10, 10, 2));
// productos.push( new producto(2, "accesorios", "cinturon", 20, 5, 2));
// productos.push( new producto(3, "accesorios", "gorra", 5, 50, 3));

// const productosOrdenados = productos.slice().sort(( a, b ) => {
//     if ( a.nombre < b.nombre ) {
//         return -1;
//     } else if ( a.nombre > b.nombre ) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

// const nombreProducto = prompt("Ingrese el Nombre del producto deseado. productos: remera termica, cinturon, gorra, zapatillas");

// Pruebo con Find

// const resultado = productos.find(( producto ) => 
//     producto.nombre === nombreProducto)
//     console.log(resultado)
//     if( resultado ){
//         if(resultado.cantidad === 0){
//             alert(`El producto ${nombreProducto} no está en stock`)
//             console.log(`El producto ${nombreProducto} no está en stock`)
//         }else{
//             resultado.visualizarProducto() 
//         }
//     }else{
//         alert(`El producto ${nombreProducto} no se encuentra dentro de nuestro catalogo`);
//         console.log(`El producto ${nombreProducto} no se encuentra dentro de nuestro catalogo`);
//     }
// 

// Pruebo con Foreach

// productos.forEach(( producto ) => {
//     // console.log(productos)
//     if (producto.nombre === nombreProducto) {
//         if(producto.cantidad === 0){
//             alert(`El producto ${nombreProducto} no está en stock`)
//             console.log(`El producto ${nombreProducto} no está en stock`)
//         }else{
//             producto.visualizarProducto() 
//         }           
//     }else{
//         productoInexistente += 1;        
//     }       
// })

// if(productoInexistente === productos.length){
//     alert(`El producto ${nombreProducto} no se encuentra dentro de nuestro catalogo`);
//     console.log(`El producto ${nombreProducto} no se encuentra dentro de nuestro catalogo`);        
// }

// console.log(productos);
// console.log(productosOrdenados);



// CASO BLOG
// Generar una función constructora o class constructor un objeto relativo a una entrada de blog ( cadena de caracteres)
// Este objeto tiene que tener las siguientes propiedades:
// nombreDeUsuario, texto
// se deben hacer 6 variables (LA IDEA ES UQE PUSHEEN 3 OBJETOS) que contengan prompts y pregunten al usuario su nombre de usuario y su texto
// al completar estos prompt Estos objetos deben ser pusheados a un array vacío que se llame productos
// si las entradas del prompt son NULL, no se pushea nada y se le devuelve un alerta al usuario diciéndole que le falto ingresar su nombre de usuario o el texto
// al terminar con esta iteración, debemos ordenar el array por el nombre del usuario.
// si el usuario ingresa correctamente los datos, deben visualizar en la consola todos sus estados ingresados anteriormente

// EJEMPLO DE FUNCIONES CONSTRUCTORAS O CLASS CONSTRUCTOR PUSHEANDO DATOS A UN ARRAY


// class Blog {
//     constructor ( nombreUsuario, texto ) {
//         this.nombre = nombreUsuario;
//         this.texto = texto;
//     } 

//     visualizarTexto () {
//         console.log(`${this.nombre}: ${this.texto}`)
//     }
// }

// publicaciones.push( new Blog(entradaDeBlogNombre, entradaDeBlogTexto))


const publicaciones = [];
let entradas = 3;
console.log(entradas)

const generarEntradaDeBlog = () => {

    const entradaDeBlogNombre = prompt("Ingrese su nombre")
    const entradaDeBlogTexto = prompt("Ingrese su comentario")

    if(entradaDeBlogNombre === "" || entradaDeBlogTexto === "" ){
        alert("El Nombre y Comentario No puede estar vacio, vuelva a ingresar su nombre y comentario para visulaizar correctamente")
        generarEntradaDeBlog()
    }else{           
        publicaciones.push({
            nombre: entradaDeBlogNombre,
            texto: entradaDeBlogTexto,
            visualizarEnConsola: () => (`Usuario: ${entradaDeBlogNombre} - Comentario: ${entradaDeBlogTexto}`),          
        })
        entradas -= 1
        console.log(entradas)

        if(entradas !== 0){
            generarEntradaDeBlog()
        }   
    }    
}

generarEntradaDeBlog()

const publicacionesOrdenadas = publicaciones.slice().sort(( a, b ) => {
        if ( a.nombre < b.nombre ) {
            return -1;
        } else if ( a.nombre > b.nombre ) {
            return 1;
        } else {
            return 0;
        }
    });
    
console.log(publicaciones[0].nombre)
publicaciones[0].visualizarEnConsola()
console.log(publicacionesOrdenadas)
for(const e of publicacionesOrdenadas){
    alert(e.visualizarEnConsola())
    console.log(e.visualizarEnConsola())
}

// // publicaciones[0].visualizarData()

// // SORT

// const clientes = [
//     {
//         nombre: "Zulema",
//         id: 0
//     },
//     {
//         nombre: "Karina",
//         id: 1
//     },
//     {
//         nombre: "Yesica",
//         id: 2
//     },
//     {
//         nombre: "Adrian",
//         id: 3
//     }
// ]

// // ordenar datos haciendo una copia segura del objeto clientes

// const clientesOrdenados = clientes.slice().sort(( a, b ) => {
//     if ( a.nombre < b.nombre ) {
//         return -1;
//     } else if ( a.nombre > b.nombre ) {
//         return 1;
//     } else {
//         return 0;
//     }
// })

// console.log(clientesOrdenados)

// // ordenar datos sin hacer copia segura

// // clientes.sort(( a, b ) => {
// //     if ( a.nombre < b.nombre ) {
// //         return -1;
// //     } else if ( a.nombre > b.nombre ) {
// //         return 1;
// //     } else {
// //         return 0;
// //     }
// // })

// // REPASO SORT
// // si el array contiene strings, entonces puedo solamente usar sort() para ordenarlos

// const frutas = [ "kiwi", "melón", "anana", "ciruela"]

// frutas.sort()

// console.log(frutas)

// // si es numbers tengo que hacer la diferencia a través de la resta

// const numbers = [ 223423, 89548, -324234, Infinity, -Infinity, 80, 0.4 ]

// // ascendente (de menor a mayor)

// numbers.sort(( a, b) => a - b)

// console.log(numbers)

// // de mayor a menor

// const numbersDescendente = numbers.slice().sort(( a, b ) => b - a)

// console.log(numbersDescendente)
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

const productos = [];
let productoInexistente = 0;

// Uso Class constructor
class producto {
    constructor ( id, categoria, nombre, precio, cantidad, dias ) {
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.dias = dias;
    } 

    visualizarProducto () {
        alert(`El producto ${this.nombre} ya está preparado para enviar a su domicilio dentro de los proximos ${this.dias} dias, el mismo se encuentra en stock y fue abonado por un precio de : $ ${this.precio}. Gracias por su compra, cualquier inconveniente no dude en consultar a nuestro centro de atención`);

        console.log(`El producto ${this.nombre} ya está preparado para enviar a su domicilio dentro de los proximos ${this.dias} dias, el mismo se encuentra en stock y fue abonado por un precio de : $ ${this.precio}. Gracias por su compra, cualquier inconveniente no dude en consultar a nuestro centro de atención`);
    }    
}

productos.push( new producto(4, "calzado", "zapatillas", 15, 0, 4));
productos.push( new producto(1, "remeras", "remera termica", 10, 10, 2));
productos.push( new producto(2, "accesorios", "cinturon", 20, 5, 2));
productos.push( new producto(3, "accesorios", "gorra", 5, 50, 3));

const productosOrdenados = productos.slice().sort(( a, b ) => {
    if ( a.nombre < b.nombre ) {
        return -1;
    } else if ( a.nombre > b.nombre ) {
        return 1;
    } else {
        return 0;
    }
});

const nombreProducto = prompt("Ingrese el Nombre del producto deseado. productos: remera termica, cinturon, gorra, zapatillas");  

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


// Pruebo con forEach.

productos.forEach(( producto ) => {
    // console.log(productos)
    if (producto.nombre === nombreProducto) {
        if(producto.cantidad === 0){
            alert(`El producto ${nombreProducto} no está en stock`)
            console.log(`El producto ${nombreProducto} no está en stock`)
        }else{
            producto.visualizarProducto() 
        }           
    }else{
        productoInexistente += 1;        
    }       
})

if(productoInexistente === productos.length){
    alert(`El producto ${nombreProducto} no se encuentra dentro de nuestro catalogo`);
    console.log(`El producto ${nombreProducto} no se encuentra dentro de nuestro catalogo`);        
}

console.log(productos);
console.log(productosOrdenados);
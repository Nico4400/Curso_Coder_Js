// TAREA OBJETOS

// 1) Escribe el código, una línea para cada acción:

// Crea un objeto user vacío.
// Agrega la propiedad name con el valor John.
// Agrega la propiedad surname con el valor Smith.
// Cambia el valor de name a Pete.
// Remueve la propiedad name del objeto.
// Añada una nueva propiedad name y asignale de valor tu nombre

const objetoVacio = {}

objetoVacio['nombre'] = "John";
objetoVacio['apellido'] = "Smith"

objetoVacio.nombre = "Pete"

delete objetoVacio.nombre

objetoVacio['nombre'] = "Nico"

console.log(objetoVacio)

// 2) Tenemos un objeto que almacena los salarios de nuestro equipo:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

// Escribe el código para sumar todos los salarios y almacenar el resultado en la variable sum. En el ejemplo de arriba nos debería dar 390.

const suma = ( salaries.John + salaries.Ann + salaries.Pete )

console.log(suma)

// 3) Generar tres nuevos objeto literales que se almacenen en una variable y que se llamen producto1, producto2 y producto3. Este objeto debe contar con las siguientes propiedades y pueden elegir sus valores, respetando los tipos de datos asignados:

// Lista de propiedades:
// id --> number
// nombreDelProducto --> string
// precio --> number
// color --> string
// categoriaDelProducto --> string
// oferta --> boolean
// descuentoEnCyberWeek --> number
// aplicarDescuento --> método (function) que consume en una condición si oferta es true, entonces se aplica el nuevo precio del producto, consumido su porcentaje de descuentoEnCyberWeek
// vendedor ---> String con nombre del perfil de la empresa que vende
// reputacionVendedor ---> number (valor que va de 1 a 5 y representa las estrellas )
// reputacionProducto ---> number ( valor que va de 1 a 5 y representa las estrellas )
// cantidadDisponible ---> number 
// cantidadVendida ---> number

// NO HACER ESTE EJERCICIO CON CONSTRUCTORES

const producto1 = {
    id : 1,
    nombreDelProducto: "maquina",
    precio : 100,
    color : "rojo",
    categoriaDelProducto : "maquinaria",
    oferta : true,
    descuentoEnCyberWeek : 10,
    aplicarDescuento : function () {
        if(this.oferta){ 
            const descuento = (this.precio * this.descuentoEnCyberWeek) / 100;
            this.precio -= descuento;
        }
    },
    vendedor : "maquinas24",
    reputacionVendedor : 2,
    reputacionProducto : 3,
    cantidadDisponible : 5,
    cantidadVendida : 5,
}

producto1.aplicarDescuento();

console.log(producto1)
console.log(producto1.precio)

// 4) Generar tres nuevos clientes, utilizando un constructor, y almaceándolos en variables,  que contengan las siguientes propiedades, pueden elegir sus valores, respetando los tipos de datos asignados:

// nombre --> string
// apellido --> string
// dirección --> string
// calle --> number
// departamento --> number || null
// localidad --> string
// provincia --> string
// país --> string
// dni --> number
// email --> string

// pueden usar function constructor o class constructor

class cliente {
    constructor (nombre, apellido, direccion, calle, departamento, localidad, provincia, pais, dni, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.calle = calle;
        this.departamento = departamento;
        this.localidad = localidad;
        this.provincia = provincia;
        this.pais = pais;
        this.dni = dni;
        this.email = email;
    }
    clientes() {
        console.log(`El cliente es ${this.nombre} ${this.apellido} con dirección: ${this.direccion} en la calle ${this.calle}, Dep. ${this.departamento} en la localidad de ${this.localidad} provincia de ${this.provincia}, país de ${this.pais} con D.N.I: ${this.dni} y su email es ${this.email}`)
    }     
}

const cliente1 = new cliente ("Pepito", "Rodrigues", "cochabamba", 1234, 3, "La Plata", "Bs As", "Argentina", 12345678, "noteimporta@gmail.com")

cliente1.clientes()

console.log(cliente1)


// 5) Analizar el siguiente objeto:

const discoSolido = { 
    "id": "MLA1410362542",
    "category_id": "MLA1672",
    "title": "Disco sólido interno Adata Ultimate SU650 ASU650SS-240GT-R 240GB negro",
    "url": "https://www.mercadolibre.com.ar/disco-solido-interno-adata-ultimate-su650-asu650ss-240gt-r-240gb-negro/p/MLA15749699#reco_item_pos=0&reco_backend=machinalis-pdp-pads-v2p-brothers&reco_backend_type=low_level&reco_client=pdp-pads-right&reco_id=14b8ec57-61a1-49f7-9d64-3c1ba4abf3f8",
    "price": {
        "currency_id": "ARS",
        "symbol": "$",
        "decimal_separator": ",",
        "fraction": "13.399"
    },
    "sale_price": {
        "amount": 13399,
        "currency_id": "ARS",
        "metadata": {},
        "fallback": false
    },
    "image": {
        "src": "https://http2.mlstatic.com/D_Q_NP_726919-MLA40462053410_012020-AB.webp",
        "src2x": "https://http2.mlstatic.com/D_Q_NP_2X_726919-MLA40462053410_012020-AB.webp",
        "size": "224px"
    },
    "product_id": "MLA15749699",
    "available_quantity": 12,
    "status": "active",
    "is_cart_enabled": false,
    "vertical": "CORE",
    "shipping": {
        "text": "Envío gratis",
        "freeShipping": true,
        "fullfilment": true
    }
}

// declarar variables (con el identificador que quieran) y asignarle los siguientes valores que se encuentran dentro de este objeto:

// b) el title
// c) el symbol de la propiedad price
// d) el amount de la propiedad sale_price
// f) el freeShipping de la propiedad shipping

const titleDiscoSolido = discoSolido.title;
const symbolDiscoSolido = discoSolido.price.symbol;
const amountDiscoSolido = discoSolido.sale_price.amount;
const freeShippingDiscoSolido = discoSolido.shipping.freeShipping;

console.log(titleDiscoSolido)
console.log(symbolDiscoSolido)
console.log(amountDiscoSolido)
console.log(freeShippingDiscoSolido)


// Luego deben hacer una función que reciba cinco parámetros con los siguientes nombres: titulo, simbolo, precio, envioGratis

// VALIDAR DENTRO DE LA FUNCIÓN CON ESTRUCTURA CONDICIONAL:
// si el envioGratis ( relativo al dato de freeShipping es igual a true), entonces se debe retornar el siguiente mensaje `El artículo: ${ titulo }, de precio: ${ simbolo }${ precio }, que se encuentra ${ disponible }, cuenta con envío gratis.

// en caso contratio, se debe retornar el siguiente mensaje: `El artículo: ${ titulo }, de precio: ${ simbolo }${ precio }, que se encuentra disponible, no cuenta con envío gratis.

const nuevoDisco = function (titulo, simbolo, precio, envioGratis){
    const disponible = 10;
    if(envioGratis){
        console.log(`El artículo: ${ titulo }, de precio: ${ simbolo }${ precio }, que se encuentra ${ disponible }, cuenta con envío gratis.`);        
    }else{
        console.log(`El artículo: ${ titulo }, de precio: ${ simbolo }${ precio }, que se encuentra disponible, no cuenta con envío gratis.`);
    }
}

const crearDisco1 = nuevoDisco("disco asd", "$", 10000, true);
const crearDisco2 = nuevoDisco("disco red", "$", 2000, false);



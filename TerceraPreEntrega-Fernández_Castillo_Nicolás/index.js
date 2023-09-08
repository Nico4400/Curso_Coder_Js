// **Actividad 1: Ecommerce**

// 1. **Objetivo**: Comenzar a desarrollar un ecommerce que permita mostrar productos, agregarlos al carrito y guardar la selección en el almacenamiento local.

// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "productos-container" donde se mostrarán las tarjetas de productos.

//    b. En un archivo JavaScript, crea un array de objetos con 10 productos.

//    c. Escribe una función llamada `generarTarjetas` que reciba el array de productos como argumento. Dentro de esta función, utiliza un reduce para crear elementos HTML para cada producto, estilízalos mínimamente y agrega un botón "Agregar al Carrito" que al hacer clic lo agregue al almacenamiento local.

const productos = [
    {
        id: 1,
        producto: "Tarjeta Gráfica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Nvidia",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvPAKNmnQlCve9dch13LnfxAa7zgRe-HlVZC6FA0N5Wjev7yx4Rp6WIF0RpoDVtmrlbI&usqp=CAU",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        producto: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "Dell",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRba6z91CtHt7c_XzTcLPoJOHamrgMjZut-ROOjGVSm5HsNehvUOa1UDiL3HcQz0Hjn3xw&usqp=CAU",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        producto: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Samsung",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15CX2XBNHsnuhW434VADk_UXbE8zOf321d_sw-jniY895l7BP-_UICm1CSDdi6V4jec4&usqp=CAU",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        producto: "Teclado Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: null,
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        producto: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaYVa_NpwV8BYjr9JRIKF-ymtNOYnWMHTCVgjMPzX18v2tSuaRdK0O7oSzgzuNTni_EA&usqp=CAU",
        descripcion: null,
    },
    {
        id: 6,
        producto: "Mouse Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7t-tqHvdcKks3hRYcWwVLKNeNUW91-S5Pm_42oqfd657vbjqmCaC6XaU_5vxkRnDHaks&usqp=CAU",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        producto: "Memoria RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "Crucial",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOdaNUzvmky9WjwMw8VEMq0N91QIkwGOXoPqByxRI7XRvqUv39EMtvPMUc0WdeQmW_gE&usqp=CAU",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        producto: "Disco Duro Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvM6wQkEzThaDrhBoaesCPrFl0i2TeAsmN-05mBTe56mqoAfCi46J_3zAil-O6-bbmqQg&usqp=CAU",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        producto: "Fuente de Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: null,
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        producto: "Auriculares Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxdL_87yRs5CkHOYDY-GPNAUwhIMCn6E9NUxwiZK6Un27FgkL9HrA045LsyVAcHmBiOE&usqp=CAU",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
];

// funcion para generar tarjetas
function generarTarjetas(){

    const tarjeta = array => {
        const contenedor = document.querySelector("#productos-container");
        console.log(contenedor)

        const tarjetas = array.reduce(( acc, item ) => {
            return acc + `
            <div class="tarjeta" id="data-${item.id}">
                <h2>
                    ${ item.producto || "No Disponible" }
                </h2>

                <div class="container-img">
                    <img src=${item.imagen || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOM5VF1DLrm1Wt6w3AVGeztqrJrEyg1tWYkC2K74aAQoytFi-pRQreSz2aeCkElwn0x0&usqp=CAU"} alt=${item.producto}>
                </div>

                <div class="container-precio">
                    <h3>
                        $ ${ item.precio || "No Disponible" }
                    </h3>
                </div>

                <div class="container-info">
                    <h5 class="container-categoria">
                        Categoria: ${ item.categoria || "No Disponible" }
                    </h5>
                    <h5 class="container-marca">
                        Marca: ${ item.marca || "No Disponible" }
                    </h5>
                    <h6>
                        Descripción: ${ item.descripcion || "No Disponible" }
                    </h6>
                </div>

                <form class="form-agregarCarrito">                
                    <label>
                        <input id="${item.id}" value="Agregar al Carrito" type="submit">
                    </label>
                </form>

            </div>
            `
        },"")    
        contenedor.innerHTML = tarjetas
    }
    tarjeta(productos)

    
    // evento para agregar al carrito
    function agrego (){        

        const agregarCarrito = document.querySelectorAll(".form-agregarCarrito");
        console.log(agregarCarrito)

        agregarCarrito.forEach(agregar => {
            agregar.addEventListener("submit", (e) => {
                console.log("me clickean")
                e.preventDefault()
                const id = parseInt(e.submitter.id)
                // console.log(id)
                agregarAlCarrito(id)
            })
        }) 
    }

    agrego ()

    // pongo filtros

    function filtros() {
        const categoria = document.querySelector("#select-categoria")
        console.log(categoria)
    
        const categoriasSet = []
        const historialCategoria = []
    
        productos.forEach(item => {
            if ( categoriasSet.includes(item.categoria)) {
                
            }else{
                categoriasSet.push(item.categoria);
            }
        })
        console.log(categoriasSet)
    
        const categorias = categoriasSet.reduce(( acc, item ) => {
            return acc + `
                
                <option value="${ item }">${ item }</option>          
            `
        },`<option value="todasLasCategorias">Todas las Categorias</option>`)
    
        categoria.innerHTML = categorias
    
        // llamar al selector para escuchar los cambios de los géneros
    
        const filtrarPorCategoria = ( categoria, array ) => {
            return array.filter( (e) => {
                return e.categoria && categoria === e.categoria 
            })
        }
    
        const filtrarCategoriaPorNulo = ( array ) => {
            return array.filter( e => {       
                return e.categoria === null
            })
        }
    
        categoria.addEventListener("change", (e) => {
            console.log(e.target.value) // me muestra el valor del input
    
            if ( e.target.value === "todasLasCategorias" ) {
                tarjeta(productos)
                agrego ()
            } else if ( e.target.value === "null" ) {
                tarjeta(filtrarCategoriaPorNulo(productos))
                agrego ()
            } else {
                tarjeta(filtrarPorCategoria(e.target.value, productos))
                historialCategoria.push(e.target.value)
                agrego ()  
            }
            // Convertir el objeto a una cadena JSON
            const historialCategorias = JSON.stringify(historialCategoria);
            // Guardar en el Local Storage
            localStorage.setItem('historialCategorias', historialCategorias)
        })
    }

    filtros()
}

// llamo la funcion
generarTarjetas()

// array de carrito
const agregadosAlCarrito = []


// paso al html
const cards = array => {
    const carro = document.querySelector("#carrito-agregados");
    console.log(carro)

    const carrito = array.reduce(( acc, item ) => {
        return acc + `
            <div class="tarjeta" id="data-${item.id}">
                <h2>
                    ${ item.producto || "No Disponible" }
                </h2>

                <div class="container-img">
                    <img src=${item.imagen || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOM5VF1DLrm1Wt6w3AVGeztqrJrEyg1tWYkC2K74aAQoytFi-pRQreSz2aeCkElwn0x0&usqp=CAU"} alt=${item.producto}>
                </div>

                <div class="container-precio">
                    <h3>
                        $ ${ item.precio || "No Disponible" }
                    </h3>
                </div>

                <div class="container-info">
                    <h5 class="container-categoria">
                        Categoria: ${ item.categoria || "No Disponible" }
                    </h5>
                    <h5 class="container-marca">
                        Marca: ${ item.marca || "No Disponible" }
                    </h5>
                    <h6>
                        Descripción: ${ item.descripcion || "No Disponible" }
                    </h6>
                </div>

                <form action="" class="form-sacarCarrito">                
                    <label>
                        <input id="${item.id}" value="Sacar de Carrito" type="submit">
                    </label>
                </form>

            </div>
        `
    },"")
    carro.innerHTML = carrito

    const sacarCarrito = document.querySelectorAll(".form-sacarCarrito");
    console.log(sacarCarrito)
    
    // evento para sacar del carrito
    sacarCarrito.forEach(sacar => {
        sacar.addEventListener("submit", (e) => {
            console.log("me clickean")
            e.preventDefault()
            const id = parseInt(e.submitter.id)
            // console.log(id)
            sacarDelCarrito(id)                      
        })
    })   
}

//funcion para agrear al carrito
function agregarAlCarrito(id) {
    const producto = productos.find((item) => item.id === id);
    // console.log(producto)
    // console.log(typeof(id))
    if (producto) {
        agregadosAlCarrito.push(producto);
        cards(agregadosAlCarrito)

        // Convertir el objeto a una cadena JSON
        const agregadoAlCarrito = JSON.stringify(agregadosAlCarrito);
        // Guardar en el Local Storage
        localStorage.setItem('agregadoAlCarrito', agregadoAlCarrito)
    
        console.log("Producto agregado al carrito:", producto);
    }
    console.log(agregadosAlCarrito)
}    

// funcion para sacar del carrito
function sacarDelCarrito(id) {
    const producto = agregadosAlCarrito.findIndex((item) => item.id === id);
    // console.log(typeof(producto))
    if (producto !== -1) {
        agregadosAlCarrito.splice(producto, 1);
        cards(agregadosAlCarrito)
        
        // Actualizar el Local Storage con el nuevo carrito
        const carritoActualizado = JSON.stringify(agregadosAlCarrito);
         // Guardar en el Local Storage
        localStorage.setItem('agregadoAlCarrito', carritoActualizado); 

        console.log("Producto eliminado al carrito:", producto);
    }
    console.log(agregadosAlCarrito)
}    

// Recuperar del Local Storage y convertir de nuevo a un objeto
const carritoLocalStorageString = localStorage.getItem('agregadoAlCarrito');
const carritoLocalStorage = JSON.parse(carritoLocalStorageString);

if (carritoLocalStorage) {
    agregadosAlCarrito.push(...carritoLocalStorage);
    cards(agregadosAlCarrito);
}


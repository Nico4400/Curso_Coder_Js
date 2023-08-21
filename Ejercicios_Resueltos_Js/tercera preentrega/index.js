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

    const agregarCarrito = document.querySelectorAll(".form-agregarCarrito");
    console.log(agregarCarrito)

    // evento para agregar al carrito
    agregarCarrito.forEach(agregar => {
        agregar.addEventListener("submit", (e) => {
            console.log("me clickean")
            e.preventDefault()
            const id = parseInt(e.submitter.id)
            // console.log(id)
            agregarAlCarrito(id)
        })
    }) 

    // pongo filtros

    function filtros() {
        const categoria = document.querySelector("#select-categoria")
        console.log(categoria)
    
        const categoriasSet = []
    
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
            } else if ( e.target.value === "null" ) {
                tarjeta(filtrarCategoriaPorNulo(productos))
            } else {
                tarjeta(filtrarPorCategoria(e.target.value, productos))  
            }
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








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// **Actividad 2: Página de Información sobre Pokémon**

// 1. **Objetivo**: Construir una página que muestre información sobre diferentes Pokémon y permita explorar sus detalles.

// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "pokemon-container" donde se mostrará la información de los Pokémon.

//    b. En un archivo JavaScript, crea un array de objetos con 10 Pokémon.

//    c. Escribe una función llamada `generarInfoPokemon` que reciba el array de datos de Pokémon como argumento. Dentro de esta función, utiliza un reduce para crear elementos HTML que muestren los detalles de cada Pokémon. Dentro de cada una de las tarjetas, tiene que haber un botón con un ícono de estrella. Estilízalos mínimamente. 

//    d. Inserta estos nodos en el contenedor del punto a con innerHTML. 

//    e. Al hacer click sobre el botón de una tarjeta, los datos de ese pokemon deben ser almacenados en el localStorage. 

const pokemonData = [
    {
        id: 1,
        nombre: "Pikachu",
        tipo: ["Eléctrico"],
        debilidad: ["Tierra"],
        habilidades: ["Impactrueno", "Rayo", "Electrocañón"]
    },
    {
        id: 2,
        nombre: "Charmander",
        tipo: ["Fuego"],
        debilidad: ["Agua", "Roca"],
        habilidades: ["Lanzallamas", "Garra Dragón", "Giro Fuego"]
    },
    {
        id: 3,
        nombre: "Squirtle",
        tipo: ["Agua"],
        debilidad: ["Eléctrico", "Planta"],
        habilidades: ["Hidrobomba", "Pistola Agua", "Rayo Burbuja"]
    },
    {
        id: 4,
        nombre: "Bulbasaur",
        tipo: ["Planta", "Veneno"],
        debilidad: ["Fuego", "Volador", "Psíquico", "Hielo"],
        habilidades: ["Latigazo", "Hoja Afilada", "Planta Feroz"]
    },
    {
        id: 5,
        nombre: "Jigglypuff",
        tipo: ["Normal", "Hada"],
        debilidad: ["Acero", "Veneno"],
        habilidades: ["Canto", "Desarme", "Ataque Doble"]
    },
    {
        id: 6,
        nombre: "Geodude",
        tipo: ["Roca", "Tierra"],
        debilidad: ["Agua", "Planta", "Hielo", "Lucha", "Acero"],
        habilidades: ["Lanzarrocas", "Roca Afilada", "Terremoto"]
    },
    {
        id: 7,
        nombre: "Machop",
        tipo: ["Lucha"],
        debilidad: ["Psíquico", "Volador", "Hada"],
        habilidades: ["Karate", "Golpe Bajo", "Puño Fuego"]
    },
    {
        id: 8,
        nombre: "Gastly",
        tipo: ["Fantasma", "Veneno"],
        debilidad: ["Fantasma", "Siniestro"],
        habilidades: ["Hipnosis", "Tinieblas", "Bola Sombra"]
    },
    {
        id: 9,
        nombre: "Dratini",
        tipo: ["Dragón"],
        debilidad: ["Hada", "Hielo"],
        habilidades: ["Cola Dragón", "Pulso Dragón", "Onda Trueno"]
    },
    {
        id: 10,
        nombre: "Eevee",
        tipo: ["Normal"],
        debilidad: ["Lucha"],
        habilidades: ["Mordisco", "Ataque Rápido", "Refuerzo"]
    }
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// **Actividad 3: Blog como Facebook**

// 1. **Objetivo**: Crear una página estilo blog donde los usuarios puedan ver publicaciones y cambiar entre modos de visualización.

// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "publicaciones-container" donde se mostrarán las publicaciones.

//    b. En un archivo JavaScript, crea un array de objetos con 10 publicaciones. 

//    c. Escribe una función llamada `generarPublicaciones` que reciba el array de publicaciones como argumento. Dentro de esta función, utiliza un bucle para crear elementos HTML que muestren las publicaciones, estilízalos mínimamente.

//    d. Agrega un botón con el id "modo-oscuro" que, al hacer clic, cambie el fondo del sitio y guarde la preferencia en el almacenamiento local.

const publicaciones = [
    {
        id: 1,
        contenido: "¡Nuevo artículo en el blog!",
        imagen: "imagen1.jpg",
        fechaDePublicacion: "2023-08-16",
        nickDelUsuario: "user123",
    },
    {
        id: 2,
        contenido: "Recuerdos de las vacaciones",
        imagen: null,
        fechaDePublicacion: "2023-08-15",
        nickDelUsuario: "traveler99",
    },
    {
        id: 3,
        contenido: "¡Felicidades en tu cumpleaños!",
        imagen: "imagen3.jpg",
        fechaDePublicacion: "2023-08-14",
        nickDelUsuario: "birthdayWishes",
    },
    {
        id: 4,
        contenido: null,
        imagen: "imagen4.jpg",
        fechaDePublicacion: "2023-08-13",
        nickDelUsuario: "photoEnthusiast",
    },
    {
        id: 5,
        contenido: "Compartiendo una receta deliciosa",
        imagen: "imagen5.jpg",
        fechaDePublicacion: "2023-08-12",
        nickDelUsuario: "foodieCook",
    },
    {
        id: 6,
        contenido: "Explorando nuevos lugares",
        imagen: "imagen6.jpg",
        fechaDePublicacion: "2023-08-11",
        nickDelUsuario: "adventurerTravel",
    },
    {
        id: 7,
        contenido: "¡Concierto increíble anoche!",
        imagen: null,
        fechaDePublicacion: "2023-08-10",
        nickDelUsuario: "musicLover",
    },
    {
        id: 8,
        contenido: "Nueva adquisición para la colección",
        imagen: "imagen8.jpg",
        fechaDePublicacion: "2023-08-09",
        nickDelUsuario: "collector123",
    },
    {
        id: 9,
        contenido: "Disfrutando de un día soleado",
        imagen: "imagen9.jpg",
        fechaDePublicacion: "2023-08-08",
        nickDelUsuario: "outdoorExplorer",
    },
    {
        id: 10,
        contenido: "Reflexiones sobre la vida",
        imagen: null,
        fechaDePublicacion: "2023-08-07",
        nickDelUsuario: "deepThinker",
    },
];

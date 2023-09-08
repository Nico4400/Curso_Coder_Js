// SWIPER JS 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 5,
    grid: {
        rows: 1
    },
    spaceBetween: 30,
    loop: true,    

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


// fetch
// promesa que nos permite hacer peticiones o enviar información a un servidor
// este método es asincrónico
// fetch(URL, {})

fetch("https://fakestoreapi.com/products")
.then( response => response.json())
.then( productos => {
    console.log(productos)
    
    function dom (item) { 
        return `
        <div class="tarjeta" id="data-${item.id}">            
            <div class="container-img">
                <img src=${item.image || "not-found.jpg"} alt="imagen de productos ${item.title}">
            </div>            
        
            <div class="container-precio">
                <h2>
                    $ ${ item.price || "No Disponible" }
                </h2>
            </div>
        
            <h3>
                ${ item.title || "No Disponible" }
            </h3>
        
            <div class="container-info">
                <h5 class="container-categoria">
                    Categoria: ${ item.category || "No Disponible" }
                </h5>
                
            </div>`
    }
    
    const swiper = document.querySelector(".swiper-wrapper")
    console.log(swiper)

    const swiperWrapper = array => {
        const wrapper = array.reduce(( acc, item ) => {
            return acc + `
            <div class="swiper-slide">
                <div class="container-img">
                    <img src=${item.image || "not-found.jpg"} alt="imagen de productos ${item.title}">
                </div>
            </div>
            `
        },"")

        swiper.innerHTML = wrapper
    }
    swiperWrapper(productos)
    

    // busco en el html
    const container = document.querySelector(".productos-container")
    console.log(container)

    // Genero la variable para agregar las tarjetas
    const tarjeta = array  => {    
        const tarjetas = array.reduce(( acc, item ) => {
            return acc + `
            ${dom(item)}

                <h6>
                    Descripción: ${ item.description || "No Disponible" }
                </h6>
                
                <form class="form-agregarCarrito">                
                    <label>
                        <input class="agregarCarrito" id="${ item.id }" value="Agregar al Carrito" type="submit">
                    </label>
                </form>
            </div>
            `
        },"")    

        container.innerHTML = tarjetas
    }
    tarjeta(productos)
    console.log(productos)

    // evento para agregar al carrito
    function agrego (){        

        const agregarCarrito = document.querySelectorAll(".form-agregarCarrito")
        console.log(agregarCarrito)

        agregarCarrito.forEach(agregar => {
            agregar.addEventListener("submit", (e) => {
                console.log("me clickean")
                e.preventDefault()
                const id = parseInt(e.submitter.id)
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
            if ( categoriasSet.includes(item.category) ) {
                
            }else{
                categoriasSet.push(item.category);
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
                return e.category && categoria === e.category 
            })
        }
    
        const filtrarCategoriaPorNulo = ( array ) => {
            return array.filter( e => {       
                return e.category === null
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


    // array de carrito
    const agregadosAlCarrito = []

    // paso al carrito html
    const cards = array => {
        const carro = document.querySelector(".carrito-agregados");
        console.log(carro)

        const carrito = array.reduce(( acc, item ) => {
            return acc + `
                ${dom(item)}

                    <div class="container-precioPorCantidad">
                        <h2>
                           Cantidad: ${ item.cantidad }
                        </h2>
                        <h2>
                           Precio Final: $ ${ item.price * item.cantidad || "No Disponible" }
                        </h2>
                    </div>

                    <form class="form-sacarCarrito">                
                        <label>
                            <input id="${item.id}" value="Eliminar de Carrito" type="submit">
                        </label>
                    </form>
                </div>
            `
        },"")
        carro.innerHTML = carrito

        // evento para sacar del carrito
        function sacar(){
            const sacarCarrito = document.querySelectorAll(".form-sacarCarrito")
            console.log(sacarCarrito)      
            
            sacarCarrito.forEach(sacar => {
                sacar.addEventListener("submit", (e) => {
                    console.log("me clickean")
                    e.preventDefault()
                    const id = parseInt(e.submitter.id)
                    sacarDelCarrito(id)
                    // Agrego Toastify para eliminar del carrito
                    Toastify({
                        text: "Producto Eliminado del carrito",
                        duration: 900,
                        close: true,
                        gravity: "top",
                        stopOnFocus: true,
                        style: {
                        background: "linear-gradient(to right, #fe5656, #8a0211)",
                        },
                    
                    }).showToast()                      
                })
            })
        }

        sacar()
    }
    
    //funcion para agrear al carrito
    function agregarAlCarrito(id) {
        const producto = productos.find((item) => item.id === id)

        cantidad = 1
        const productoCarrito = agregadosAlCarrito.findIndex((item) => item.id === id)        
        const cantidadCarrito = agregadosAlCarrito.find((item) => item.id === id)
        
        
        
        if (producto) {
            if(productoCarrito !== -1 ){            
                
                cantidad = cantidadCarrito.cantidad + 1
                sacarDelCarrito(id)           
            }
            producto.cantidad = cantidad
            agregadosAlCarrito.push(producto)            
            cards(agregadosAlCarrito)

            // Convertir el objeto a una cadena JSON
            const agregadoAlCarrito = JSON.stringify(agregadosAlCarrito)
            // Guardar en el Local Storage
            localStorage.setItem('agregadoAlCarrito', agregadoAlCarrito)
        
            console.log("Producto agregado al carrito:", producto)
            
        }
        console.log(agregadosAlCarrito)

        // Agrego Toastify para ageregar al carrito
        Toastify({
            text: "Producto agregado al carrito",
            duration: 900,
            close: true,
            gravity: "top",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
    
          }).showToast()
    }  
    
    // funcion para sacar del carrito
    function sacarDelCarrito(id) {
        const producto = agregadosAlCarrito.findIndex((item) => item.id === id)  

        if (producto !== -1) {
            agregadosAlCarrito.splice(producto, 1)
            cards(agregadosAlCarrito)
            
            // Actualizar el Local Storage con el nuevo carrito
            const carritoActualizado = JSON.stringify(agregadosAlCarrito)
            // Guardar en el Local Storage
            localStorage.setItem('agregadoAlCarrito', carritoActualizado)

            console.log("Producto eliminado al carrito:", producto)
        }
        console.log(agregadosAlCarrito)


    }    

    // Recuperar del Local Storage y convertir de nuevo a un objeto
    const carritoLocalStorageString = localStorage.getItem('agregadoAlCarrito')
    const carritoLocalStorage = JSON.parse(carritoLocalStorageString)

    if (carritoLocalStorage) {
        agregadosAlCarrito.push(...carritoLocalStorage)
        cards(agregadosAlCarrito)
    }
})
.catch(() => console.log("error en la request"))

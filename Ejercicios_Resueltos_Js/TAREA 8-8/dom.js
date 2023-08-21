// **Tarea 1: Manipulación de Estilos de un Párrafo**
// 1. Crea un archivo HTML con un párrafo vacío. Asegúrate de enlazar tus archivos de JavaScript.
// 2. En tu archivo JavaScript, selecciona el párrafo usando `document.querySelector`.
// 3. Rellena el párrafo con el texto de Lorem Ipsum utilizando `textContent` o `innerHTML`.
// 4. Cambia los estilos del párrafo usando la propiedad `style`, configurando las siguientes propiedades:
//    - Cambia el `text-align` a `"center"`.
//    - Cambia el `font-size` a `"18px"`.
//    - Cambia el `font-weight` a `"bold"`.

const loremIpsum = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, soluta at? Rem eveniet est sequi vitae consequatur illo, veniam expedita, quod nemo unde voluptate odio vel praesentium. Cum, quia delectus."

let parrafo = document.querySelector(".parrafo-1");

parrafo.textContent = `${loremIpsum}`;
// Se pueden usar ambas, pero se rompe si se mezclan...Styles
parrafo.style = "font-size:18px";
parrafo.style.textAlign = "center";
parrafo.style.fontWeight = "bold";

console.log(parrafo.innerHTML);

// **Tarea 2: Captura de Valores de Formulario**
// 1. Crea un formulario HTML con campos de entrada para nombre (type="text"), apellido (type="text") y teléfono (type="number").
// 2. En tu archivo JavaScript, selecciona el formulario y los campos de entrada usando `document.querySelector`.
// 3. Agrega un evento de envío al formulario.
// 4. Dentro del manejador de eventos, previene el comportamiento por defecto del formulario.
// 5. Captura los valores de los campos de entrada utilizando las propiedades `value` de los elementos.
// 6. Muestra los valores capturados en la consola utilizando `console.log`.

let formulario = document.querySelector("#formu");
console.log(formulario)

// formulario.style = "font-size:20px";
// formulario.className = "asd"

// const nombre = document.querySelector("#input-nombre").value;
// console.log(`Nombre: ${nombre}`)
// const apellido = document.querySelector("#input-apellido").value;
// console.log(apellido)
// const numero = document.querySelector("#input-numero").value;
// console.log(numero)

let boton = document.querySelector("#boton")
console.log(boton)

boton.addEventListener("click", (e) => {
    e.preventDefault()

    boton.style.backgroundColor = "#0000ff"
    console.log("Click")

    const nombre = document.querySelector("#input-nombre").value;
    console.log(`Nombre: ${nombre}`)
    const apellido = document.querySelector("#input-apellido").value;
    console.log(`Apellido: ${apellido}`)
    const numero = document.querySelector("#input-numero").value;
    console.log(`Npumero: ${numero}`)

})

// **Tarea 3: Creación y Visualización de Nodos con Array de Objetos**
// 1. Crea un div vacío en tu archivo HTML donde se insertarán los nodos de los pokemones.
// 2. En tu archivo JavaScript, crea un array de objetos que representen a tus 5 pokemones favoritos. Cada objeto debe tener propiedades como `nombre`, `tipo` y `imagen`.
// 3. Selecciona el div donde insertarás los nodos utilizando `document.querySelector`.
// 4. Recorre el array de objetos utilizando un bucle (por ejemplo, un bucle `for`).
// 5. Dentro del bucle, crea los nodos, como lo vimos con reduce.
// 6. Inserta el nodo resultante en el div seleccionado utilizando `innerHTML`.

const pokemon  = [
    {
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "0.71 m",
      "weight": "6.9 kg",
      "candy": "Bulbasaur Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.69,
      "avg_spawns": 69,
      "spawn_time": "20:00",
      "multipliers": [1.58],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "next_evolution": [{
        "num": "002",
        "name": "Ivysaur"
      }, {
        "num": "003",
        "name": "Venusaur"
      }]
    }, {
      "id": 2,
      "num": "002",
      "name": "Ivysaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "0.99 m",
      "weight": "13.0 kg",
      "candy": "Bulbasaur Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.042,
      "avg_spawns": 4.2,
      "spawn_time": "07:00",
      "multipliers": [
        1.2,
        1.6
      ],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "prev_evolution": [{
        "num": "001",
        "name": "Bulbasaur"
      }],
      "next_evolution": [{
        "num": "003",
        "name": "Venusaur"
      }]
    }, {
      "id": 3,
      "num": "003",
      "name": "Venusaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "2.01 m",
      "weight": "100.0 kg",
      "candy": "Bulbasaur Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.017,
      "avg_spawns": 1.7,
      "spawn_time": "11:30",
      "multipliers": null,
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "prev_evolution": [{
        "num": "001",
        "name": "Bulbasaur"
      }, {
        "num": "002",
        "name": "Ivysaur"
      }]
    }, {
      "id": 4,
      "num": "004",
      "name": "Charmander",
      "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
      "type": [
        "Fire"
      ],
      "height": "0.61 m",
      "weight": "8.5 kg",
      "candy": "Charmander Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.253,
      "avg_spawns": 25.3,
      "spawn_time": "08:45",
      "multipliers": [1.65],
      "weaknesses": [
        "Water",
        "Ground",
        "Rock"
      ],
      "next_evolution": [{
        "num": "005",
        "name": "Charmeleon"
      }, {
        "num": "006",
        "name": "Charizard"
      }]
    }, {
      "id": 5,
      "num": "005",
      "name": "Charmeleon",
      "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
      "type": [
        "Fire"
      ],
      "height": "1.09 m",
      "weight": "19.0 kg",
      "candy": "Charmander Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.012,
      "avg_spawns": 1.2,
      "spawn_time": "19:00",
      "multipliers": [1.79],
      "weaknesses": [
        "Water",
        "Ground",
        "Rock"
      ],
      "prev_evolution": [{
        "num": "004",
        "name": "Charmander"
      }],
      "next_evolution": [{
        "num": "006",
        "name": "Charizard"
      }]
    },]

    console.log(pokemon)

    let poke = document.querySelector("#pokemones");
    console.log(poke);

    const cards = pokemon.reduce(( acc, item ) => {
        return acc + `
            <div class="card" id="pokemon-${item.id}">
                <h2>
                    ${ item.name }
                </h2>
                <div class="container-img">
                    <img src=${item.img} alt=${item.name}>
                </div>
            </div>
        `
    }, "")

    poke.innerHTML = cards;
    poke.style = "display:flex";
    
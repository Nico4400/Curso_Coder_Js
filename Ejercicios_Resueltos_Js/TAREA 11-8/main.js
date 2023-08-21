// ### Puntos de tarea para trabajar con datos de usuarios y crear tarjetas en JavaScript utilizando la variable `mockdata`:
// EL PUNTO 7 Y 8 LO HACEMOS EN CLASE EL MARTES

// 1. **Mostrar Datos Iniciales:**
//    - Accede a la variable `mockdata` en tu archivo JavaScript y muestra su contenido en la consola para verificar que los datos estén disponibles.

console.log(mockdata);

// 2. **Recorrer el Array de Usuarios:**
//    - Utiliza un bucle `for` o `forEach` para recorrer el array de usuarios (`mockdata`).
//    - Por cada usuario, imprime su información completa en la consola.

let bucle = mockdata.forEach((persona, id) => {
    console.log(persona)
    console.log(id)
})
 

// 3. **Crear Tarjetas de Usuario:**
//    - Crea un contenedor en tu HTML donde se mostrarán las tarjetas de usuario.
//    - Utiliza JavaScript para recorrer el array de usuarios (`mockdata`) y crear tarjetas individuales para cada usuario.
//    - Cada tarjeta debe mostrar el nombre completo, país y número de teléfono del usuario.

// const tarjeta = mockdata.reduce(( acc, item ) => {
//     return acc + `
//         <div class="carta" id="data-${item.id}">
//             <h2>
//                 ${ item.first_name }, ${ item.last_name }
//             </h2>
//             <h4>
//                 ${ item.country }
//             </h4>
//             <h4>
//                 ${ item.phone }
//             </h4>
//         </div>
//     `
// }, "")

// console.log(tarjeta)

// const contenedores = document.querySelector("#container")
// contenedores.style.display = "flex"
// contenedores.style.flexWrap = "wrap"
// contenedores.style.justifyContent = "space-around";
// contenedores.style.alignItems = "center";
// contenedores.style.textAlign = "center";

// contenedores.innerHTML = tarjeta

// 4. **Manejo de Datos Nulos:**
//    - Modifica el bucle de creación de tarjetas para verificar si alguna propiedad está nula en el objeto usuario.
//    - Si una propiedad está nula, muestra en su lugar el mensaje "No disponible".

// Contenedor donde se mostrarán las tarjetas de usuario
const userCardsContainer = document.querySelector("#container");

// Recorriendo el array de usuarios y creando tarjetas individuales
mockdata.forEach(user => {
  const userCard = document.createElement("div");   
  userCard.classList.add("user-card");

  const userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("user-info");

  const nombreNode = document.createElement("h2");
  nombreNode.classList.add("user-name");
  nombreNode.textContent = user.first_name || "No disponible";

  const apellidoNode = document.createElement("h2");
  apellidoNode.classList.add("user-last_name");
  apellidoNode.textContent = user.last_name || "No disponible";

  const emailNode = document.createElement("p");
  emailNode.classList.add("user-email");
  emailNode.textContent = `Email: ${user.email || "No disponible"}`;

  const generoNode = document.createElement("p");
  generoNode.classList.add("user-gender");
  generoNode.textContent = `Género: ${user.gender || "No disponible"}`;

  const appNode = document.createElement("p");
  appNode.classList.add("user-app_name");
  appNode.textContent = `App: ${user.app_name || "No disponible"}`;

  const paisNode = document.createElement("p");
  paisNode.classList.add("user-country");
  paisNode.textContent = `País: ${user.country || "No disponible"}`;

  const telefonoNode = document.createElement("p");
  telefonoNode.classList.add("user-phone");
  telefonoNode.textContent = `Teléfono: ${user.phone || "No disponible"}`;

  const direccionNode = document.createElement("p");
  direccionNode.classList.add("user-address");
  direccionNode.textContent = `Dirección: ${user.street_address || "No disponible"}`;

  userInfoDiv.appendChild(nombreNode);
  userInfoDiv.appendChild(apellidoNode);
  userInfoDiv.appendChild(emailNode);
  userInfoDiv.appendChild(generoNode);
  userInfoDiv.appendChild(appNode);
  userInfoDiv.appendChild(paisNode);
  userInfoDiv.appendChild(telefonoNode);
  userInfoDiv.appendChild(direccionNode);

  userCard.appendChild(userInfoDiv)

  userCardsContainer.appendChild(userCard);
  // console.log(userCardsContainer.appendChild(userCard))
});

// 5. **Estilo de Tarjetas:**
//    - Agrega estilos CSS para que las tarjetas de usuario sean visualmente atractivas.
//    - Asegúrate de que las tarjetas tengan un diseño limpio y legible.

// 6. **Detalles Adicionales en Tarjetas:**
//    - Agrega más detalles a las tarjetas, como la dirección de correo electrónico y el nick del usuario en el sitio.
//    - Utiliza clases de CSS para organizar la información en las tarjetas.

// 7. **Filtrar Usuarios por Género:**
//    - Agrega un botón en tu página que permita al usuario filtrar los usuarios por género (por ejemplo, masculino o femenino).
//    - Implementa la funcionalidad para mostrar solo las tarjetas de usuario que coincidan con el género seleccionado.

const femenino = document.getElementById("boton_femenino");
        femenino.addEventListener("click", () => {
        filtrarPorGenero("Female");
        console.log("Femenino clickeado");
        });

const masculino = document.getElementById("boton_masculino");
        masculino.addEventListener("click", () => {
        filtrarPorGenero("Male");
        console.log("Masculino clickeado");
        });

function filtrarPorGenero(genero){
  const userCards = document.querySelectorAll(".user-card")

  userCards.forEach(user => {
    const generoNode = user.querySelector(".user-gender")
    if (generoNode.textContent.includes(genero)) {
      user.style.display = "block";
    } else {
      user.style.display = "none";
    }
  })
}
// 8. **Búsqueda de Usuarios por Nombre:**
//    - Agrega un campo de búsqueda que permita al usuario buscar usuarios por su nombre.
//    - Implementa la funcionalidad para mostrar las tarjetas de usuario cuyos nombres coincidan con la búsqueda.

const nombre = document.getElementById("input-nombre");
        nombre.addEventListener("input", () => {
        filtrarPorNombre(nombre.value.toLowerCase());
        console.log("Bucar nombre");
        });

function filtrarPorNombre(nombre){
  const userCards = document.querySelectorAll(".user-card")

  userCards.forEach(user => {
    const nombreNode = user.querySelector(".user-name")
    if (nombreNode.textContent.toLowerCase().includes(nombre)) {
      user.style.display = "block";
    } else {
      user.style.display = "none";
    }
  })
}

// 9. **Mejoras Visuales:**
//    - Implementa transiciones suaves al mostrar u ocultar las tarjetas de usuario al aplicar filtros o búsquedas.
//    - Añade efectos visuales para resaltar la tarjeta cuando el usuario pase el cursor sobre ella.

// 10. **Responsive Design:**
//     - Asegúrate de que las tarjetas de usuario y la página en general se vean bien en dispositivos móviles y pantallas de diferentes tamaños.

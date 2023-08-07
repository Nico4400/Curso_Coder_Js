// PUNTOS SEGUNDA PREENTREGA
// PARA APROBAR, DEBEMOS HACER USO DE: ARRAYS, OBJETOS, FUNCIONES, MÉTODOS DE ARRAYS DE ITERACIÓN O MÉTODOS DE ARRAYS COMO PUSH, SPLICE, ETC, LOS QUE QUIERAN USAR
// TIENEN QUE INTERACTUAR CON EL USUARIO A TRAVÉS DE PROMPT
// PUEDEN DEVOLVER LA RESPUESTA AL USUARIO CON UN ALERT O CONSOLE.LOG
// TODOS LOS PUNTOS TIENEN QUE TRABAJAR CON ARRAYS DE OBJETOS
// SE DEBEN INSTANCIAR NUEVOS OBJETOS Y ESTOS DEBEN SER PUSHEADOS A UN ARRAY VACÍO

// CASO BLOG
// Generar una función constructora o class constructor un objeto relativo a una entrada de blog ( cadena de caracteres)
// Este objeto tiene que tener las siguientes propiedades:
// nombreDeUsuario, texto
// se deben hacer 6 variables (LA IDEA ES UQE PUSHEEN 3 OBJETOS) que contengan prompts y pregunten al usuario su nombre de usuario y su texto
// al completar estos prompt Estos objetos deben ser pusheados a un array vacío que se llame productos
// si las entradas del prompt son NULL, no se pushea nada y se le devuelve un alerta al usuario diciéndole que le falto ingresar su nombre de usuario o el texto
// al terminar con esta iteración, debemos ordenar el array por el nombre del usuario.
// si el usuario ingresa correctamente los datos, deben visualizar en la consola todos sus estados ingresados anteriormente


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

for(const e of publicacionesOrdenadas){
    alert(e.visualizarEnConsola())
    console.log(e.visualizarEnConsola())
}
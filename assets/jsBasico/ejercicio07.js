// funciones
let nombre = "pepito"

//En caso de ataques no podrian cambiar el valor de aqui
const nombreUsuario = () => {
    let nombre = prompt("Ingrese su nombre");
    alert("Tu nombre es: " + nombre)
    console.log("Tu nombre es: ", nombre); //tambien funciona ,

}

console.log(nombre);
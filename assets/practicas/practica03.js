// DOM
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");
let edadUsuario = document.getElementById("edadUsuario");
let direccionUsuario = document.getElementById("direccionUsuario");
let telefonoUsuario = document.getElementById("telefonoUsuario");
let dniUsuario = document.getElementById("dniUsuario");

/**
 * Normal : nombreUsuario.innerHTML = nombreUsuario.innerHTML + nombre;
 * Abreviado: nombreUsuario.innerHTML += nombre;
 */

const cambiarDatos = () => {
  let nombre = prompt("Ingresa tu Nombre");
  let edad = prompt("Ingresa tu Edad");
  let direccion = prompt("Ingresa tu Dirección");
  let telefono = prompt("Ingresa tu Teléfono");
  let dni = prompt("Ingresa tu Dni");

  nombreUsuario.innerHTML = "Bienvenido/a " + nombre;
  edadUsuario.innerHTML = "Edad " + edad;
  direccionUsuario.innerHTML = "Direccion " + direccion;
  telefonoUsuario.innerHTML = "Telefono " + telefono;
  dniUsuario.innerHTML = "DNI " + dni;

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("edad", edad);
  localStorage.setItem("direccion", direccion);
  localStorage.setItem("telefono", telefono);
  localStorage.setItem("dni", dni);
};

if (
  localStorage.getItem("nombre") ||
  localStorage.getItem("edad") ||
  localStorage.getItem("direccion") ||
  localStorage.getItem("telefono") ||
  localStorage.getItem("dni")
) {
  nombreUsuario.innerHTML = "Bienvenido/a " + localStorage.getItem("nombre");
  edadUsuario.innerHTML = "Edad : " + localStorage.getItem("edad");
  direccionUsuario.innerHTML = "Direccion : " + localStorage.getItem("direccion");
  telefonoUsuario.innerHTML = "telefono : " + localStorage.getItem("telefono");
  dniUsuario.innerHTML = "DNI : " + localStorage.getItem("dni");
}

// eventos
ejecutar.onclick = () => {
  cambiarDatos();
};

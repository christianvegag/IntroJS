// DOM
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

/**
 * Normal : nombreUsuario.innerHTML = nombreUsuario.innerHTML + nombre;
 * Abreviado: nombreUsuario.innerHTML += nombre;
 */

const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre");
  nombreUsuario.innerHTML += nombre;
};

// eventos
ejecutar.onclick = () => {
  cambiarNombre();
};

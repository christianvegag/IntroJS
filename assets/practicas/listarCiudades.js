let btnRegistrar = document.getElementById("btnRegistrar");
let btnListar = document.getElementById("btnListar");
let listarCiudades = document.getElementById("listarCiudades");
let limite = 6;
let ciudadArray = [];
let ciudad;

const registro = () => {
  for (let i = 0; i < limite; i++) {
    ciudad = prompt("Ingresa una Ciudad");
    ciudadArray.push(ciudad);
  }
};

const lista = () => {
  listarCiudades.innerHTML =
    "Las ciudades ingresadas son : " + ciudadArray.join(" , ");
};

btnRegistrar.onclick = () => {
  registro();
};

btnListar.onclick = () => {
  lista();
};

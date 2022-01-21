let ciudad = prompt("Ingresa tu ciudad");

switch (ciudad) {
  case "bogota":
    alert("clima frio");
    break;
  case "pasto":
    alert("clima frio");
    break;
  case "armenia":
    alert("clima templado");
    break;
  case "medellin":
    alert("clima templado");
    break;
  default:
    alert("no ingreso una ciudad valida");
    break;
}

if (ciudad === "bogota" || ciudad === "pasto") {
  alert("clima frio");
} else {
  if (ciudad === "armenia" || ciudad === "medellin") {
    alert("clima templado");
  } else {
    alert("no ingreso una ciudad valida");
  }
}

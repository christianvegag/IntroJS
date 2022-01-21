let dia = prompt("Ingrese un dia a la semana").toLowerCase();

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "miércoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
    alert("entre semana")
} else {
  if (dia === "sabado" || dia === "sábado" || dia === "domingo") {
    alert("fin semana");
  } else {
    alert("favor ingrese solo dias de la semana");
  }
}

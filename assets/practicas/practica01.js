function nombreUsuario() {
  let nombre = prompt("Ingrese su nombre");
  let edad = prompt("Ingrese su edad");
  let direccion = prompt("Ingrese su direccion");
  let dni = prompt("Ingrese su DNI");
  let telefono = prompt("Ingrese su telefono");

  alert(
    "Hola " +
      nombre +
      " :\ntu edad es : " +
      edad +
      "\ntu dirección es : " +
      direccion +
      "\ntu número telefónico es : " +
      telefono +
      "\ntu DNI es : " +
      dni
  );
  console.log(
    "Hola ",
    nombre,
    ", tu edad es : ",
    edad,
    ", tu dirección es : ",
    direccion,
    ", tu número telefónico es : ",
    telefono,
    " y tu DNI es : ",
    dni
  );
}

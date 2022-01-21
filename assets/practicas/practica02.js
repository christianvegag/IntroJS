let departamento = prompt("Ingresa un departamento");

if (departamento === "bogota") {
  let ciudad = prompt("Ingrese una ciudad");

  if (
    ciudad === "bosa" ||
    ciudad === "fontibon" ||
    ciudad === "kennedy" ||
    ciudad === "chapinero" ||
    ciudad === "engativa"
  ) {
    alert(
      "Usted selecciono la ciudad '" +
        ciudad +
        "' del departamento '" +
        departamento +
        "' de Colombia"
    );
  } else {
    alert("Usted no ingreso una ciudad válida");
  }
} else if (departamento === "antioquia") {
  let ciudad = prompt("Ingrese una ciudad");

  if (
    ciudad === "caceres" ||
    ciudad === "caucasia" ||
    ciudad === "zaragoza" ||
    ciudad === "cisneros" ||
    ciudad === "maceo"
  ) {
    alert(
      "Usted selecciono la ciudad '" +
        ciudad +
        "' del departamento '" +
        departamento +
        "' de Colombia"
    );
  } else {
    alert("Usted no ingreso una ciudad válida");
  }
} else if (departamento === "cordoba") {
  let ciudad = prompt("Ingrese una ciudad");

  if (
    ciudad === "ayapel" ||
    ciudad === "canalete" ||
    ciudad === "cotorra" ||
    ciudad === "purisima" ||
    ciudad === "chima"
  ) {
    alert(
      "Usted selecciono la ciudad '" +
        ciudad +
        "' del departamento '" +
        departamento +
        "' de Colombia"
    );
  } else {
    alert("Usted no ingreso una ciudad válida");
  }
} else if (departamento === "santander") {
  let ciudad = prompt("Ingrese una ciudad");

  if (
    ciudad === "bucaramanga" ||
    ciudad === "floridablanca" ||
    ciudad === "barrancabermeja" ||
    ciudad === "giron" ||
    ciudad === "piedecuesta"
  ) {
    alert(
      "Usted selecciono la ciudad '" +
        ciudad +
        "' del departamento '" +
        departamento +
        "' de Colombia"
    );
  } else {
    alert("Usted no ingreso una ciudad válida");
  }
} else if (departamento === "sucre") {
  let ciudad = prompt("Ingrese una ciudad");

  if (
    ciudad === "guaranda" ||
    ciudad === "morroa" ||
    ciudad === "coveñas" ||
    ciudad === "buenavista" ||
    ciudad === "galeras"
  ) {
    alert(
      "Usted selecciono la ciudad '" +
        ciudad +
        "' del departamento '" +
        departamento +
        "' de Colombia"
    );
  } else {
    alert("Usted no ingreso una ciudad válida");
  }
} else {
  alert("Usted no ingreso un departamento válido");
}

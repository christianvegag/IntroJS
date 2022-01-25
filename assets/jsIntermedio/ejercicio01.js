// fechas

let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate(); //getDay() es el item de la semana

let hora =
  fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();

//11:24:34 - 25/01/2022
console.log(hora + " - " + dia + "/" + mes + "/" + anio);

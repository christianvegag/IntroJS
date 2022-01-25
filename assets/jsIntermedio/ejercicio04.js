// Array

let personas = [];

let animales = ["Perro", "Gato", "Serpiente", "Lobo", "Escorpion", "Conejo"];

//console.log(animales);

//for (let i = 0; i < animales.length; i++) {
//console.log(animales[i]);
//}

// console.log(animales[3]);

// Reemplazar un valor

// animales[10] = "Dragon";
// console.log(animales);

// for (let i = 0; i < animales.length; i++) {
//   console.log(animales[i]);
// }

// animales.push("Ardilla");
// animales.unshift("Tigre");

//delete animales[4]; //eliminar
animales.splice(4,1);
console.log(animales);

for (let i = 0; i < animales.length; i++) {
  console.log(animales[i]);
}
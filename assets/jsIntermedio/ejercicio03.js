// DOM y For

let ejFor = document.getElementById("btnEjecutar");
let limite = 5;
// funcion

const emergente = () => {
  for (let i = 0; i < limite; i++) {
        window.open("https://www.redseguridad.com/wp-content/uploads/sites/2/2021/05/virus-informatico-900x600.jpg");
  }
};

// evento
ejFor.onclick = () => {
  emergente();
};

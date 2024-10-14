/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const valorCarta = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const paloCarta = ["♦", "♥", "♠", "♣"];
const randomizador = arr => arr[Math.floor(Math.random() * arr.length)];

window.onload = function() {
  //write your code here
  const cartaAleatoria = () => {
    //establecemos la constante carta para llamar al div con clase card
    const carta = document.querySelector(".card");

    //establecemos la constante figura para dar un valor aleatorio al palo de la carta
    const figura = randomizador(paloCarta);

    //establecemos que dependiendo la figura, las debe poner de un color u otro
    if (figura === "♥" || figura === "♦") {
      carta.classList.add("corazon");
    } else {
      carta.classList.remove("corazon");
    }

    //imprimimos el palo aleatorio de la carta en sus dos esquinas
    document.querySelector(".figura1").innerHTML = figura;
    document.querySelector(".figura2").innerHTML = figura;

    //imprimimos en el div con clase numero un numero aleatorio del array valorCarta
    document.querySelector(".numero").innerHTML = randomizador(valorCarta);
  };

  cartaAleatoria();

  const boton = document.getElementById("actualizador");
  boton.addEventListener("click", () => {
    cartaAleatoria();
  });

  setInterval(cartaAleatoria, 10000);
};

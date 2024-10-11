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
  const carta = document.querySelector(".card");
  const figura = randomizador(paloCarta);
  if (figura === "♥" || figura === "♦") {
    carta.classList.add("corazon");
  }
  document.querySelector(".figura1").innerHTML = figura;
  document.querySelector(".figura2").innerHTML = figura;
  document.querySelector(".numero").innerHTML = randomizador(valorCarta);
};

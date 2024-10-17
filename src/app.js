/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const valorCarta = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const paloCarta = ["♦", "♥", "♠", "♣"];
const randomizador = arr => arr[Math.floor(Math.random() * arr.length)];

const boton = document.getElementById("actualizador");

let ancho = document.getElementById("ancho");
let alto = document.getElementById("alto");
const boton2 = document.getElementById("medidas");

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

  boton.addEventListener("click", () => {
    cartaAleatoria();
  });

  setInterval(cartaAleatoria, 10000);

  boton2.addEventListener("click", () => {
    const carta = document.getElementById("carta");
    const width = ancho.value;
    const height = alto.value;

    if (height > 700 || width > 1500) {
      alert(
        "El alto no puede ser mayor de 700 y el ancho no puede ser mayor de 1500"
      );
    } else {
      //hacemos que la el elemento con id carta recoga los estilos introducidos de alto y ancho
      carta.style.width = `${width}px`;
      carta.style.height = `${height}px`;
    }

    //recogemos los datos del numero y las figuras de la carta
    const fontSizeFigura1 = document.getElementById("figura1");
    const fontSizeNumero = document.getElementById("numero");
    const fontSizeFigura2 = document.getElementById("figura2");

    //hacemos que el fonSize de numero y figuras de la carta se redimensionen acuerdo al alto de la carta
    const fontsize = (alto.value * 100) / 500;
    fontSizeFigura1.style.fontSize = `${fontsize}px`;
    fontSizeNumero.style.fontSize = `${fontsize}px`;
    fontSizeFigura2.style.fontSize = `${fontsize}px`;
  });
};

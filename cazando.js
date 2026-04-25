let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

// VARIABLES
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

// CONSTANTES
const ANCHO_GATO = 60;
const ALTO_GATO = 40;

const ANCHO_COMIDA = 40;
const ALTO_COMIDA = 40;

// INICIAR JUEGO
function iniciarJuego() {
  // Gato centrado
  gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
  gatoY = (canvas.height / 2) - (ALTO_GATO / 2);

  // Comida esquina inferior derecha
  comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;

  graficarGato();
  graficarComida();
}

// Dibujar gato
function graficarGato() {
  ctx.fillStyle = "orange";
  ctx.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

// Dibujar comida
function graficarComida() {
  ctx.fillStyle = "green";
  ctx.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}
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
  gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
  gatoY = (canvas.height / 2) - (ALTO_GATO / 2);

  comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;

  graficarGato();
  graficarComida();
}

// LIMPIAR CANVAS
function limpiarCanva() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// MOVER IZQUIERDA
function moverIzquierda() {
  gatoX = gatoX - 10;

  limpiarCanva();
  graficarGato();
  graficarComida();
}

// FUNCIÓN GENERAL
function graficarRectangulo(x, y, ancho, alto, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, ancho, alto);
}

// DIBUJAR GATO
function graficarGato() {
  graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "black");
}

// DIBUJAR COMIDA
function graficarComida() {
  graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "yellow");
}
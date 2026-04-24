let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

function iniciarJuego(){
  graficarGato();
  graficarComida();
}
// Dibujar gato
function graficarGato() {
  ctx.fillStyle = "orange";
  // Rectángulo centrado
  ctx.fillRect(225, 225, 50, 50);
}

// Dibujar comida
function graficarComida() {
  ctx.fillStyle = "green";
  // Esquina superior izquierda
  ctx.fillRect(0, 0, 40, 40);
}
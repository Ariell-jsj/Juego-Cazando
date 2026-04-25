let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

// Dibujar gato
function graficarGato() {
  ctx.fillStyle = "orange";
  // Rectángulo centrado
  ctx.fillRect(225, 225, 50, 50);
}

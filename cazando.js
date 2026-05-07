let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

// VARIABLES DEL JUEGO
let gatoX = 220;
let gatoY = 230;

let comidaX = 460;
let comidaY = 460;

let puntos = 0;
let tiempo = 10;
let velocidad; 

// CONSTANTES

const ANCHO_GATO = 60;
const ALTO_GATO = 40;

const ANCHO_COMIDA = 40;
const ALTO_COMIDA = 40;


// INICIAR JUEGO

function iniciarJuego(){

    clearInterval(velocidad);

    velocidad = setInterval(contarTiempo,1000);

    actualizarPantalla();
}
//Dibujos de Gato y Comida
function graficarRectangulo(x, y, ancho, alto, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, ancho, alto);
}

function graficarComida() {
  graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "yellow");
}

function graficarGato() {
  graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "black");
}

//Limpiar el canvas
function limpiarCanvas(){
   ctx.fillStyle="#87CEEB";
   ctx.fillRect(0,0,500,300);

ctx.fillStyle="#87CEEB";

    ctx.fillRect(0,0,500,500);
}

function actualizarPantalla(){
  limpiarCanvas();
  graficarComida();
  graficarGato();

}

// Movimiento del gato
function moverIzquierda(){
  gatoX=gatoX-10;
  actualizarPantalla();
  detectarColision();
}

function moverDerecha(){
  gatoX=gatoX+10;
  actualizarPantalla();
  detectarColision();
}

function moverArriba(){
  gatoY=gatoY-10;
  actualizarPantalla();
  detectarColision();
}

function moverAbajo(){
  gatoY=gatoY+10;
  actualizarPantalla();
  detectarColision();
}

// DETECTAR COLISION
function detectarColision(){
  if(
    gatoX + ANCHO_GATO >= comidaX &&
    gatoX <= comidaX + ANCHO_COMIDA &&
    gatoY + ALTO_GATO >= comidaY &&
    gatoY <= comidaY + ALTO_COMIDA
  ){

    alert("¡El gato atrapó la comida!");
    aparecerComida();
    puntos=puntos+1;
    mostrarEnSpan("puntos",puntos);
    }
}

function aparecerComida(){
  comidaX=generarAleatorio(0, canvas.width - ANCHO_COMIDA);
  comidaY=generarAleatorio(0, canvas.height - ALTO_COMIDA);
  actualizarPantalla();
}

function mostaraMensaje(texto, tiempo){
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = texto;

    setTimeout(function(){
        mensaje.textContent = "";
    }, tiempo);
}

function contarTiempo(){
    tiempo--;
    mostrarEnSpan("tiempo", tiempo);

    if(tiempo == 0){
        alert("Se acabó el tiempo");
        clearInterval(velocidad);
    }
}


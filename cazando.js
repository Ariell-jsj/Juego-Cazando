let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

// VARIABLES DEL JUEGO
let gatoX = 220;
let gatoY = 230;

let comidaX = 460;
let comidaY = 460;

let puntos = 0;
let tiempo = 60;
let velocidad; 

// CONSTANTES

const ANCHO_GATO = 60;
const ALTO_GATO = 40;

const ANCHO_COMIDA = 40;
const ALTO_COMIDA = 40;


// INICIAR JUEGO

function iniciarJuego(){

    clearInterval(velocidad);

    velocidad = setInterval(restarTiempo,1000);
    
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

    if(gatoX > 0){

        gatoX = gatoX - 10;
    }

    actualizarPantalla();

    detectarColision();
}

function moverDerecha(){

    if(gatoX + ANCHO_GATO < canvas.width){

        gatoX = gatoX + 10;
    }

    actualizarPantalla();

    detectarColision();
}

function moverArriba(){

    if(gatoY > 0){

        gatoY = gatoY - 10;
    }

    actualizarPantalla();

    detectarColision();
}

function moverAbajo(){

    if(gatoY + ALTO_GATO < canvas.height){

        gatoY = gatoY + 10;
    }

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

    aparecerComida();
    puntos=puntos+1;
    mostrarEnSpan("puntos",puntos);
    }

    if(puntos == 10){

    alert("¡Felicidades, ganaste!");

    clearInterval(velocidad);
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

function restarTiempo(){

    tiempo--;

    mostrarEnSpan("tiempo", tiempo);

    if(tiempo == 0){

        alert("Game Over");

        clearInterval(velocidad);
    }
}

function reiniciarJuego(){

    // POSICIÓN DEL GATO
    gatoX = 220;
    gatoY = 230;

    // POSICIÓN DE LA COMIDA
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);

    // REINICIAR PUNTOS
    puntos = 0;

    // REINICIAR TIEMPO
    tiempo = 60;

    // MOSTRAR EN PANTALLA
    mostrarEnSpan("puntos", puntos);
    mostrarEnSpan("tiempo", tiempo);

    // LIMPIAR MENSAJE
    document.getElementById("mensaje").textContent = "";

    // REINICIAR TEMPORIZADOR
    clearInterval(velocidad);

    velocidad = setInterval(restarTiempo, 1000);

    // ACTUALIZAR JUEGO
    actualizarPantalla();
}
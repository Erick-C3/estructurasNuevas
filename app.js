const leer = require("prompt-sync")();

function main() {
    /* let puntosVida = 1000;
    let puntaje = 0; */
    let personaje = {
        puntosVida: 1000,
        puntaje: 0
    }

    actualizarPuntosDe(personaje);

    console.log(personaje);
}

main();

function actualizarPuntosDe(personaje) {
    personaje.puntosVida--;
    personaje.puntaje++;
}

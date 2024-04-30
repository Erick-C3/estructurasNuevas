const leer = require("prompt-sync")();


function main() {
    let nombreVector= [1, 2, 3, 4, 15,-23];
    
    console.log("antes",nombreVector);
    modificar(nombreVector[0]);// 1
    console.log("despues",nombreVector);

    console.log("El tamaño del 'vector' es:", nombreVector.length);
}





main();

function modificar(nombreVector) {
    console.log("antes 2", nombreVector);
    nombreVector[0] = "modificado";
    console.log("despues 2", nombreVector);
}

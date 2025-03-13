const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let frutas = ["manzana", "naranja", "pera"];

rl.question("Ingresa la posición: ", function(input) {
    let posicion = parseInt(input);

    if (isNaN(posicion) || posicion < 0 || posicion >= frutas.length) {
        console.log("Posición inválida. Ingresa un número entre 0 y", frutas.length - 1);
    } else {
        console.log("Fruta seleccionada:", frutas[posicion]);
    }

    rl.close();
});

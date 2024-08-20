const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let Negativos = 0;
let Positivos = 0;
let Multiplos15 = 0;
let ParesAcumulados = 0;
let valoresIngresados = 0;

console.log('Ingresa 10 valores enteros:');

rl.on('line', (input) => {
    let numero = parseInt(input);
    
    if (isNaN(numero)) {
        console.log('Por favor, ingresa un número válido.');
        return;
    }

    // Incrementamos el contador de valores ingresados
    valoresIngresados++;

    // Contar positivos y negativos
    if (numero < 0) {
        Negativos++;
    } else if (numero > 0) {
        Positivos++;
    }

    // Contar múltiplos de 15
    if (numero % 15 === 0) {
        Multiplos15++;
    }

    // Acumular los números pares
    if (numero % 2 === 0) {
        ParesAcumulados += numero;
    }

    // Si hemos leído 10 valores, mostramos los resultados y cerramos
    if (valoresIngresados === 10) {
        console.log('Resultados:');
        console.log('Cantidad de valores negativos ingresados:', Negativos);
        console.log('Cantidad de valores positivos ingresados:', Positivos);
        console.log('Cantidad de múltiplos de 15:', Multiplos15);
        console.log('Valor acumulado de los números pares:', ParesAcumulados);
        
        rl.close();
    }
});

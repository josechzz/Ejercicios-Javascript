/* EJERCICIO 8: 
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado 
por el usuario. */

const readline = require('readline');

// Crear una interfaz de lectura para la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar al usuario que ingrese un número
rl.question('Por favor, ingresa un número: ', (numero) => {
  // Convertir la entrada en un número entero
  numero = parseInt(numero);

  // Verificar si la entrada es un número válido
  if (!isNaN(numero)) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    
    // Generar la tabla de multiplicar del 1 al 10
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  } else {
    console.log('Por favor, ingresa un número válido.');
  }

  // Cerrar la interfaz de lectura
  rl.close();
});

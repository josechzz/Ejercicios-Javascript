/* EJERCICIO 9: 
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en 
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida” */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce la temperatura en Celsius: ', (input) => {
  // Convertir la entrada a un número
  const celsius = parseFloat(input);

  // Convertir Celsius a Fahrenheit
  const fahrenheit = (celsius * 9/5) + 32;

  // Determinar el mensaje según el rango de la temperatura
  let mensaje;
  if (fahrenheit >= 14 && fahrenheit < 32) {
    mensaje = 'Temperatura baja';
  } else if (fahrenheit >= 32 && fahrenheit < 68) {
    mensaje = 'Temperatura adecuada';
  } else if (fahrenheit >= 68 && fahrenheit < 96) {
    mensaje = 'Temperatura alta';
  } else {
    mensaje = 'Temperatura desconocida';
  }

  // Mostrar el resultado
  console.log(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)} ºF`);
  console.log(mensaje);

  // Cerrar la interfaz readline
  rl.close();
});

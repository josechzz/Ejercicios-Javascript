function calcularPromedios() {
    // Obtener edades de cada turno
    const edadesManana = obtenerEdades('edadManana', 5);
    const edadesTarde = obtenerEdades('edadTarde', 6);
    const edadesNoche = obtenerEdades('edadNoche', 11);

    // Calcular promedios
    const promedioManana = calcularPromedio(edadesManana);
    const promedioTarde = calcularPromedio(edadesTarde);
    const promedioNoche = calcularPromedio(edadesNoche);

    // Determinar el turno con mayor promedio
    let mensaje = `Promedio Mañana: ${promedioManana.toFixed(2)}<br>`;
    mensaje += `Promedio Tarde: ${promedioTarde.toFixed(2)}<br>`;
    mensaje += `Promedio Noche: ${promedioNoche.toFixed(2)}<br>`;

    const mayorPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);
    if (mayorPromedio === promedioManana) {
        mensaje += "El turno con el mayor promedio de edades es: Mañana";
    } else if (mayorPromedio === promedioTarde) {
        mensaje += "El turno con el mayor promedio de edades es: Tarde";
    }  else if (mayorPromedio === promedioNoche) {
        mensaje += "El turno con el mayor promedio de edades es: Noche";
    } 
    else{
        mensaje += "Sin ningun dato";
    }

    // Mostrar resultado
    document.getElementById('resultado').innerHTML = mensaje;
}

function obtenerEdades(prefix, cantidad) {
    const edades = [];
    for (let i = 1; i <= cantidad; i++) {
        const edad = parseInt(document.getElementById(`${prefix}${i}`).value);
        if (!isNaN(edad)) {
            edades.push(edad);
        }
    }
    return edades;
}

function calcularPromedio(edades) {
    const suma = edades.reduce((total, edad) => total + edad, 0);
    return suma / edades.length;
}
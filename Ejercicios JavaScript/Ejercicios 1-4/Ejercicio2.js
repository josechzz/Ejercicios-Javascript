function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    const porcentajeExamen = 0.20;
    const porcentajeTareas = 0.40;
    const porcentajeAsistencia = 0.10;
    const porcentajeInvestigacion = 0.30;

    const notaFinal = (examen * porcentajeExamen) +
                      (tareas * porcentajeTareas) +
                      (asistencia * porcentajeAsistencia) +
                      (investigacion * porcentajeInvestigacion);

    console.log("Datos del Alumno:");
    console.log("Nombre:", nombre);
    console.log("Carnet:", carnet);
    console.log("Nota Final:", notaFinal.toFixed(2)); // Mostrar la nota final con 2 decimales
}

calcularNotaFinal("Jose Chavez", "CH12043", 9.5, 7.0, 9.0, 8.5);

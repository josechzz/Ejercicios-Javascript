function calcularAumento(nombre, salario, categoria) {
    //porcentajes de aumento para cada categoría
    const aumentos = {
        A: 0.15,
        B: 0.30,
        C: 0.10,
        D: 0.20
    };

    // Se caclula el aumento basado en la categoría
    const porcentajeAumento = aumentos[categoria];
    const aumento = salario * porcentajeAumento;
    const nuevoSalario = salario + aumento;

    // Se muestran los datos del empleado y el aumento salarial
    console.log("Datos del Empleado:");
    console.log("Nombre:", nombre);
    console.log("Salario Actual: $" + salario.toFixed(2));
    console.log("Categoría:", categoria);
    console.log("Aumento Salarial: $" + aumento.toFixed(2));
    console.log("Nuevo Salario: $" + nuevoSalario.toFixed(2));
}

calcularAumento("Jose Chavez", 1500, "B");

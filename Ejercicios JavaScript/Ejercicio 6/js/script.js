function calcularDescuento(event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();
    
    // Obtener el modelo seleccionado
    const destino = document.getElementById('destino').value;
    let descuento = 0;

    // Determinar el descuento basado en el modelo
    switch (destino) {
        case 'La Costa del Sol':
            descuento = 5;
            break;
        case 'Panchimalco':
            descuento = 10;
            break;
        case 'Puerto el Triunfo':
            descuento = 15;
            break;
        default:
            descuento = 0;
    }

    // Mostrar el resultado en HTML
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ` <p>El destino Seleccionado: ${destino}</p>
                              <p>Tiene el descuento del: ${descuento}%</p>`;
}
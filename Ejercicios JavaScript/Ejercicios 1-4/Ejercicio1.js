function verificarMayorDeEdad(edad) {
    return edad >= 18 ? "La persona es mayor de edad." : "La persona es menor de edad.";
}

let edadUsuario = 16; 
console.log(verificarMayorDeEdad(edadUsuario));

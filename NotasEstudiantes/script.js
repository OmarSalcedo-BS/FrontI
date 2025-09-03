
function calcularPromedio(notas) {
    if (notas.length === 0) return 0;
    const suma = notas.reduce((acc, curr) => acc + curr, 0);
    return suma / notas.length;
}

function desempeñoEstudiante(promedio) {
    if (promedio >= 4.7) {
        return "Excelente"
    } else if (promedio >= 4.0) {
        return "Sobresaliente"
    } else if (promedio >= 3.0) {
        return "Aceptable"
    } else {
        return "Insuficiente"
    }
}


function resultadoEstudiante(promedio) {
    return promedio >= 3.0 ? "Aprobado" : "Reprobado";
}

function mostrarResultados(estudiante) {
    console.log(`\n--- Reporte académico ---`);
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Documento: ${estudiante.documento}`);
    console.log(`Notas registradas: [${estudiante.notas.join(', ')}]`);
    console.log(`Promedio final: ${estudiante.promedio.toFixed(2)}`);
    console.log(`Desempeño: ${estudiante.desempeño}`);
    console.log(`Estado: ${estudiante.estado}`);

}

function ingresarNotas() {
    let notas = [];
    let numeroNotas = parseInt(prompt("Ingrese el número de notas que va a ingresar (Máximo 5): "));
    if (isNaN(numeroNotas) || numeroNotas < 1 || numeroNotas > 5) {
        alert("Cantidad de notas inválida. Por favor ingrese un número entre 1 y 5.");
        return ingresarNotas();
    }

    for (let i = 0; i < numeroNotas; i++) {
        let nota;

        nota = parseFloat(prompt(`Ingrese la nota ${i + 1}: `));
        if (isNaN(nota) || nota < 0 || nota > 5.0) {
            alert("Nota inválida. Por favor ingrese una nota entre 0 y 5.");
            i--;
        }
        notas.push(nota);
    }
    return notas;
}

const estudiantes = [];
let mejorPromedio = -1;
let mejorEstudiante = "";
let peorPromedio = 6;
let peorEstudiante = "";

for (let i = 0; i < 3; i++) {
     console.log(`\n--- Ingreso de datos para el estudiante #${i + 1} ---`);
    const nombre = prompt("Ingrese el nombre del estudiante:");
    const documento = prompt("Ingrese el documento del estudiante:");

    const notas = ingresarNotas();
    const promedio = calcularPromedio(notas);
    const desempeño = desempeñoEstudiante(promedio);
    const estado = resultadoEstudiante(promedio);

    const estudiante = {
        nombre,
        documento,
        notas,
        promedio,
        desempeño,
        estado
    };


    estudiantes.push(estudiante);
    mostrarResultados(estudiante);

    if (promedio > mejorPromedio) {
        mejorPromedio = promedio;
        mejorEstudiante = nombre;
    }       
    if (promedio < peorPromedio) {      
        peorPromedio = promedio;
        peorEstudiante = nombre;
    }   

    console.log("\n--- Resumen Final ---");
console.log(`Estudiante con el mejor promedio: ${mejorPromedio} (Promedio: ${mejorPromedio.toFixed(2)})`);
console.log(`Estudiante con el peor promedio: ${peorPromedio} (Promedio: ${peorPromedio.toFixed(2)})`);
}
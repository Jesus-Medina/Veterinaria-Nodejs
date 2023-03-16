const fs = require("fs");

function registrar(paciente) {
    // Leer el contenido del archivo citas.json
    const citasJSON = fs.readFileSync("citas.json")

    // Convertir el contenido de citas.json en un objeto JavaScript
    const citas = JSON.parse(citasJSON)

    // Agregar el nuevo paciente al arreglo de citas
    citas.push(paciente)

    // Convertir el objeto JavaScript actualizado a STRING
    const citasJSONActualizado = JSON.stringify(citas, null, 2)

    // Guardar el JSON actualizado en el archivo citas.json
    fs.writeFileSync("citas.json", citasJSONActualizado)
}

function leer() {
    // Leer el contenido del archivo citas.json
    const citasJSON = fs.readFileSync("citas.json")

    // Convertir el contenido de citas.json en un objeto JavaScript
    const convertirCitasAJSON = JSON.parse(citasJSON)

    // Guardamos un arreglo de objetos con el formato que queramos
    const pacientes = convertirCitasAJSON.map((paciente, numero) => {
        return {
            "Paciente": numero + 1,
            "Nombre": paciente.nombre,
            "Edad": paciente.edad,
            "Animal": paciente.animal,
            "Color": paciente.color,
            "Enfermedad": paciente.enfermedad
        }
    })

    // Imprimimos el resultado en formato de tabla
    console.table(convertirCitasAJSON)
}


module.exports = { registrar, leer };
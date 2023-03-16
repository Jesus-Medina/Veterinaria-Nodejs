const { registrar, leer } = require("./operaciones")

const argumentos = process.argv.slice(2)
const operacion = argumentos[0]


if(operacion === "registrar"){
    if(argumentos.length === 6){
        const paciente = {
            nombre: argumentos[1],
            edad: argumentos[2],
            animal: argumentos[3],
            color: argumentos[4],
            enfermedad: argumentos[5]
        }

        registrar(paciente)
        console.log("¡Registro exitoso!")
    } else {
        console.log("¡Error!")
        console.log("Parametros erroneos ingrese los datos correctamente por favor...")
        console.log("Parametros: Nombre, Edad, Animal, Color y Enfermedad")
    }

} else if (operacion === "leer"){
    console.log("leer")
    leer()
} else {
    console.log(`Ingrese una opcion valida y vuelva a intentarlo ("registrar" o "leer")`)
}
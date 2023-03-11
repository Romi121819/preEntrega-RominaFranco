class Banco {
    constructor(nombre, id, tasa12, tasa24) {
        this.nombre = nombre
        this.id = id
        this.tasa12 = tasa12
        this.tasa24 = tasa24
    }
}
const santander = new Banco("santander", 1, 10, 11, 12)
const frances = new Banco("frances", 2, 13, 14, 15)
const provincia = new Banco("provincia", 3, 4, 5, 6)

let seleccioneBanco = parseInt(
    prompt(
        "selecciona tu Banco 1.Santander 2.Frances 3.Provincia"
    )
)

let seleccionoBanco = false

let infoBancoSelecccionado

while (seleccionoBanco === false) {
    if (seleccioneBanco === 1) {
        seleccionoBanco = true
        infoBancoSeleccionado = Santander
    } else if (seleccioneBanco === 2) {
        seleccionoBanco = true
        infoBancoSeleccionado = Frances
    } else if (seleccioneBanco === 3) {
        seleccionoBanco = true
        infoBancoSeleccionado = Provincia
    } else {
        seleccionoBanco = parseInt(
            prompt(
                "selecciona un numero CORRECTO 1.Santander 2.Frances 3.Provincia"
            )
        )
    }
}

const importeSolicitado = parseInt(prompt("Ingresa el importe de tu prestamo personal"))

const cuota12 = calculadorCuota(importeSolicitado, infoBancoSelecccionado.tasa12, 12)
const cuota24 = calculadorCuota(importeSolicitado, infoBancoSelecccionado.tasa24, 24)
console.log(cuota12, cuota24)

function calculadorCuota(monto, interes, meses) {
    const cuota = (monto + (monto * interes)) / 100 / meses
    return cuota
}

alert(
    'Las opciones disponibles en ${infoBancoSeleccionado.nombre} son: 1. ${cuota12} mensuales a 12 meses - 2. ${cuotas24} mensuales a 24 meses'
)
console.log("seleccioneBanco", infoBancoSeleccionado, importeSolicitado)
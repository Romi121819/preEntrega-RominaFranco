class Banco {
    constructor(nombre, id, tasa12, tasa24) {
        this.nombre = nombre
        this.id = id
        this.tasa12 = tasa12
        this.tasa24 = tasa24
    }
}

const bancos = [
    new Banco('santander', 1, 10, 11),
    new Banco('frances', 2, 13, 14),
    new Banco('provincia', 3, 4, 5),
]

let seleccioneBanco = parseInt(
    prompt(
        'selecciona tu Banco 1.Santander 2.Frances 3.Provincia'
    )
)

let seleccionoBanco = false

let banco

while (seleccionoBanco === false) {
    banco = bancos.find((banco) => banco.id === seleccioneBanco)
    if (!banco) {
        seleccioneBanco = parseInt(
            prompt(
                'selecciona un numero CORRECTO 1.Santander 2.Frances 3.Provincia'
            )
        )
    } else {
        seleccionoBanco = true
    }
}

const importeSolicitado = parseInt(
    prompt('Ingresa el importe de tu prestamo personal')
)

const cuota12 = calculadorCuota(importeSolicitado, banco.tasa12, 12)
const cuota24 = calculadorCuota(importeSolicitado, banco.tasa24, 24)

function calculadorCuota(monto, interes, meses) {
    const cuota = (monto + monto * interes) / 100 / meses
    return cuota
}

alert(
    `Las opciones disponibles en ${banco.nombre} son: 1. ${cuota12} mensuales a 12 meses - 2. ${cuota24} mensuales a 24 meses`
)



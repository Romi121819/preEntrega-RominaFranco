class Banco {
    constructor(nombre,id,tasa12,tasa24){
        this.nombre = nombre
        this.id = id
        this.tasa12 = tasa12
        this.tasa24 = tasa24
    }
}
const santander = new Banco ("santander",1,10,11,12)
const frances = new Banco ("frances",2,13,14,15)
const provincia = new Banco ("provincia",3,4,5,6)   

let seleccioneBanco = parseInt(
 prompt(
    "selecciona tu Banco 1.Santander 2.Frances 3.Provincia"
    )
 )

let seleccionoBanco = false

let infoBancoSelecccionado

while (seleccionoBanco === false) {
    if (seleccioneBanco ===1) {
        seleccionoBanco = true
        infoBancoSeleccionado = Santander
    } else if (seleccioneBanco ===2) {
        seleccionoBanco = true
        infoBancoSeleccionado = Frances
    } else if (seleccioneBanco===3) {
        seleccionoBanco = true
        infoBancoSeleccionado = Provincia
    } else {
        seleccionoBanco = parseInt(
            prompt(
                "selecciona un numero CORRECTO 1.Santander 2.Frances 3.Provincia"
            ))
    }
}

const importeSolicitado = parseInt(pronpt("Ingresa el importe de tu prestamo personal"))

const cuota12 = calculadorCuota(importeSolicitado, infoBancoSeleccionado.tasa12,12)
const cuota24 = calculadorCuota(importeSolicitado,infoBancoSeleccionado.tasa24,24)

function calculadorCuota(monto,intereses,meses){
    const cuota = ((monto*(monto*intereses))/100)/meses
    return cuota
}

console.log("seleccioneBanco",infoBancoSeleccionado,importeSolicitado)
